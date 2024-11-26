from .. import db

'''
class User(db.Model):


    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    correo = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128))
    oauth_provider = db.Column(db.String(50))
    oauth_id = db.Column(db.String(100))
    oauth_token = db.Column(db.Text)
    
'''
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)

    user_info = db.relationship('UserInfo', back_populates='user', uselist=False)
    user_medications = db.relationship('UserMedication',back_populates='user',lazy=True,cascade="all, delete-orphan")
    vital_signs=db.relationship('VitalSigns', back_populates='user', uselist=False)