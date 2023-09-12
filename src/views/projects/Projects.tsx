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

	useEffect(() => {
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
			<section>
				<div className="container">
					<h2 className="text-section-title">Portfolio</h2>
					<SkillFilter
						selectedSkill={selectedSkill}
						setSelectedSkill={setSelectedSkill}
					/>
				</div>
			</section>
			<section id="projects" className="Projects section-dark">
				<div className="container">
					<h2 className="text-section-title">
						{selectedSkill
							? `${selectedSkill?.skillName} Projects`
							: "All Projects"}
					</h2>
					<ProjectsGallery projects={projects} />
				</div>
			</section>
		</>
	);
};

export default Projects;
