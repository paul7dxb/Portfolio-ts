import ProjectsGallery from "../../components/projects/ProjectsGallery";

import './HomeProjects.scss'

const HomeProjects = () => {
	return (
		<section id="projects" className="Projects section-even">
			<h2 className="text-section-title">Portfolio</h2>
			<ProjectsGallery />
		</section>
	);
};

export default HomeProjects;
