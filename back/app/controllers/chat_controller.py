'''
Este formato para el chat entre usuarios
lo saqué de gpt xd pero puede servir para una guia inicial. Igual lo dejo a tu criterio.
'''

# backend/app/controllers/chat_controller.py
from ..models.message import Message
from .. import db

class ChatController:
    @staticmethod
    def save_message(username, content):
        message = Message(username=username, content=content)
        db.session.add(message)
        db.session.commit()
        return message
