import { useRef } from "react";
import AboutHome from "../../components/about/AboutHome";
import Contact from "../../components/contact/Contact";
import ScrollButton from "../../components/ui/ScrollButton";
import HomeProjects from "../../views/home/HomeProjects";

import "./index.scss";

const HomePage = () => {
	const scrollToRef = useRef<HTMLInputElement>(null);
	return (
		<>
			<div className="Home__landing">
				<img className="Home__landing__image"
					src="/images/yosemite.jpg"
					alt="mountain site"
				/>
				<ScrollButton reference={scrollToRef} />
			</div>
			<AboutHome scrollToRef={scrollToRef} />
			<HomeProjects />
			<Contact />
		</>
	);
};

export default HomePage;
