# backend/routes/oauth_routes.py

from flask import Blueprint
from ..controllers.oauth_controller import OAuthController


oauth_bp = Blueprint("oauth", __name__,url_prefix='/oauth')

@oauth_bp.route("/login")
def login():
    return OAuthController.login()

@oauth_bp.route("/authorize")
def authorize():
    return OAuthController.authorize()

@oauth_bp.route("/user")
def get_user():
    return OAuthController.get_user()