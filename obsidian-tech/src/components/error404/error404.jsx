import React from "react";
import { Link } from "react-router-dom";
import ImgError from "../../assets/404-error-page-header-transparent.webp";
import "../error404/Error404.css";
const Page404 = () => {
  return (
    <section className="section section-error">
      <div className="container-error container grid">
        <h3>Pagina en construccion</h3>
        <img src={ImgError} alt="" />
        <p className="paragraph">
          Pronto estará lista, disculpe las molestias. Mientras tanto le
          sugerimos descubrir nuestro catalogo
        </p>
        <Link to={'/'} className="btn1">Volver</Link>
      </div>
    </section>
  );
};

export default Page404;
