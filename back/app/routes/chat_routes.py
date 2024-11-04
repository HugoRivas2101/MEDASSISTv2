'''
Este formato para el chat entre usuarios
lo saqué de gpt xd pero puede servir para una guia inicial. Igual lo dejo a tu criterio.
'''

# backend/app/routes/chat_routes.py
from flask import Blueprint, request
#from flask_socketio import emit, join_room
from .. import socketio
from ..controllers.chat_controller import ChatController

chat_bp = Blueprint('chat', __name__)

@socketio.on('join')
def on_join(data):
    username = data['username']
    room = data['room']
    #join_room(room)
    #emit('message', {'username': 'System', 'content': f'{username} has joined the room.'}, to=room)

@socketio.on('message')
def on_message(data):
    username = data['username']
    content = data['content']
    room = data['room']
    # Guarda el mensaje en la base de datos
    ChatController.save_message(username, content)
    # Emite el mensaje a la sala
    #emit('message', {'username': username, 'content': content}, to=room)
