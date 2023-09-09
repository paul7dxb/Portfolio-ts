import { useState } from "react";
import { portfolioProjects } from "../../data/projects";
import { PortfolioProject } from "../models/Projects";
import ProjectDetails from "./ProjectDetails";
import ProjectSummary from "./ProjectSummary";
import "./ProjectsGallery.scss";

const ProjectsGallery = () => {
	const [expandedProject, setExpandedProject] = useState<number | null>();

	const handleExpandProject = (index: number | null) => {
		setExpandedProject(index);
	};

	return (
		<div className="ProjectsGallery">
			{portfolioProjects.map((project: PortfolioProject, index) => {
				if (index === expandedProject) {
					return (
						<>
							<ProjectSummary
								expanded={true}
								title={project.title}
								img={project.imageSources[0]}
								description={project.description}
								setExpandedProject={() =>
									handleExpandProject(null)
								}
							/>
							<ProjectDetails project={project} />
						</>
					);
				}
				return (
					<ProjectSummary
						title={project.title}
						img={project.imageSources[0]}
						description={project.description}
						setExpandedProject={() => handleExpandProject(index)}
					/>
				);
			})}
		</div>
	);
};

export default ProjectsGallery;
