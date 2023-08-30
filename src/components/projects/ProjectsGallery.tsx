import { portfolioProjects } from "../../data/projects";
import ProjectSummary from "./ProjectSummary";
import './ProjectsGallery.scss'

export interface PortfolioProject {
	id: string;
	title: string;
	activeSite: boolean | string;
	description: string;
	tech: string[];
	imageSources: string[];
}

const ProjectsGallery = () => {
	return (
		<div className="ProjectsGallery">
			{portfolioProjects.map((project: PortfolioProject) => {
				return <ProjectSummary title={project.title} img={project.imageSources[0]} summary={project.description} />
			})}
		</div>
	);
};

export default ProjectsGallery;
