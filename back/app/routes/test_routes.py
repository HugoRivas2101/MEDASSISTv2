from flask import Blueprint, request
from ..controllers.test_controller import TestController

test_bp = Blueprint('test', __name__, url_prefix='/test')
'''
3er parámetro (opcional): es para indicar una url que va a prefijar a las rutas que declares en el archivo.
    Por ejemplo, yo puse test y si quieres acceder a la función que declaré abajo debo de ingresar a
    http://localhost:5000/test/tester
'''
@test_bp.route('/tester', methods=['GET'])
def test():
    #data = request.get_json()
    return TestController.test()
    #return AuthController.login(data)
    