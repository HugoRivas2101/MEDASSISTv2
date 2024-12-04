# backend/controllers/oauth_controller.py

from flask import redirect, url_for, session, jsonify
from app import google
import secrets

class OAuthController:
    @staticmethod
    def login():
        try:
            # Generar un nonce único
            nonce = secrets.token_urlsafe()
            session['oauth_nonce']=nonce
        # Redirige al usuario al proveedor OAuth (Google)
            redirect_uri = url_for("oauth.authorize", _external=True)
            return google.authorize_redirect(redirect_uri,nonce=nonce)
        except Exception as e:
            return f"Error ocurred during login: {str(e)}",500

    @staticmethod
    def authorize():
        try:
            # Manejar el callback del proveedor y obtener el token
            token = google.authorize_access_token()

            # Obtener el nonce almacenado en la sesión
            nonce_in_session = session.get("oauth_nonce")
            if not nonce_in_session:
                return jsonify({"error": "Nonce not found in session"}), 400

            # Validar el ID Token con el nonce
            
            user_info = google.parse_id_token(token, nonce=nonce_in_session)

            # Guardar la información del usuario en la sesión
            session.pop('oauth_nonce', None)  # Limpiar el nonce después de usarlo
            session['user'] = user_info
            
            #return jsonify(user_info)  # Puedes cambiar esto a una redirección si prefieres
            return redirect(f"http://localhost:5173/home")
        except Exception as e:
            return jsonify({"error": f"Error occurred during authorization: {str(e)}"}), 500

    @staticmethod
    def get_user():
        # Verificar si el usuario está autenticado
        if 'user' in session:
            return jsonify(session['user'])
        else:
            return jsonify({"error": "No autorizado"}), 401
