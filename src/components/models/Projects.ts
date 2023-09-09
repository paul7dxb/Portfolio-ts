export interface ProjectSummaryProps {
	img: string;
	title: string;
	description: string;
}

export interface PortfolioProject {
	id: string;
	title: string;
	activeSite: boolean | string;
	description: string;
	tech: string[];
	imageSources: string[];
}