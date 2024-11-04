from flask import jsonify

class TestController:

    @staticmethod
    def test():
        return jsonify({"mensaje": "Hola test"}),200