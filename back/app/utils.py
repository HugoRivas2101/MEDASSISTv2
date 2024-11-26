from app import db, create_app
from datetime import date

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
    from app.models.user_medications import UserMedication

    # Crear usuario de ejemplo
    user1 = User(email="hugorivas2101@gmail.com", password="hashed_password")

    db.session.add(user1)
    db.session.commit()

    # Crear información adicional para el usuario
    user_info = UserInfo(
        user_id=user1.id,
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

    # Obtener un usuario
    user = db.session.query(User).filter_by(email='hugorivas2101@gmail.com').first()

    # Crear un nuevo medicamento
    new_medication = UserMedication(
        user_id=user.id,
        nombre_medicamento="Paracetamol",
        dosis="500mg",
        frecuencia="Cada 8 horas",
        fecha_inicio=date(2024, 11, 25),
        fecha_fin=date(2024, 12, 5)
    )

    # Añadir el medicamento al usuario
    db.session.add(new_medication)
    db.session.commit()

