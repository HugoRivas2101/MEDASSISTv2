from flask import jsonify, session
from ..models.user import User
from ..models.user_medications import UserMedication
from .. import db


class UserMedicationController:
    @staticmethod
    def get_user_medication():

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
            user_medication = user.user_medication
            if not user_medication:
                return jsonify({"error": "Información no encontrada"}), 404

            # Devolver la información del usuario
            return jsonify({
                "nombres": user_medication.nombre_medicamento,
            }), 200
        except Exception as e:
            return jsonify({"error": f"Error al obtener información del usuario: {str(e)}"}), 500