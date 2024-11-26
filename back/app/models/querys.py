from app.models.user import User
from back.app.models.user_medications import UserMedication

def obtener_usuario_con_medicamentos(user_id):
    user = User.query.get(user_id)
    if user:
        return {
            "user": user.correo,
            "medicamentos": [
                {"nombre": m.nombre_medicamento, "dosis": m.dosis}
                for m in user.medications
            ]
        }
    return None

def obtener_todos_los_usuarios():
    return User.query.all()
