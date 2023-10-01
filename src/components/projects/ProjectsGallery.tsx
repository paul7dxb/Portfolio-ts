import { PortfolioProject } from "../../models/Projects";
import ProjectDetails from "./ProjectDetails";
import ProjectSummary from "./ProjectSummary";
import "./ProjectsGallery.scss";

interface ProjectsGalleryProps{
	projects : PortfolioProject[]
	expandedProject: number | null
	setExpandedProject: (value: number|null) => void
}

const ProjectsGallery = ({projects,expandedProject, setExpandedProject}:ProjectsGalleryProps) => {

	const handleExpandProject = (index: number | null) => {
		setExpandedProject(index);
	};

	return (
		<div className="ProjectsGallery">
			{projects.map((project: PortfolioProject, index) => {
				if (index === expandedProject) {
					return (
						<>
							<ProjectSummary key={project.id}
								expanded={true}
								title={project.title}
								img={project.imageSources[0]}
								
								description={project.description}
								setExpandedProject={() =>
									handleExpandProject(null)
								}
							/>
							<ProjectDetails key={`${project.id}-D`} project={project} />
						</>
					);
				}
				return (
					<ProjectSummary key={project.id}
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
