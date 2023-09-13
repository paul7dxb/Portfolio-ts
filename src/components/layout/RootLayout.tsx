import { Outlet, useLocation } from "react-router-dom";

import "./RootLayout.scss";
import Navbar from "./Navbar";
import { useEffect } from "react";

const RootLayout = () => {

	const { pathname } = useLocation();

	useEffect(()=> {
		window.scrollTo({top:0,left:0});
	},[pathname])

	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
