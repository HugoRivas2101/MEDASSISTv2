from .. import db

class VitalSigns(db.Model):
    __tablename__ = 'vital_signs'

    id = db.Column(db.Integer, primary_key=True)  # ID único del registro
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Relación con `users`
    altura = db.Column(db.Numeric(5, 2))  # Altura en metros
    peso = db.Column(db.Numeric(5, 2))  # Peso en kilogramos
    imc = db.Column(db.Numeric(5, 2))  # Índice de masa corporal (calculado o almacenado)
    temperatura = db.Column(db.Numeric(4, 1))  # Temperatura corporal en °C
    frecuencia_respiratoria = db.Column(db.Integer)  # Respiraciones por minuto
    presion_arterial = db.Column(db.String(10))  # Presión arterial (ejemplo: 120/80)
    frecuencia_cardiaca = db.Column(db.Integer)  # Latidos por minuto

    # Relación inversa para acceder desde `User`
    user = db.relationship('User', back_populates='vital_signs')
