from app import db

class UserMedication(db.Model):
    __tablename__ = 'user_medications'

    id = db.Column(db.Integer, primary_key=True)  # ID único del medicamento
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    nombre_medicamento = db.Column(db.String(100), nullable=False)  # Nombre del medicamento
    dosis = db.Column(db.String(50), nullable=False)  # Dosis (ejemplo: 500mg)
    frecuencia = db.Column(db.String(50), nullable=False)  # Frecuencia (ejemplo: Cada 8 horas)
    fecha_inicio = db.Column(db.Date)  # Fecha de inicio del tratamiento
    fecha_fin = db.Column(db.Date)  # Fecha de finalización del tratamiento (opcional)

    # Relación inversa para acceder desde `User`
    #user = db.relationship('User', back_populates='user_info')