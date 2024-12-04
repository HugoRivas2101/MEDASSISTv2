from flask import Blueprint, request, jsonify
from werkzeug.utils import secure_filename
import os
from ..controllers.chatbot_controller import ChatbotController

chatbot_bp = Blueprint('chatbot', __name__, url_prefix='/chatbot')

# Configura una carpeta para guardar las imágenes subidas
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@chatbot_bp.route('/tellme', methods=['POST'])
def chat():
    user_input = request.json.get("message")
    bot_response = ChatbotController.get_response(user_input)
    return jsonify({"response": bot_response})

@chatbot_bp.route('/imagen', methods=['POST'])
def upload_image():
    # Verifica si hay un archivo en la solicitud
    if 'imagen' not in request.files:
        return jsonify({"error": "No se ha subido ningún archivo"}), 400
    
    file = request.files['imagen']
    
    # Verifica si el nombre del archivo está vacío
    if file.filename == '':
        return jsonify({"error": "No se ha seleccionado un archivo"}), 400
    
    # Verifica si el archivo tiene una extensión permitida
    if file and allowed_file(file.filename):
        # Genera un nombre de archivo seguro
        filename = secure_filename(file.filename)
        
        # Asegúrate de que exista la carpeta de uploads
        os.makedirs(UPLOAD_FOLDER, exist_ok=True)
        
        # Guarda el archivo
        filepath = os.path.join(UPLOAD_FOLDER, filename)
        file.save(filepath)
        
        # Realiza el diagnóstico de la imagen (debes implementar esta lógica)
        try:
            diagnostico = ChatbotController.diagnosticar_imagen(filepath)
            
            # Opcional: eliminar el archivo después de procesarlo
            # os.remove(filepath)
            
            return jsonify({
                "diagnostico": diagnostico, 
                "filename": filename
            })
        
        except Exception as e:
            return jsonify({"error": str(e)}), 500
    
    return jsonify({"error": "Tipo de archivo no permitido"}), 400