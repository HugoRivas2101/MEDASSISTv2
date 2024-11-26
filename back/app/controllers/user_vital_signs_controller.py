from flask import jsonify, session
from ..models.user import User
from ..models.vital_signs import VitalSigns
from .. import db

class UserVitalSignsController:
    @staticmethod
    def get_user_vital_signs():
        """
        Obtiene los últimos signos vitales del usuario autenticado.
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

            # Acceder a los signos vitales del usuario
            vital_signs = db.session.query(VitalSigns).filter_by(user_id=user.id).order_by(VitalSigns.id.desc()).first()
            if not vital_signs:
                return jsonify({"error": "No se encontraron signos vitales registrados"}), 404

            # Devolver la información de los signos vitales
            return jsonify({
                "altura": str(vital_signs.altura),
                "peso": str(vital_signs.peso),
                "imc": str(vital_signs.imc),
                "temperatura": str(vital_signs.temperatura),
                "frecuencia_respiratoria": vital_signs.frecuencia_respiratoria,
                "presion_arterial": vital_signs.presion_arterial,
                "frecuencia_cardiaca": vital_signs.frecuencia_cardiaca
            }), 200
        except Exception as e:
            return jsonify({"error": f"Error al obtener los signos vitales: {str(e)}"}), 500
