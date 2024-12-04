from flask import Blueprint, request
from ..controllers.chatbot_controller import ChatbotController
from flask import jsonify

chatbot_bp = Blueprint('chatbot', __name__, url_prefix='/chatbot')

@chatbot_bp.route('/tellme', methods=['POST'])
def chat():
    user_input=request.json.get("message")
    #return ChatbotController.get_response(user_input)
    bot_response = ChatbotController.get_response(user_input)
    return jsonify({"response": bot_response})
    
    #return jsonify({"response": "respuesta del chat"})
