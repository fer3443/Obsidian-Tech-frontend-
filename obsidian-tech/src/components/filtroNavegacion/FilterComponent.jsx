import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../filtroNavegacion/FilterComponent.css";
import { ContainerResults } from "../ventanadaResultados/ContainerResults";
import { useGetProducts } from "../../hooks/useGetProducts";

const FilterComponent = ({ setClicked }) => {
  const {products} = useGetProducts()
  const [filtered, setFiltered] = useState("");
  const [resultado, setResultado] = useState([]);

  const filtrado = (valorDelInput) => {
    const resultadoBusqueda = products.filter((item) => {
      if (item.nombre.toLowerCase().includes(valorDelInput.toLowerCase())) {
        return item;
      }
    });
    setResultado(resultadoBusqueda);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setFiltered(inputValue);
    filtrado(inputValue);
  };
  return (
    <>
     <section className="sectionFilter">
     <form className="navbar-form">
        <button className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          className="input-navbar-filter"
          onChange={handleChange}
          value={filtered}
          id="filtro"
          type="text"
          maxLength={30}
          placeholder="Buscar productos..."
        />
      </form>
      <ContainerResults
        resultado={resultado}
        filtered={filtered}
        setFiltered={setFiltered}
        setClicked={setClicked}
      />
     </section>
    </>
  );
};

export default FilterComponent;
