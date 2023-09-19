import AboutGardening from "../../components/about/AboutGardening";
import AboutIntro from "../../components/about/AboutIntro";
import AboutMap from "../../views/about/AboutMap";
import "./index.scss";

const AboutPage = () => {
	return (
		<>
			<AboutIntro />
			<AboutMap />
			<AboutGardening />
		</>
	);
};

export default AboutPage;
