'''
Este formato para el chat entre usuarios
lo saqué de gpt xd pero puede servir para una guia inicial. Igual lo dejo a tu criterio.
'''
# backend/app/models/message.py
from .. import db
from datetime import datetime

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    content = db.Column(db.String(500), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
