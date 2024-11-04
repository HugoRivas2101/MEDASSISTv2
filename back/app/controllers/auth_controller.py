from flask import jsonify
from ..models.user import User
from .. import db, bcrypt
from flask_jwt_extended import create_access_token

class AuthController:

    @staticmethod
    def login(data):
        email = data.get('email')
        password = data.get('password')
        
        user = User.query.filter_by(email=email).first()
        if user and bcrypt.check_password_hash(user.password, password):
            access_token = create_access_token(identity={'id': user.id,'username': user.username, 'email': user.email})
            return jsonify(access_token=access_token), 200
        else:
            return jsonify({"msg": "Invalid credentials"}), 401
    
    def register(data):
        email = data.get('email')
        username = data.get('username')
        password = data.get('password')

        user_name=User.query.filter_by(username=username).first()
        if user_name:
            return jsonify({"msg": "User already exists"}), 409
        
        hashed_password=bcrypt.generate_password_hash(password).decode('utf-8')
        new_user=User(username=username,password=hashed_password,email=email)
        db.session.add(new_user)
        db.session.commit()

        access_token=create_access_token(identity={'id': new_user.id,'username':username,'email':email})
        return jsonify(access_token=access_token),201
    