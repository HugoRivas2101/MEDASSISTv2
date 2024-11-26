from flask import Blueprint
from ..controllers.user_info_controller import UserInfoController
from ..controllers.user_medication_controller import UserMedicationController
from ..controllers.user_vital_signs_controller import UserVitalSignsController

user_bp = Blueprint('user', __name__, url_prefix='/user')

@user_bp.route('/info', methods=['GET'])
def get_user_info():
    return UserInfoController.get_user_info()


@user_bp.route('/medicines', methods=['GET'])
def get_user_medicines():
    return UserMedicationController.get_user_medication()

@user_bp.route('/signs', methods=['GET'])
def get_user_signs():
    return UserVitalSignsController.get_user_vital_signs()
