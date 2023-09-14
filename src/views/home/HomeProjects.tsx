import { useState } from "react";
import ProjectsGallery from "../../components/projects/ProjectsGallery";
import { portfolioProjects } from "../../data/projects";

import "./HomeProjects.scss";

const HomeProjects = () => {
	const [expandedProject, setExpandedProject] = useState<number | null>(null);

	return (
		<section id="projects" className="Projects section-dark">
			<div className="container">
				<h2 className="text-section-title">Portfolio</h2>
				<ProjectsGallery projects={portfolioProjects} expandedProject={expandedProject} setExpandedProject={setExpandedProject} />
			</div>
		</section>
	);
};

export default HomeProjects;
