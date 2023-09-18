import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
	const [scrollClass, setScroll] = useState("Navbar--scroll-top");
	const [lastScrollY, setLastScrollY] = useState(0);

	const controlNavbar = () => {
		if (window.scrollY === 0) {
			setScroll("Navbar--scroll-top");
		} else if (window.scrollY > lastScrollY) {
			// if scroll down hide the navbar
			setScroll("Navbar--scroll-hide");
		} else {
			// if scroll up show the navbar
			setScroll("Navbar--scroll-up");
		}
		// remember current page location to use in the next move
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", controlNavbar);

			// cleanup function
			return () => {
				window.removeEventListener("scroll", controlNavbar);
			};
		}
	}, [lastScrollY]);

	return (
		<nav className={`Navbar ${scrollClass} `}>
			<ul className="Navbar__ul">
				<NavLink
					className={({ isActive }) =>
						`Navbar__link ${
							isActive ? "Navbar__link--active-page" : ""
						}`
					}
					to="/"
				>
					Home
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`Navbar__link ${
							isActive ? "Navbar__link--active-page" : ""
						}`
					}
					to="/projects"
				>
					Projects
				</NavLink>
				<NavLink
					className={({ isActive }) =>
						`Navbar__link ${
							isActive ? "Navbar__link--active-page" : ""
						}`
					}
					to="/about"
				>
					About
				</NavLink>
			</ul>
		</nav>
	);
};

export default Navbar;
