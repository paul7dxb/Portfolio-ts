import { useEffect, useRef } from "react";
import { PortfolioProject } from "../models/Projects";
import Button from "../ui/Button";
import "./ProjectDetails.scss";

interface ProjectDetailsProps {
	project: PortfolioProject;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
	const { title, activeSite, description, tech, imageSources } = project;
	const scrollToRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (window.innerWidth < 800) {
			scrollToRef.current?.scrollIntoView({
				block: "center",
				behavior: "smooth",
			});
		} else {
			scrollToRef.current?.scrollIntoView({
				block: "nearest",
				behavior: "smooth",
			});
		}
		}, []);

	return (
		<div ref={scrollToRef} className="ProjectDetails">
			<div className="ProjectDetails__img__container">
				<img
					className="ProjectDetails__img"
					src={imageSources[0]}
					alt={`Image for ${title}`}
				/>
			</div>
			<div className="ProjectDetails__content__container">
				<h2 className="ProjectDetails__title">{title}</h2>
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
				{activeSite ? (
					<Button>
						<a target="_blank" href={activeSite}>
							Visit site
						</a>
					</Button>
				) : (
					<Button isDisabled={true}>Site Unavailable</Button>
				)}
			</div>
		</div>
	);
};

export default ProjectDetails;
