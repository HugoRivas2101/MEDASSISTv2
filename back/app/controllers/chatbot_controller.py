# backend/app/controllers/chatbot_controller.py
import google.generativeai as genai
import os

# Configura la API Key de Gemini desde las variables de entorno
genai.configure(api_key=os.getenv("API_KEY_GEMINI"))
prompt_description="Eres un asistente de doctor y debes responder a todas las preguntas relacionadas a medicina que te hagan los usuarios."
model=genai.GenerativeModel(model_name="gemini-1.5-pro-002",system_instruction=prompt_description)


class ChatbotController:
    @staticmethod
    def get_response(user_input):
        # Lógica para conectarse a la API y obtener una respuesta
        response = model.generate_content(
            user_input
        )
        # Obtener la respuesta de OpenAI y devolverla
        bot_response = response.text.strip()
        return bot_response
