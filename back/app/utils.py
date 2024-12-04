from app import db, create_app
from datetime import date
import random

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

    # Diccionario de correos y nombres asignados
    users_data = {
        "hugorivas2101@gmail.com": {"nombre": "Hugo Rivas", "edad": 30, "sexo": "Masculino"},
        "hugo.rivas.g@uni.pe": {"nombre": "Hugo Rivas", "edad": 30, "sexo": "Masculino"},
        "milagros.ruiz.a@uni.pe": {"nombre": "Milagros Ruiz", "edad": 30, "sexo": "Femenino"},
        "andrei.trujillo.a@uni.pe": {"nombre": "Andrei Trujillo", "edad": 30, "sexo": "Masculino"},
        "cleber.aguado.g@uni.pe": {"nombre": "Cleber Aguado", "edad": 30, "sexo": "Masculino"}
    }
    
    # Iterar sobre el diccionario de correos y nombres
    for email, user_info in users_data.items():
        # Asignar nombre y demás datos
        user_name = user_info["nombre"]
        user_age = user_info["edad"]
        user_sex = user_info["sexo"]
        user_password = "hashed_password"  # Simula una contraseña
        user_dni = random.randint(10000000, 99999999)  # Genera un DNI aleatorio
        user_phone = f"98765{random.randint(10000, 99999)}"  # Genera un teléfono aleatorio
        user_address = f"Calle {random.choice(['Falsa', 'Real', 'Ejemplo'])} {random.randint(1, 200)}"  # Dirección aleatoria
        
        # Crear el usuario en la base de datos
        user = User(email=email, password=user_password)
        db.session.add(user)
        db.session.commit()

        # Crear información adicional para el usuario
        user_info_obj = UserInfo(
            user_id=user.id,
            nombres=user_name,
            dni=str(user_dni),
            telefono=user_phone,
            domicilio=user_address,
            edad=user_age,
            sexo=user_sex
        )
        db.session.add(user_info_obj)
        db.session.commit()

        print(f"Información del usuario {email} cargada con éxito.")

        # Crear medicamentos aleatorios para el usuario
        new_medication = UserMedication(
            user_id=user.id,
            nombre_medicamento="Paracetamol",
            dosis="500mg",
            frecuencia="Cada 8 horas",
            fecha_inicio=date(2024, 11, 25),
            fecha_fin=date(2024, 12, 5)
        )
        db.session.add(new_medication)
        db.session.commit()

        print(f"Medicamentos para el usuario {email} cargados con éxito.")

        # Crear signos vitales aleatorios para el usuario
        vital_signs = VitalSigns(
            user_id=user.id,
            altura=round(random.uniform(1.5, 1.9), 2),  # Altura aleatoria entre 1.5m y 1.9m
            peso=round(random.uniform(50, 100), 1),  # Peso aleatorio entre 50kg y 100kg
            imc=round(random.uniform(18.5, 30.0), 1),  # IMC entre valores saludables
            temperatura=round(random.uniform(36.0, 37.5), 1),  # Temperatura en un rango normal
            frecuencia_respiratoria=random.randint(12, 20),  # Frecuencia respiratoria entre 12 y 20
            presion_arterial=f"{random.randint(100, 140)}/{random.randint(60, 90)}",  # Presión arterial
            frecuencia_cardiaca=random.randint(60, 100)  # Frecuencia cardíaca entre 60 y 100
        )
        db.session.add(vital_signs)
        db.session.commit()

        print(f"Signos vitales para el usuario {email} cargados con éxito.")
