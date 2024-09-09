import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { App } from "./views/App";
import { Navbar } from "../js/component/navbar";
import { Context } from '../js/store/appContext';
import { PersonajeDetalle } from './component/personajeDetalle';
import { VehiculoDetalle } from './component/vehiculoDetalle';
import { PlanetaDetalle } from './component/planetaDetalle.js';
import { Footer } from "./component/footer";


import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
	const { store } = useContext(Context);
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar favoritos={store.favoritos} />
					<Routes>
						<Route path="/" element={<App />} />
						<Route path="/personaje/:id" element={<PersonajeDetalle />} />
						<Route path="/vehiculo/:id" element={<VehiculoDetalle />} />
						<Route path="/planeta/:id" element={<PlanetaDetalle />} />
					</Routes>
				
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);