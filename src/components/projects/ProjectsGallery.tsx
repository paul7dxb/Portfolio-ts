import { portfolioProjects } from "../../data/projects";
import { PortfolioProject } from "../models/Projects";
import ProjectSummary from "./ProjectSummary";
import './ProjectsGallery.scss'


const ProjectsGallery = () => {
	return (
		<div className="ProjectsGallery">
			{portfolioProjects.map((project: PortfolioProject) => {
				return <ProjectSummary title={project.title} img={project.imageSources[0]} description={project.description} />
			})}
		</div>
	);
};

export default ProjectsGallery;
