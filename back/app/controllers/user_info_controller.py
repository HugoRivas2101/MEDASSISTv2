from flask import jsonify, session
from ..models.user import User
from ..models.user_info import UserInfo
from .. import db

class UserInfoController:
    @staticmethod
    def get_user_info():
        """
        Obtiene la información del usuario autenticado.
        """
        try:
            # Obtener el usuario actual desde la sesión
            user_email = session.get('user', {}).get('email')
            if not user_email:
                return jsonify({"error": "Usuario no autenticado"}), 401

            # Buscar el usuario por correo
            user = db.session.query(User).filter(User.email == user_email).first()
            if not user:
                return jsonify({"error": "Usuario no encontrado"}), 404

            # Acceder a la información de UserInfo
            user_info = user.user_info
            if not user_info:
                return jsonify({"error": "Información no encontrada"}), 404

            # Devolver la información del usuario
            return jsonify({
                "correo": user_email,
                "nombres": user_info.nombres,
                "dni": user_info.dni,
                "telefono": user_info.telefono,
                "domicilio": user_info.domicilio,
                "edad": user_info.edad,
                "sexo": user_info.sexo
            }), 200
        except Exception as e:
            return jsonify({"error": f"Error al obtener información del usuario: {str(e)}"}), 500
