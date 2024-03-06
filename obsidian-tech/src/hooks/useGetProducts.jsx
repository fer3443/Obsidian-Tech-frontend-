import { useEffect, useState } from "react";
import { getAllProductsFromDB } from "../services/product_service";

export const useGetProducts = () => {
  const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false)
  useEffect(() => {
		setLoading(true)
    getAllProductsFromDB()
      .then(({ data }) => {
        setProducts(data);
				setLoading(false)
      })
      .catch((err) => console.log(err));
  }, []);

  return { loading, products };
};
