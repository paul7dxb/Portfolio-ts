import "./ProjectSummary.scss";
import { ProjectSummaryProps } from "../models/Projects";

const ProjectSummary = (project : ProjectSummaryProps) => {
	const {img, title, description} = project;
	
	return (
		<div className="ProjectSummary">
			<div className="ProjectSummary__imgContainer">
				<img
					className="ProjectSummary__img"
					src={img}
					alt={`Image for ${title}`}
				/>
			</div>
			<p className="ProjectSummary__title">{title}</p>
			<p className="ProjectSummary__description" >{description}</p>
		</div>
	);
};

export default ProjectSummary;
