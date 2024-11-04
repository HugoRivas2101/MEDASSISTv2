from .. import db
from datetime import datetime

class MedicalHistory(db.Model):
    __tablename__ = 'medical_histories'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)  # Clave foránea al usuario
    condition = db.Column(db.String(255), nullable=False)
    treatment = db.Column(db.String(255))
    notes = db.Column(db.Text)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    user = db.relationship('User', backref=db.backref('medical_histories', lazy=True))