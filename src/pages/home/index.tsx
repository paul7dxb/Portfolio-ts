import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import HomeProjects from "../../views/home/HomeProjects";
import "./index.scss";

const HomePage = () => {
	return (
		<>
			<div className="Home__landing">
				<img
					src="https://raw.githubusercontent.com/paul7dxb/hosted-assets/main/bgPhoto.JPG"
					alt="mountain site"
				/>
			</div>
			<About/>
			<HomeProjects/>
			<Contact/>
		</>
	);
};

export default HomePage;
