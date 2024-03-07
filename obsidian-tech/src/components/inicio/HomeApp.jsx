import { useState } from "react";

import { Link } from "react-router-dom";
import { ProductGrid } from "../grillaDeProductos/ProductGrid";

import Loader from "../loader/Loader";

import "../inicio/HomeApp.css";
export const HomeApp = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main>
          <section className="section section-intro">
            <div className="container-intro container grid">
              <article className="grid">
                <h1 className="title-intro">
                  Los Mejores Accesorios Para un
                  <span className="titleSpan">Jugador Profesional</span>
                </h1>
                <p>
                  Bienvenido a Obsidian Tech, tu destino definitivo para los
                  mejores accesorios de videojuegos. En Obsidian Tech, nos
                  apasiona proporcionarte una experiencia de juego excepcional y
                  elevar tu rendimiento al siguiente nivel.
                  Nuestro amplio catálogo de accesorios de alta calidad está
                  diseñado pensando en los jugadores más exigentes. Desde
                  auriculares y teclados hasta controladores y mousepad, cada
                  producto de Obsidian Tech ha sido cuidadosamente seleccionado
                  para brindarte el máximo rendimiento y comodidad.
                </p>
                <div className="buttonLinkContainer">
                  <Link to={"/catalogo"} className="btn1">
                    Ver Catalogo
                  </Link>
                </div>
              </article>
            </div>
          </section>
          <ProductGrid />
        </main>
      )}
    </>
  );
};
