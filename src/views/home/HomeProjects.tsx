import ProjectsGallery from "../../components/projects/ProjectsGallery";
import { portfolioProjects } from "../../data/projects";

import "./HomeProjects.scss";

const HomeProjects = () => {
	return (
		<section id="projects" className="Projects section-dark">
			<div className="container">
				<h2 className="text-section-title">Portfolio</h2>
				<ProjectsGallery projects={portfolioProjects} />
			</div>
		</section>
	);
};

export default HomeProjects;
