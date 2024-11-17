import React, { useState }from "react";
import loginImage from "./assets/image-login.png";
import googleIcon from "./assets/google-logo.svg";
import MedAssistlogo from '../../assets/MedAssistLogo.png';
import api from '../../services/api';
import "./Login.css";

function Login() {

  const [userType, setUserType] = useState("Paciente");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try{
        
      const response = await api.post("http://localhost:5000/auth/login", {
            email,
            password,
          });
          const { access_token } = response.data;
          localStorage.setItem("token",access_token);
          alert("Registro exitoso")
          //window.location.href = "/HistorialMedico"
    }catch(error){
        alert("Error en la solicitud")
    }
  };
  const handleGoogleLogin = () => {
    // Redirige a la ruta del backend configurada para manejar Google OAuth
    window.location.href = "http://localhost:5000/login";
  };

  return (
    <main className="login-container">
      <div className="login-imagen">
        <img src={loginImage} alt="imagen de login" />
      </div>
   <div className="login-content">
      <div className="login-panel">
        <div className="login-header">
          
          <div className="line-container">
            <hr className="line" />
            <div className="circle">
              <img src={MedAssistlogo} alt="perfil" onClick={() => window.location.href = '/landing'} />
            </div>
            <hr className="line" />
          </div>
          <div className="login-select-user">
          <div className={`login-user-type ${userType === "Paciente" ? "active" : ""}`} onClick={() => setUserType("Paciente")}>Paciente</div>
          <div className={`login-user-type ${userType === "Doctor" ? "active" : ""}`} onClick={() => setUserType("Doctor")}>Doctor</div>
          </div>
        </div>
        <div className="login-box">
          <h2>Iniciar Sesión como {userType}</h2>
          <button className="google-login-button" onClick={handleGoogleLogin}>
            <img src={googleIcon} alt="Google login" className="google-icon" />
          </button>
          <form onSubmit={handleSubmit}>
            <label>Correo Electrónico</label>
            <input
            type="email"
            placeholder="Ingresa tu correo"
            value={email || ""}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <label>Contraseña</label>
            <input type="password"
            placeholder="Ingresa tu contraseña"
            value={password || ""}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit" >Ingresar</button>
          </form>
          
          <p className="login-register-link">
            ¿No estás registrado? <a href="/register">Crear una cuenta</a>
          </p>
        </div>
      </div>
    </div>
      
     
    </main>
  );
}

export default Login;
