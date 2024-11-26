from flask import jsonify, session
from ..models.user import User
from ..models.user_medications import UserMedication
from .. import db

class UserMedicationController:
    @staticmethod
    def get_user_medication():
        """
        Obtiene la información de los medicamentos del usuario autenticado.
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

            # Acceder a los medicamentos del usuario
            user_medications = user.user_medications
            if not user_medications:
                return jsonify({"error": "No hay medicamentos registrados"}), 404

            # Construir una lista con los medicamentos
            medications_list = [
                {
                    "id": med.id,
                    "nombre_medicamento": med.nombre_medicamento,
                    "dosis": med.dosis,
                    "frecuencia": med.frecuencia,
                    "fecha_inicio": med.fecha_inicio,
                    "fecha_fin": med.fecha_fin,
                }
                for med in user_medications
            ]

            # Devolver la lista de medicamentos
            return jsonify(medications_list), 200
        except Exception as e:
            return jsonify({"error": f"Error al obtener información del usuario: {str(e)}"}), 500
