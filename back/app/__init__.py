from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from .config import Config
from dotenv import load_dotenv
from authlib.integrations.flask_client import OAuth
import os

db = SQLAlchemy()
bcrypt = Bcrypt()
jwt = JWTManager()
oauth=OAuth()

load_dotenv()

google = oauth.register(
    name="google",
    #client_id=app.config["GOOGLE_CLIENT_ID"],  # Desde Config
    client_id=os.getenv("GOOGLE_CLIENT_ID"),
    #client_secret=app.config["GOOGLE_CLIENT_SECRET"],  # Desde Config
    client_secret=os.getenv("GOOGLE_CLIENT_SECRET"),
    #authorize_url="https://accounts.google.com/o/oauth2/auth",
    #access_token_url="https://accounts.google.com/o/oauth2/token",
    server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
    client_kwargs={"scope": "openid profile email","nonce": True}
)



def create_app():
    app = Flask(__name__)
    app.config.from_object(Config) # Cargar toda la configuración desde Config

    CORS(app)

    db.init_app(app)
    bcrypt.init_app(app)
    jwt.init_app(app)
    oauth.init_app(app)    

    with app.app_context():
        from .routes.auth_routes import auth_bp
        from .routes.test_routes import test_bp
        from .routes.medical_history_routes import medical_history_bp
        from .routes.chatbot_routes import chatbot_bp
        from .routes.oauth_routes import oauth_bp
        from .routes.user_info_routes import user_bp

        app.register_blueprint(auth_bp)
        app.register_blueprint(test_bp)
        app.register_blueprint(medical_history_bp)
        app.register_blueprint(chatbot_bp)
        app.register_blueprint(oauth_bp)
        app.register_blueprint(user_bp)
        '''
        Acá agregamos los blueprints(son como módulos que creas).
        Los blueprints son declarados en las rutas de /routes/. Faltaría agregar el blueprint de chat.

        from .routes.chat_routes import chat_bp
        app.register_blueprint(chat_bp)

        '''

    return app
