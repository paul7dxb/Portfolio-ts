import { PortfolioProject } from "../components/projects/ProjectsGallery";

export const portfolioProjects : PortfolioProject[] = [
    {
      id: "p1",
      title: "Social Media Project",
      activeSite: false,
      description:
        'A React Typescript frontend for users to interact and post social media posts. A backend using a simple SQL database to serve clients with data',
      tech: ["React", "API", "TypeScript", "SCSS"],
      imageSources: [
        "https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/homePageDesktop.png?alt=media&token=4201e864-9c85-463f-903c-c8cc562dae5a",
        "https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/forceBioDesktop.png?alt=media&token=95542381-4917-496e-9e5f-3f78b05d9ced",
        "https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/chartsMobile.png?alt=media&token=2a44e0fe-b78c-47f9-af8e-b686af735757",
      ],
    },
    {
      id: "p2",
      title: "UK Police Data",
      activeSite: "https://policedata.paulmck.dev/",
      description:
        'A small application to make the openly available data from police forces in England, Wales and Northern Ireland more accessable to people.',
      tech: ["React", "API", "JavaScript", "CSS"],
      imageSources: [
        "https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/homePageDesktop.png?alt=media&token=4201e864-9c85-463f-903c-c8cc562dae5a",
        "https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/forceBioDesktop.png?alt=media&token=95542381-4917-496e-9e5f-3f78b05d9ced",
        "https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/chartsMobile.png?alt=media&token=2a44e0fe-b78c-47f9-af8e-b686af735757",
      ],
    },
    {
      id: "p3",
      title: "Exit Game Mobile Portal",
      activeSite: false,
      description:
        'A small website used to progress and unlock intel to be used alongside a board game style "escape room". This website was hosted on a Linode server with an Nginx load balancer serving the project created using Flask with a MySQL database.',
      tech: ["Flask", "MySQL", "Linode", "JavaScript", "CSS"],
      imageSources: [
        "https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/introText.gif?alt=media&token=302e47df-d35e-4670-bdab-59d67f139f48",
        "https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/login.gif?alt=media&token=b3607005-4f95-44a8-9de9-6302fa97ab0d",
        "https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/hints.gif?alt=media&token=bd700659-1d9d-45a4-8671-17d27a2f2597",
      ],
    },
    {
      id: "p4",
      title: "Portfolio Project",
      activeSite: "https://paulmck.dev/",
      description:
        "This website you are currently on has been built by me using a React SPA hosted on firebase. The primary purpose of this site is inform people on my skillset, but I have taken the opportunity to further develop my CSS skills focusing on a responsive design to varying screen sizes and creating a more individualised website through animations",
      tech: ["React", "CSS", "JavaScript"],
      imageSources: [
        "https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/homePage.png?alt=media&token=103496e3-f90c-4142-9cc2-853a3a5aac46",
        "https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/aboutMePage.png?alt=media&token=2d4a04a3-a97e-4462-896c-aeaaab473b88",
        "https://firebasestorage.googleapis.com/v0/b/static-files-80e0b.appspot.com/o/portfolioResponsive.png?alt=media&token=a692f66c-e348-4378-b844-4b0825f1d633",
      ],
    },
  ];