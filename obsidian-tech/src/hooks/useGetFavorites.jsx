import React, { useContext, useEffect, useState } from "react";
import { DataProvider } from "../context/DataContext";
import { GetFavoriteProduct } from "../services/user_service";
import { Notification } from "../services/tostifyNot";

export const useGetFavorites = () => {
	const [loading, setLoading] = useState(false)
  const [favorite, setFavorite] = useState([]);
	const {
		userInfo: {user},
		producto,
		setProducto
	} = useContext(DataProvider);
  useEffect(() => {
		setLoading(true);
		GetFavoriteProduct({
			id: user.id,
			token: user.token
		})
		.then(({favorite_producs})=>{
			setFavorite(favorite_producs)
			setLoading(false);
			setProducto(false);
		})
		.catch((err) => {
			Notification({
				message: `${err}`,
				type: 'error'
			})
		})
  }, [producto]);

  return {favorite, loading};
};
