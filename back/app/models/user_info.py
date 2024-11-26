from .. import db

class UserInfo(db.Model):
    __tablename__ = 'user_info'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    nombres = db.Column(db.String(100), nullable=False)
    dni = db.Column(db.String(8), unique=True)
    telefono = db.Column(db.String(15))
    domicilio = db.Column(db.Text)
    edad = db.Column(db.Integer)
    sexo = db.Column(db.String(10))

    #user = db.relationship('User', backref=db.backref('user_info', uselist=False))
    user = db.relationship('User', back_populates='user_info')