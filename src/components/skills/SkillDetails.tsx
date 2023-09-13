import Button from "../ui/Button";
import "./SkillDetails.scss";

import { PortfolioSkill } from "../models/Skills";
import { portfolioSkills } from "../../data/skills";
import { useEffect, useState } from "react";

interface SkillDetailsProps {
	id: string;
}

const SkillDetails = ({ id }: SkillDetailsProps) => {
	const [skill, setSkill] = useState<PortfolioSkill>();

	useEffect(() => {
		const filteredSkill = portfolioSkills.find((skill) => {
			return skill.skillId === id;
		});
		setSkill(filteredSkill);
	}, []);

	if (!skill) {
		return (
			<div className="SkillDetails">
				<h3>Skill</h3>
				<p>Skill {id} not found.</p>
			</div>
		);
	}

	return (
		<div className="SkillDetails">
			<h3>{skill?.skillName}</h3>

			<div className="SkillDetails__content">
				<div className="SkillDetails__content__icon__container">
					{skill.icon && (
						<img
							className="SkillDetails__icon"
							src={skill.icon}
							alt={`${skill.skillName} icon`}
						/>
					)}
				</div>
				<p>Description: {skill.description}</p>
			</div>

			<Button className="Button--dark">
				View My {skill.skillName} Projects
			</Button>
		</div>
	);
};

export default SkillDetails;
