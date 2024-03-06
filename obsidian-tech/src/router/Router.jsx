import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { DataContext } from "../context/DataContext";
import { ObsidianNavbar } from "../components/navegacion/ObsidianNavbar";
import Footer from "../components/footer/Footer";

import InicioPage from "../page/InicioPage";
import DetalleProductoPage from "../page/DetalleProductoPage";
import AdministracionPage from "../page/AdministracionPage";
import RegistroPage from "../page/RegistroPage";
import RecContraseñaPage from "../page/RecContraseñaPage";
import NosotrosPage from "../page/NosotrosPage";
import FavoritosPage from "../page/FavoritosPage";
import { PurchasePage } from "../page/PurchasePage";
import { CatalogoPage } from "../page/CatalogoPage";
import Error404Page from "../page/Error404Page";

export const Router = () => {

  return (
		<DataContext>
		<BrowserRouter>
			<ObsidianNavbar />
			<Routes>
				<Route path="/" element={<InicioPage />} />
				<Route path="/accesorio/:id" element={<DetalleProductoPage />} />
				<Route path="administracion" element={<AdministracionPage />} />
				<Route path="/registro" element={<RegistroPage />} />
				<Route path="recContraseña" element={<RecContraseñaPage />} />
				<Route path="nosotros" element={<NosotrosPage />} />
				<Route path="favoritos" element={<FavoritosPage />} />
				<Route path="/compra" element={<PurchasePage />} />
				<Route path="/catalogo" element={<CatalogoPage />} />
				<Route path="*" element={<Error404Page />} />
			</Routes>
			<ToastContainer />
			<Footer />
		</BrowserRouter>
	</DataContext>
	);
};
