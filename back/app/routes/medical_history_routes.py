# backend/app/routes/medical_history_routes.py
from flask import Blueprint, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from ..controllers.medical_history_controller import MedicalHistoryController

from flask import jsonify

medical_history_bp = Blueprint('medical_history', __name__, url_prefix='/medical_history')

@medical_history_bp.route('/', methods=['GET'])
@jwt_required()
def get_history():
    user = get_jwt_identity()
    user_id = user.get("id")
    '''
    return jsonify([{
            "id": user_id
        }])
        '''
    return MedicalHistoryController.get_medical_history(user_id=user['id'])

@medical_history_bp.route('/', methods=['POST'])
@jwt_required()
def add_history():
    user = get_jwt_identity()
    data = request.get_json()
    return MedicalHistoryController.add_medical_history(user_id=user['id'], data=data)

@medical_history_bp.route('/<int:record_id>', methods=['PUT'])
@jwt_required()
def update_history(record_id):
    user = get_jwt_identity()
    data = request.get_json()
    return MedicalHistoryController.update_medical_history(user_id=user['id'], record_id=record_id, data=data)
