import React from "react";
import "./Landing.css";
import Navbar from "./components/Navbar";
import DoctorsMA from "./assets/doctors.png";
import iconusers from "./assets/iconuser.png";
import pencil from "./assets/pencil.png";
import receta from "./assets/receta.png";
import reloj from "./assets/relog.png";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Logominsa from "./assets/minsalogo.png";

function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <header className="header">
        <div className="landing-header-content">
          <h1 style={{ fontSize: "xxx-large", textAlign: "start" }}>
            MedAssist: Tu compañero de salud moderno
          </h1>
          <p style={{ width: "50%", textAlign: "start" }}>
            Nuestra plataforma integra todas las herramientas necesarias para
            tener un diagnóstico online. Puedes ver tu calendario de citas,
            acceso a un historial médico, tener comunicación con el doctor e
            incluso preguntarle a una IA para tu diagnóstico inicial. Además,
            puedes dar seguimiento al calendario de citas de otros usuarios, ya
            sean pacientes o doctores.
          </p>
          <div className="cta-buttons" style={{ display: "flex" , gap: "10px"}}>
          <button className="cta-button" onClick={() => window.location.href = '/login'}>Acceder como paciente</button>
          <button className="cta-button" onClick={() => window.location.href = '/login'}>Acceder como doctor</button>
          </div>
          <div className="minsa" style={{ display: "flex", gap: "4vh" ,flexDirection: "column" ,alignItems: "start" }}>
            <p>En colaboración con</p>
            <img
              src={Logominsa}
              alt="minsa"
              style={{ width: "40%", height: "40%" ,backgroundColor: "white"}}
            />
            </div>
          
        </div>
      </header>

      <section id="features" className="features">
        <div className="image-container-doctor-landing">
          <img
            src={DoctorsMA}
            alt="doctors"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div
          className="features-landing"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "xx-large" }}>
            Únete a MedAssist: La comunidad de salud en línea
          </h1>
          <div class="content-feature-landing">
            <div class="feature-square">
              <div className="feature-number-container">
                <h3 className="feature-number">1</h3>
              </div>
              <div
                className="feature-text-landing"
                style={{ textAlign: "start" }}
              >
                <h3>Atención personalizada</h3>
                <span style={{ fontSize: "small" }}>
                  Reciba servicios de salud integral adaptados a sus necesidades
                  únicas
                </span>
              </div>
            </div>
            <div class="feature-square">
              <div className="feature-number-container">
                <h3 className="feature-number">2</h3>
              </div>
              <div
                className="feature-text-landing"
                style={{ textAlign: "start" }}
              >
                <h3>Gestión de citas en línea</h3>
                <span style={{ fontSize: "small" }}>
                  Reserve, cambie o cancele citas con facilidad y rapidez.
                </span>
              </div>
            </div>
            <div class="feature-square">
              <div className="feature-number-container">
                <h3 className="feature-number">3</h3>
              </div>
              <div
                className="feature-text-landing"
                style={{ textAlign: "start" }}
              >
                <h3>Seguro y privado</h3>
                <span style={{ fontSize: "small" }}>
                  Su información de salud está protegida con los últimos
                  protocolos de seguridad
                </span>
              </div>
            </div>
            <div class="feature-square">
              <div className="feature-number-container">
                <h3 className="feature-number">4</h3>
              </div>
              <div
                className="feature-text-landing"
                style={{ textAlign: "start" }}
              >
                <h3>Orientación de expertos</h3>
                <span style={{ fontSize: "small" }}>
                  Conéctese con profesionales de la salud calificados a través
                  de llamadas de video seguras
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="key-features" className="key-features">
        <h2
          style={{
            textAlign: "center",
            fontSize: "xx-large",
            paddingBottom: "20px",
          }}
        >
          Nuestros Servicios de Asistencia Médica
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <div className="key-feature">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "46%",
                height: "10vh",
              }}
            >
              <img
                src={reloj}
                alt="imagen de perfil"
                style={{ width: "80%", height: "100%" }}
              />
            </div>
            <h3>24/7 Support</h3>
            <p>Get medical assistance whenever you need it, day or night.</p>
          </div>
          <div className="key-feature">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40%",
              }}
            >
              <img
                src={pencil}
                alt="imagen de perfil"
                style={{ width: "80%", height: "10vh" }}
              />
            </div>
            <h3>Video Consultations</h3>
            <p>
              Connect with a doctor face-to-face for personalized advice and
              care.
            </p>
          </div>
          <div className="key-feature">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40%",
              }}
            >
              <img
                src={receta}
                alt="imagen de perfil"
                style={{ width: "80%", height: "10vh" }}
              />
            </div>
            <h3>E-Prescriptions</h3>
            <p>
              Receive digital prescriptions directly from your doctor for
              convenient refills.
            </p>
          </div>
          <div className="key-feature">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40%",
              }}
            >
              <img
                src={iconusers}
                alt="imagen de perfil"
                style={{ width: "80%", height: "10vh" }}
              />
            </div>
            <h3>Secure Records</h3>
            <p>
              Access your medical history, appointments, and lab results
              securely online.
            </p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h2>Testimonios de nuestros pacientes satisfechos</h2>
        <blockquote>
          <p>
            “MedAssist ha hecho que la atención médica sea mucho más fácil. Las
            citas en línea y el soporte las 24 horas son increíblemente
            convenientes.”
          </p>
          <cite>- Sara M.</cite>
        </blockquote>
        <blockquote>
          <p>
            “Me sentía un poco escéptico sobre las consultas en video, pero mi
            médico fue fantástico. Todo el proceso fue profesional y eficiente.”
          </p>
          <cite>- John B.</cite>
        </blockquote>
        <blockquote>
          <p>
            “Me gustaría agregar un testimonio más para que sea más completo”
          </p>
          <cite>- Andrew R.</cite>
        </blockquote>
      </section>

      <div id="contact" className="contactanos">
        <h2>Conéctate con nosotros</h2>
        <form className="contact-form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" required></textarea>
          <button type="submit">Contáctanos</button>
        </form>
       
      </div>
      <footer className="footer">
      <div className="contact-info">
          <div>
            <h3>Información de contacto</h3>
            <p>Teléfono: +1-555-123-4567</p>
            <p>Correo electrónico: soporte@medassist.com</p>
            <p>Dirección: 123 Calle Principal, Ciudad, CA 12345</p>
          </div>
          <div className="social-media">
            <h3>Redes sociales</h3>
            <div className="social-icons" style={{ display: "flex" , gap: "10px" ,fontSize: "4vh"}}>
            <FaInstagram  />
            <FaTwitter  />
            <FaFacebook  />
            <FaWhatsapp  />
            </div>
           
            {/* <FaLinkedin  /> */}
          </div>

        </div>
        <p>&copy; 2024 MedAssist. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
