# backend/app/controllers/medical_history_controller.py
from flask import jsonify
from ..models.medical_history import MedicalHistory
from .. import db
from flask_jwt_extended import get_jwt_identity

class MedicalHistoryController:
    @staticmethod
    def get_medical_history(user_id):
        records = MedicalHistory.query.filter_by(user_id=user_id).all()
        return jsonify([{
            "id": record.id,
            "condition": record.condition,
            "treatment": record.treatment,
            "notes": record.notes,
            "created_at": record.created_at
        } for record in records])

    @staticmethod
    def add_medical_history(user_id, data):
        new_record = MedicalHistory(
            user_id=user_id,
            condition=data.get('condition'),
            treatment=data.get('treatment'),
            notes=data.get('notes')
        )
        db.session.add(new_record)
        db.session.commit()
        return jsonify({"msg": "Registro agregado exitosamente"}), 201

    @staticmethod
    def update_medical_history(user_id, record_id, data):
        record = MedicalHistory.query.filter_by(id=record_id, user_id=user_id).first()
        if not record:
            return jsonify({"msg": "No tienes acceso a este registro"}), 403
        record.condition = data.get('condition', record.condition)
        record.treatment = data.get('treatment', record.treatment)
        record.notes = data.get('notes', record.notes)
        db.session.commit()
        return jsonify({"msg": "Registro actualizado exitosamente"}), 200
