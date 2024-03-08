import { CardProduct } from "../tarjetasDeProductos/CardProduct";

import { BestProducts } from "../bestProducts/BestProducts";

import "../grillaDeProductos/ProductGrid.css";
export const ProductGrid = () => {
  return (
    <>
      <section className="section-grid-product">
        <CardProduct />
      </section>
        <BestProducts />
    </>
  );
};
