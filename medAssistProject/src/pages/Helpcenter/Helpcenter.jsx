// import React, { useState } from "react";
import React from "react";
import "./HelpCenter.css";

function HelpCenter() {
  return (
    <div className="help-center">
      <header className="header">
        <h1>Tu Centro de Ayuda</h1>
        <p>
          Encuentra las respuestas que necesitas, obtén soporte personalizado y comparte tus comentarios para mejorar tu experiencia.
        </p>
      </header>

      <section className="contact-section">
        <h2>Contáctanos</h2>
        <div className="community">
          <a href="https://gamma.app/?utm_source=made-with-gamma" target="_blank" rel="noopener noreferrer">
            Comunidad
          </a>
        </div>
      </section>

      <section className="feedback-section">
        <h2>Tu Opinión Importa</h2>
        <p>
          Comparte tus ideas y sugerencias para ayudarnos a mejorar. Tus comentarios son valiosos para que podamos ofrecer una experiencia de usuario excepcional.
        </p>
        <a href="https://gamma.app/?utm_source=made-with-gamma" className="button" target="_blank" rel="noopener noreferrer">
          Envía tu Opinión
        </a>
      </section>

      <section className="solutions-section">
        <h2>Soluciones a tus Problemas</h2>
        <div className="solutions">
          <div className="solution">
            <h3>Asistencia Técnica</h3>
            <p>
              ¿Necesitas ayuda con algún problema técnico? Nuestro equipo de asistencia técnica está aquí para ayudarte a resolverlo.
            </p>
          </div>
          <div className="solution">
            <h3>Preguntas Frecuentes</h3>
            <p>
              Encuentra respuestas a las preguntas más comunes en nuestra sección de preguntas frecuentes, con información detallada y explicaciones claras.
            </p>
            <a href="https://gamma.app/?utm_source=made-with-gamma" target="_blank" rel="noopener noreferrer">
              Ver Preguntas Frecuentes
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HelpCenter;
