import { useEffect, useState } from "react";
import ProjectsGallery from "../../components/projects/ProjectsGallery";

import SkillFilter from "../../components/skills/SkillFilter";

import { portfolioProjects } from "../../data/projects";
import { PortfolioProject } from "../../components/models/Projects";
import { Skill } from "../../components/models/Skills";
import { useSearchParams } from "react-router-dom";

import "./Projects.scss";
import { getSkillById } from "../../data/skills";

interface ProjectSearchParams{
	skillId? : number
}

const Projects = () => {
	const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
	const [projects, setProjects] =
		useState<PortfolioProject[]>(portfolioProjects);

	const [expandedProject, setExpandedProject] = useState<number | null>(null);

	const [searchParams] = useSearchParams();
	useEffect(()=>{
		setSelectedSkill(null)
		const skillIdParam = searchParams.get('skillId');
		if(skillIdParam){
			const filteredSkill = getSkillById(skillIdParam);
			if(filteredSkill){
				setSelectedSkill(filteredSkill)
			}
		}
		console.log(`Scroll in Projects`)
		console.log(`Scroll in Projects`)
		window.scrollTo({top:0,left:0,behavior:"smooth"});
	},[searchParams])


	useEffect(() => {
		setExpandedProject(null)
		if (selectedSkill) {
			const filteredProjects = portfolioProjects.filter((project) => {
				const ids = project.tech.filter(skill => skill.skillId)
				return ids.find(skill => selectedSkill.skillId === skill.skillId)
			});
			setProjects(filteredProjects);
		} else {
			setProjects(portfolioProjects);
		}
	}, [selectedSkill]);

	return (
		<>
			<section className="Projects__Filter section-dark">
				<div className="container">
					<SkillFilter
						selectedSkill={selectedSkill}
						setSelectedSkill={setSelectedSkill}
					/>
				</div>
			</section>
			<section id="projects" className="Projects_Gallery section-dark">
				<div className="container">
					<h2 className="section-title">
						{selectedSkill
							? `${selectedSkill?.skillName} Projects`
							: "All Projects"}
					</h2>
					<ProjectsGallery projects={projects} expandedProject={expandedProject} setExpandedProject={setExpandedProject} />
				</div>
			</section>
		</>
	);
};

export default Projects;
