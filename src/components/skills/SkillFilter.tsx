import Button from "../../components/ui/Button";
import { getSkillById, portfolioSkills } from "../../data/skills";
import { Skill } from "../models/Skills";

import './SkillFilter.scss'

interface SkillFilterProps {
    selectedSkill: Skill | null;
    setSelectedSkill : (id:Skill | null) => void
}

const SkillFilter = ({selectedSkill,setSelectedSkill}:SkillFilterProps) => {

    const handleSkillSelected = (id:string) => {
        const skill = getSkillById(id)
        if(!skill || selectedSkill?.skillId === skill.skillId){
            setSelectedSkill(null)
        }
        else{
            setSelectedSkill(skill)
        }
    }

	return (
		<div className="SkillFilter">
			{portfolioSkills.map((skill) => (
				<Button
					key={skill.skillId}
					className={`Button--skill ${selectedSkill?.skillId === skill.skillId ? "Button--highlight" : ""} `}
					onClick={() => handleSkillSelected(skill.skillId)}
				>
					{skill.skillName}
				</Button>
			))}
		</div>
	);
};

export default SkillFilter;
