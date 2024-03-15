import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faSquareInstagram, faFacebook, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import "../footer/Footer.css";

const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="containerFooter container grid">
        <article className="containerLogFooter">
          <h2>Obsidian-Tech</h2>
          <p className="about-description">
            Somos expertos en ventas de tecnología, nos dedicamos a proporcionar
            lo mejor para los proyectos de nuestros clientes. Activamente
            buscamos emprendedores interesados en unirse a nuestro proyecto.
            Contáctanos para más información.
          </p>
        </article>
        <article className="containerContactos">
          <h5>CONTACTO:</h5>
          <ul className="contact-list">
            <li className="item-contacto">
              General Paz 576, Piso 8, oficina 2
            </li>
            <li className="item-contacto">San Miguel de Tucumán, Argentina</li>
            <li className="item-contacto">info@Obsidian-Tech.com.ar</li>
            <li className="item-contacto">+54 381 606-4103</li>
          </ul>
        </article>
        <article className="containerSocialFooter">
          <h5>SEGUINOS:</h5>
          <ul className="social-list">
            <li>
              <Link className="linksFoot" to={"https://www.youtube.com/"}>
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </li>
            <li>
              <Link className="linksFoot" to={"https://www.instagram.com/"}>
                <FontAwesomeIcon icon={faSquareInstagram} />
              </Link>
            </li>
            <li>
              <Link className="linksFoot" to={"https://www.facebook.com/"}>
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li>
              <Link className="linksFoot" to={"*"}>
                <FontAwesomeIcon icon={faXTwitter} />
              </Link>
            </li>
            <div className="box-logo-rs"></div>
          </ul>
        </article>
      </div>
      <div className="about-logo">
        <div className="box-about-logo">
          <span>Desarrollado por alumnos de la comisión 28i de: </span>
          <span className="logoRolling">
            {"<"}
            {">"}
          </span>
          <a
            className="linkRolling"
            href="https://web.rollingcodeschool.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            RollingCode SCHOOL
          </a>
        </div>
        <span className="footer-copyright">
          Copyright &copy; 2023 Obsidian-Tech. Todos los derechos reservados
        </span>
      </div>
    </footer>
  );
};

export default Footer;
