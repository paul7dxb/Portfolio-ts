import { useState, useEffect, useRef } from "react";
import { PortfolioProject } from "../../models/Projects";
import Button from "../ui/Button";
import Modal from "../ui/Modal";
import SkillDetails from "../skills/SkillDetails";
import "./ProjectDetails.scss";
import ProjectCarousel from "./ProjectCarousel";

interface ProjectDetailsProps {
	project: PortfolioProject;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
	const { title, activeSite, description, tech, imageSources } = project;
	const scrollToRef = useRef<HTMLInputElement>(null);
	const [selectedSkill, setSelectedSkill] = useState<string | null>();

	const handleSkillSelected = (skillId: string | null) => {
		setSelectedSkill(skillId);
	};

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
		<>
			<div ref={scrollToRef} className="ProjectDetails">
				{/* <div className="ProjectDetails__img__container"> */}
				{/* <img
						className="ProjectDetails__img"
						src={imageSources[0]}
						alt={`Image for ${title}`}
						loading="lazy"
					/> */}
				<ProjectCarousel
					imageSources={imageSources}
					title={project.title}
				/>
				{/* </div> */}
				<div className="ProjectDetails__content__container">
					<h2 className="ProjectDetails__title">{title}</h2>
					<p className="ProjectDetails__description">{description}</p>
					<div className="ProjectDetails__skills__container">
						<span>Tech: </span>
						<div className="ProjectDetails__skills">
							{tech.map((skill) => {
								return (
									<Button
										key={skill.skillId}
										className="Button--skill"
										onClick={() =>
											handleSkillSelected(skill.skillId)
										}
									>
										{skill.skillName}
									</Button>
								);
							})}
						</div>
					</div>
					{activeSite ? (
						<Button className="ProjectDetails__button">
							<a target="_blank" href={activeSite}>
								Visit site
							</a>
						</Button>
					) : (
						<Button
							className="ProjectDetails__button"
							isDisabled={true}
						>
							Site Unavailable
						</Button>
					)}
				</div>
			</div>
			{selectedSkill && (
				<Modal closeAction={() => setSelectedSkill(null)}>
					<SkillDetails id={selectedSkill} />
				</Modal>
			)}
		</>
	);
};

export default ProjectDetails;
