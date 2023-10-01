import "./ProjectSummary.scss";

interface ProjectSummaryProps {
	expanded?: boolean;
	setExpandedProject: () => void;
	img: string;
	title: string;
	description: string;
}

const ProjectSummary = (props: ProjectSummaryProps) => {
	const { expanded, setExpandedProject, img, title, description } = props;

	return (
		<div
			className={`ProjectSummary ${
				expanded ? "ProjectSummary--active" : ""
			}`}
			onClick={() => setExpandedProject()}
		>
			<div className="ProjectSummary__imgContainer">
				<img
					className="ProjectSummary__img"
					src={img}
					alt={`Image for ${title}`}
					loading="lazy"
				/>
			</div>
			<p className="ProjectSummary__title">{title}</p>
			<p className="ProjectSummary__description">{description}</p>
		</div>
	);
};

export default ProjectSummary;
