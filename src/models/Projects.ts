import { Skill } from "./Skills";

export interface PortfolioProject {
	id: string;
	title: string;
	activeSite?: string;
	description: string;
	tech: Skill[];
	imageSources: string[];
}