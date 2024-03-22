import { Link } from "react-router-dom";

import Loader from "../loader/Loader";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { CardFavorites } from "./CardFavorites";

import "../favoritos/Favoritos.css";
import { useGetFavorites } from "../../hooks/useGetFavorites";

const Favoritos = () => {
  const { favorite, loading } = useGetFavorites()
  
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <section className="section-favorite section">
          <div className="container-favorite grid">
            <div className="ventanaFav">
              <div className="boxTitleFav container">
                <Link to={"/"} className="linkBack">
                  <FontAwesomeIcon icon={faArrowLeft} className="icon" />
                  Inicio
                </Link>
                <h2>Lista de Favoritos</h2>
                <p className="paragraph">
                  Aquí podras ver todos los productos que hayas seleccionado,
                  así como también quitarlos si encuentras uno mejor!.
                </p>
              </div>
              <div className="boxFav">
                <h3 className="section-title">Favoritos {favorite ? favorite.length : 0}</h3>
                <div className="containerCardFav container">
                  {favorite.length == 0 ? (
                    <div className="favEmpty">
                      <h2>No tienes productos agregados a favoritos!</h2>
                    </div>
                  ) : (
                    <CardFavorites fav={favorite} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Favoritos;
