from app import db, create_app

def reset_database():
    """
    Reinicia la base de datos eliminando y recreando todas las tablas.
    """
    app = create_app()
    with app.app_context():
        print("Eliminando tablas existentes...")
        db.drop_all()
        print("Recreando tablas...")
        db.create_all()
        print("Base de datos reiniciada con éxito.")

        # Cargar datos iniciales (opcional)
        seed_data()

def seed_data():
    """
    Carga datos iniciales en la base de datos después de reiniciarla.
    """
    from app.models.user import User
    from app.models.user_info import UserInfo

    # Crear usuario de ejemplo
    user = User(email="hugorivas2101@gmail.com", password="hashed_password")

    db.session.add(user)
    db.session.commit()

    # Crear información adicional para el usuario
    user_info = UserInfo(
        user_id=user.id,
        nombres="Administrador",
        dni="12345678",
        telefono="987654321",
        domicilio="Calle Falsa 123",
        edad=30,
        sexo="Masculino"
    )
    db.session.add(user_info)
    db.session.commit()

    print("Datos iniciales cargados con éxito.")
