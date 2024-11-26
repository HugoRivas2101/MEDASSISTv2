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
    from app.models.vital_signs import VitalSigns

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

    print("Información del usuario cargada con éxito.")

    # Crear un nuevo medicamento
    new_medication = UserMedication(
        user_id=user1.id,
        nombre_medicamento="Paracetamol",
        dosis="500mg",
        frecuencia="Cada 8 horas",
        fecha_inicio=date(2024, 11, 25),
        fecha_fin=date(2024, 12, 5)
    )
    db.session.add(new_medication)
    db.session.commit()

    print("Medicamentos cargados con éxito.")

    # Crear signos vitales para el usuario
    vital_signs = VitalSigns(
        user_id=user1.id,
        altura=1.75,
        peso=70.5,
        imc=23.0,
        temperatura=36.5,
        frecuencia_respiratoria=18,
        presion_arterial="120/80",
        frecuencia_cardiaca=72
    )
    db.session.add(vital_signs)
    db.session.commit()

    print("Signos vitales cargados con éxito.")
