import "./ProjectDetails.scss";
import { PortfolioProject } from "../models/Projects";
import Button from "../ui/Button";

interface ProjectDetailsProps {
	project: PortfolioProject;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
	const { title, activeSite, description, tech, imageSources } = project;

	return (
		<div className="ProjectDetails">
			<div className="ProjectDetails__img_container">
				<img
					className="ProjectDetails__img"
					src={imageSources[0]}
					alt={`Image for ${title}`}
				/>
			</div>
			<div className="ProjectDetails__content__container">
				<p className="ProjectDetails__title">{title}</p>
				<p className="ProjectDetails__description">{description}</p>
				<div className="ProjectDetails__skills__container">
					<span>Tech: </span>
					<div className="ProjectDetails__skills">
						{tech.map((skill) => {
							return (
								<Button className="Button--skill">
									{skill}
								</Button>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
