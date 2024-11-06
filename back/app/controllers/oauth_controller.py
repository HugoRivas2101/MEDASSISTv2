# backend/controllers/oauth_controller.py

from flask import redirect, url_for, session, jsonify
from app import google


class OAuthController:
    @staticmethod
    def login():
        try:
        # Redirige al usuario al proveedor OAuth (Google)
            redirect_uri = url_for("oauth.authorize", _external=True)
            return google.authorize_redirect(redirect_uri)
        except Exception as e:
            return f"Error ocurred during login: {str(e)}",500

    @staticmethod
    def authorize():
        try:
            # Manejar el callback del proveedor y obtener el token
            token = google.authorize_access_token()
            user_info = google.parse_id_token(token)

            # Guardar la información del usuario en la sesión
            session['user'] = user_info
            
            return jsonify(user_info)  # Puedes cambiar esto a una redirección si prefieres
        except Exception as e:
            return jsonify({"error": f"Error occurred during authorization: {str(e)}"}), 500

    @staticmethod
    def get_user():
        # Verificar si el usuario está autenticado
        if 'user' in session:
            return jsonify(session['user'])
        else:
            return jsonify({"error": "No autorizado"}), 401
