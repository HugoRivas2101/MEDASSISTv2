import google.generativeai as genai
import os
import PIL.Image

# Configura la API Key de Gemini desde las variables de entorno
genai.configure(api_key=os.getenv("API_KEY_GEMINI"))

# Prompt para el diagnóstico de imágenes médicas
prompt_image_diagnostic = """
Eres un asistente médico especializado en análisis de imágenes. 
analiza la radiografía que adjunto. Observa las estructuras óseas, posibles fracturas, deformidades, o cualquier otra anormalidad. Proporciona un diagnóstico basado en la imagen y sugiere un plan de tratamiento si se encuentra alguna irregularidad


Tus tareas son:
1. Identificar el tipo de imagen médica (radiografía, resonancia, etc.)
2. Describir hallazgos relevantes de manera clara y concisa
3. Sugerir posibles implicaciones médicas 
4. Recomendar seguimiento profesional si es necesario

Importante:
- Sé preciso y objetivo
- Usa lenguaje médico comprensible
- No des diagnósticos definitivos
- Sugiere siempre consultar a un profesional de la salud

Formato de respuesta:
- Tipo de imagen: [descripción]
- Hallazgos principales: [descripción]
- Recomendaciones: [sugerencias]

Quiero que no uses asteriscos porque se ve mal. Trata de enviar todo en texto plano.
"""

# Prompt para descripción general de imágenes
prompt_general_image = """
Eres un asistente para descripción de imágenes. 
Proporciona un análisis detallado pero conciso de lo que ves en la imagen.
Describe:
- Contenido principal
- Elementos destacados
- Contexto o posible propósito de la imagen

Sé objetivo y descriptivo.
"""

prompt_description = "Eres un asistente de doctor y debes responder a todas las preguntas relacionadas a medicina que te hagan los usuarios. Las respuestas deben ser cortas y precisas. EL formato de salida que usarás será texto plano, evita usar asteriscos o caracteres especiales a menos que sea verdaderamente necesario."

model = genai.GenerativeModel(
    model_name="gemini-1.5-pro-002", 
    system_instruction=prompt_description
)

class ChatbotController:
    @staticmethod
    def get_response(user_input):
        # Lógica para conectarse a la API y obtener una respuesta
        response = model.generate_content(user_input)
        # Obtener la respuesta de Gemini y devolverla
        bot_response = response.text.strip()
        return bot_response
    
    @staticmethod
    def diagnosticar_imagen(image_path):
        """
        Procesa una imagen médica usando Gemini
        
        Args:
            image_path (str): Ruta del archivo de imagen
        
        Returns:
            str: Descripción o diagnóstico de la imagen
        """
        try:
            # Cargar la imagen
            image = PIL.Image.open(image_path)
            
            # Modelo específico para imágenes
            vision_model = genai.GenerativeModel(
                model_name="gemini-1.5-pro-002", 
                system_instruction=prompt_image_diagnostic
            )
            
            # Generar contenido con la imagen
            response = vision_model.generate_content(
                [prompt_image_diagnostic, image], 
                stream=False
            )
            
            # Verificar si la generación fue exitosa
            response.resolve()
            
            # Devolver el texto de la respuesta
            return response.text.strip()
        
        except Exception as e:
            # Manejo de errores
            print(f"Error al procesar imagen: {e}")
            
            # Intentar con modelo general si falla diagnóstico médico
            try:
                general_model = genai.GenerativeModel(
                    model_name="gemini-1.5-pro-002", 
                    system_instruction=prompt_general_image
                )
                
                general_response = general_model.generate_content(
                    [prompt_general_image, image], 
                    stream=False
                )
                
                general_response.resolve()
                return general_response.text.strip()
            
            except Exception as general_error:
                print(f"Error en descripción general: {general_error}")
                return "No fue posible analizar la imagen. Por favor, intente con otra."