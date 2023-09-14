import { useEffect, useState } from "react";
import ProjectsGallery from "../../components/projects/ProjectsGallery";

import SkillFilter from "../../components/skills/SkillFilter";

import { portfolioProjects } from "../../data/projects";
import { PortfolioProject } from "../../components/models/Projects";
import { Skill } from "../../components/models/Skills";

import "./Projects.scss";

const Projects = () => {
	const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
	const [projects, setProjects] =
		useState<PortfolioProject[]>(portfolioProjects);

	const [expandedProject, setExpandedProject] = useState<number | null>(null);


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
