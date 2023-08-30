import ProjectsGallery from "./ProjectsGallery";

import './Projects.scss'

const Projects = () => {
	return (
		<section id="projects" className="Projects section-even">
			<h2 className="text-section-title">Portfolio</h2>
			<ProjectsGallery />
		</section>
	);
};

export default Projects;
