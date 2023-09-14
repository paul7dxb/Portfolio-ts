import { PortfolioSkill } from "../components/models/Skills";

import reactIcon from "../assets/icons/react.svg";
import cssIcon from "../assets/icons/css.svg";
import flaskIcon from "../assets/icons/flask.svg";
import htmlIcon from "../assets/icons/html.svg";
import jsIcon from "../assets/icons/js.svg";
import linodeIcon from "../assets/icons/linode.svg";
import pythonIcon from "../assets/icons/python.svg";
import sassIcon from "../assets/icons/sass.svg";
import sqlIcon from "../assets/icons/sql.svg";
import cSharpIcon from "../assets/icons/csharp.svg";
import tsIcon from "../assets/icons/typescript.svg";

export const portfolioSkills: PortfolioSkill[] = [
	{
		skillId: "s12",
		skillName: "SQL",
		description:
			"SQL, or Structured Query Language, is a domain-specific language used for managing and querying relational databases, allowing users to interact with and retrieve data from these databases.",
		icon: sqlIcon,
	},
	{
		skillId: "s11",
		skillName: "SCSS",
		description:
			"SCSS is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS) to simplify and streamline the process of writing and managing styles for web development.",
		icon: sassIcon,
		featuredSkill: true
	},
	{
		skillId: "s10",
		skillName: "C#",
		description:
			"C# is a statically-typed, object-oriented programming language developed by Microsoft, widely used for building Windows applications, web services, and more.",
		icon: cSharpIcon,
		featuredSkill: true
	},
	{
		skillId: "s9",
		skillName: "TypeScript",
		skillAbr: "TS",
		description:
			"TypeScript is a superset of JavaScript that adds static typing to the language, improving code quality and developer productivity in building large-scale applications.",
		icon: tsIcon,
		featuredSkill: true
	},
	{
		skillId: "s8",
		skillName: "API",
		description:
			"An API, or Application Programming Interface, is a set of rules and protocols that allows different software applications to communicate and interact with each other, enabling them to exchange data and functionality.",
	},
	{
		skillId: "s7",
		skillName: "Linode",
		description:
			"Linode is a cloud computing platform that provides virtual servers, allowing users to deploy and manage their own applications and websites on scalable infrastructure.",
		icon: linodeIcon,
	},
	{
		skillId: "s6",
		skillName: "Flask",
		description:
			"Flask is a lightweight and micro web framework for Python used to build web applications with flexibility.",
		icon: flaskIcon,
		featuredSkill: true
	},
	{
		skillId: "s5",
		skillName: "React",
		description:
			"React is an open-source JavaScript library for building user interfaces, particularly for single-page applications where components efficiently update and render with changes in data.",
		icon: reactIcon,
		featuredSkill: true
	},
	{
		skillId: "s4",
		skillName: "Python",
		description:
			"Python is a high-level, versatile programming language known for its simplicity, readability, and wide range of applications, from web development to scientific computing.",
		icon: pythonIcon,
		featuredSkill: true
	},
	{
		skillId: "s3",
		skillName: "HTML",
		description:
			"HTML, or HyperText Markup Language, is the standard markup language for creating web pages and web applications, defining the structure and content of a webpage using a series of elements and tags.",
		icon: htmlIcon,
	},
	{
		skillId: "s2",
		skillName: "CSS",
		description:
			"CSS, or Cascading Style Sheets, is a language used for controlling the presentation and layout of web pages, allowing for design elements like colors, fonts, and positioning to be applied.",
		icon: cssIcon,
	},
	{
		skillId: "s1",
		skillName: "JavaScript",
		skillAbr: "JS",
		description:
			"JavaScript is a versatile programming language commonly used for adding interactivity and dynamic behavior to websites.",
		icon: jsIcon,
	},
];

export const getSkillById = (id: string) => {
	const skill = portfolioSkills.find((skill) => {
		return skill.skillId === id;
	});
	if (skill !== undefined) {
		return skill;
	}
	return null;
};
