import { Outlet } from "react-router-dom";

import "./RootLayout.scss";
import Navbar from "./Navbar";

const RootLayout = () => {
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
