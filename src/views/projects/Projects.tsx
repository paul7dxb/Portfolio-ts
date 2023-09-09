import ProjectDetails from "../../components/projects/ProjectDetails";
import ProjectsGallery from "../../components/projects/ProjectsGallery";
import { portfolioProjects } from "../../data/projects";

import "./Projects.scss";

const Projects = () => {
	return (
		<>
			<section>
				<div className="container">
					<h2 className="text-section-title">Portfolio</h2>
					<ProjectDetails  project={portfolioProjects[0]} />
				</div>
			</section>
			<section id="projects" className="Projects section-dark">
				<div className="container">
					<h2 className="text-section-title">Portfolio</h2>
					<ProjectsGallery />
				</div>
			</section>
		</>
	);
};

export default Projects;
