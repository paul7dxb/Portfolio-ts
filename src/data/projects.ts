import { PortfolioProject } from "../models/Projects";

import busBoardArrivalSW from "/projects/busboard/Busboard_Live_Arrivals_SW.png";
import busBoardArrivalCG from "/projects/busboard/Busboard_Live_Arrivals_CG.png";

import marsMissionLanding from "/projects/marsMission/Mars_Mission_Landing.png";
import marsMissionQuiz from "/projects/marsMission/Mars_Mission_Quiz.png";
import marsMissionRovers from "/projects/marsMission/Mars_Mission_Rovers.png";

import myFacePosts from "/projects/myFace/MyFace_Posts.png";
import myFaceProfile from "/projects/myFace/MyFace_User_Posts.png";
import myFaceProfilePosts from "/projects/myFace/MyFace_User_Profile.png";

import policeDataLanding from "/projects/policeData/PoliceData_Landing.png";
import policeDataForce from "/projects/policeData/PoliceData_Force.png";
import policeDataGraph from "/projects/policeData/PoliceData_Graph.png";

import portfolioOldLanding from "/projects/portfolioOld/Portfolio_Landing.png";
import portfolioOldAboutMe from "/projects/portfolioOld/Portfolio_About_Me.png";
import portfolioOldProjects from "/projects/portfolioOld/Portfolio_Projects.png";

//Image ratio 21/15
//1260:900

export const portfolioProjects: PortfolioProject[] = [
	{
		id: "p7",
		title: "Whale Spotting",
		description:
			"Whale spotting social media platform for users to share images from thier whale encounters and find out about whale spotting events around them. A React Typescript frontend connected to a C# ASP .NET backend with a PostgreSQL database including authentication and moderation capabilities to maintain a high quality standard of posts.",
		tech: [
			{ skillId: "s5", skillName: "React" },
			{
				skillId: "s8",
				skillName: "API",
			},
			{
				skillId: "s10",
				skillName: "C#",
			},
			{
				skillId: "s9",
				skillName: "TypeScript",
			},
			{
				skillId: "s11",
				skillName: "SASS",
			},
		],
		imageSources: [
			"https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/homePageDesktop.png?alt=media&token=4201e864-9c85-463f-903c-c8cc562dae5a",
			"https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/forceBioDesktop.png?alt=media&token=95542381-4917-496e-9e5f-3f78b05d9ced",
			"https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/chartsMobile.png?alt=media&token=2a44e0fe-b78c-47f9-af8e-b686af735757",
		],
	},
	{
		id: "p6",
		title: "Busboard",
		activeSite: "https://dynamic-stroopwafel-3f8a3f.netlify.app/",
		description:
			"Live bus stop arrivals and the ability to plan a journey through the London public transport network. Interacts with the Transport for London API to get the latest travel information to determine the upcoming buses at nearby buses, or plan a journey across London using postcodes.",
		tech: [
			{ skillId: "s5", skillName: "React" },
			{
				skillId: "s8",
				skillName: "API",
			},
			{
				skillId: "s9",
				skillName: "TypeScript",
			},
			{
				skillId: "s11",
				skillName: "SASS",
			},
		],
		imageSources: [busBoardArrivalSW, busBoardArrivalCG],
	},
	{
		id: "p5",
		title: "Mars Mission",
		description:
			"A website with the goal of piquing children's interest in the Mars Rovers launched by NASA. The website includes a photo gallery from the Mars rovers using an API, an information page to learn more about Mars and the rovers as well as a quiz for visitors to test their knowledge against.",
		tech: [
			{ skillId: "s5", skillName: "React" },
			{
				skillId: "s8",
				skillName: "API",
			},
			{
				skillId: "s9",
				skillName: "TypeScript",
			},
			{
				skillId: "s11",
				skillName: "SASS",
			},
		],
		activeSite: "https://mars-mission.paulmck.dev/",
		imageSources: [marsMissionLanding, marsMissionQuiz, marsMissionRovers],
	},
	{
		id: "p4",
		title: "Social Media Project",
		description:
			"A social media template application. React Typescript frontend for users to interact and post social media posts. A backend using an SQL database to serve clients with stored data",
		tech: [
			{ skillId: "s5", skillName: "React" },
			{
				skillId: "s8",
				skillName: "API",
			},
			{
				skillId: "s9",
				skillName: "TypeScript",
			},
			{
				skillId: "s11",
				skillName: "SASS",
			},
		],
		imageSources: [myFaceProfile, myFaceProfilePosts, myFacePosts],
	},
	{
		id: "p3",
		title: "UK Police Data",
		activeSite: "https://policedata.paulmck.dev/",
		description:
			"A web application to make the open data from police forces in England, Wales and Northern Ireland more accessable to people through use of an API from UK Police.",
		tech: [
			{ skillId: "s5", skillName: "React" },
			{
				skillId: "s8",
				skillName: "API",
			},
			{
				skillId: "s1",
				skillName: "JavaScript",
			},
			{
				skillId: "s2",
				skillName: "CSS",
			},
		],
		imageSources: [policeDataLanding, policeDataForce, policeDataGraph],
	},
	{
		id: "p2",
		title: "Exit Game Mobile Portal",
		description:
			'A small website used to progress and unlock intel to be used alongside a board game style "escape room". This website was hosted on a Linode server with an Nginx load balancer serving the project created using Flask with a MySQL database.',
		tech: [
			{
				skillId: "s6",
				skillName: "Flask",
			},
			{
				skillId: "s4",
				skillName: "Python",
			},
			{
				skillId: "s12",
				skillName: "SQL",
			},
			{
				skillId: "s7",
				skillName: "Linode",
			},
			{
				skillId: "s1",
				skillName: "JavaScript",
			},
			{
				skillId: "s2",
				skillName: "CSS",
			},
		],
		imageSources: [
			"https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/introText.gif?alt=media&token=302e47df-d35e-4670-bdab-59d67f139f48",
			"https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/login.gif?alt=media&token=b3607005-4f95-44a8-9de9-6302fa97ab0d",
			"https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/hints.gif?alt=media&token=bd700659-1d9d-45a4-8671-17d27a2f2597",
		],
	},
	{
		id: "p1",
		title: "Portfolio Project",
		activeSite: "https://paulmck.dev/",
		description:
			"My first portfolio site built by me using a React SPA hosted on firebase. The primary purpose of this site is inform people on my skillset, but I have taken the opportunity to further develop my CSS skills focusing on a responsive design to varying screen sizes and creating a more individualised website through animations",
		tech: [
			{ skillId: "s5", skillName: "React" },
			{
				skillId: "s2",
				skillName: "CSS",
			},
			{
				skillId: "s1",
				skillName: "JavaScript",
			},
		],
		imageSources: [
			portfolioOldLanding,
			portfolioOldAboutMe,
			portfolioOldProjects,
		],
	},
];
