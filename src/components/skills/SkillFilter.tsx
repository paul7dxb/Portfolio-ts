import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { portfolioSkills } from "../../data/skills";
import { Skill } from "../models/Skills";

import "./SkillFilter.scss";

interface SkillFilterProps {
	selectedSkill: Skill | null;
	setSelectedSkill: (id: Skill | null) => void;
}

const SkillFilter = ({ selectedSkill }: SkillFilterProps) => {
	const navigate = useNavigate();

	const handleButtonClick = (skillId: string) => {
		if (skillId === selectedSkill?.skillId) {
			navigate(`/projects`);
		} else {
			navigate(`/projects?skillId=${skillId}`);
		}
	};

	return (
		<div className="SkillFilter">
			<Button
				key="allP"
				className={`Button--skill ${
					selectedSkill === null ? "Button--highlight" : ""
				} `}
				onClick={() => navigate("/projects")}
			>
				All Projects
			</Button>
			{portfolioSkills.map(
				(skill) =>
					skill.featuredSkill && (
						<Button
							key={skill.skillId}
							className={`Button--skill ${
								selectedSkill?.skillId === skill.skillId
									? "Button--highlight"
									: ""
							} `}
							onClick={() => handleButtonClick(skill.skillId)}
						>
							{skill.skillName}
						</Button>
					)
			)}
		</div>
	);
};

export default SkillFilter;
