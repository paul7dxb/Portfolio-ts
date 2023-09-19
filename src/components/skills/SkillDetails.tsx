import Button from "../ui/Button";
import "./SkillDetails.scss";

import { PortfolioSkill } from "../../models/Skills";
import { getSkillById, portfolioSkills } from "../../data/skills";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface SkillDetailsProps {
	id: string;
}

const SkillDetails = ({ id }: SkillDetailsProps) => {
	const navigate = useNavigate();
	const [currentFilter, setCurrentFilter] = useState<string>();
	const [searchParams] = useSearchParams();
	useEffect(() => {
		const skillIdParam = searchParams.get("skillId");
		if (skillIdParam) {
			const filteredSkill = getSkillById(skillIdParam)?.skillId;
			if (filteredSkill) {
				setCurrentFilter(filteredSkill);
			}
		}
	}, [searchParams]);

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
				<p>{skill.description}</p>
			</div>

			{skill.skillId === currentFilter ? (
				<Button isDisabled={true}
					onClick={() =>
						navigate(`/projects?skillId=${skill.skillId}`)
					}
					className="Button--dark"
				>
					Already Viewing {skill.skillName} Projects
				</Button>
			) : (
				<Button
					onClick={() =>
						navigate(`/projects?skillId=${skill.skillId}`)
					}
					className="Button--dark"
				>
					View My {skill.skillName} Projects
				</Button>
			)}
		</div>
	);
};

export default SkillDetails;
