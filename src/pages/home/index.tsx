import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Projects from "../../components/projects/Projects";
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
			<Projects/>
			<Contact/>
		</>
	);
};

export default HomePage;
