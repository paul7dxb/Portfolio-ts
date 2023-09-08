import ProjectsGallery from "../../components/projects/ProjectsGallery";

import './Projects.scss'

const Projects = () => {
	return (
		<section id="projects" className="Projects section-even">
			<h2 className="text-section-title">Portfolios</h2>
			<ProjectsGallery />
		</section>
	);
};

export default Projects;
