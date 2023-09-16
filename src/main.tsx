import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss";
import HomePage from "./pages/home";
import RootLayout from "./components/layout/RootLayout";
import ProjectsPage from "./pages/projects";
import ProjectPage from "./pages/project";
import AboutPage from "./pages/about";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: "projects",
				children: [
					{
						index: true, element: <ProjectsPage />
					},
					{

						path: ":projectID",
						element: <ProjectPage />,
					},
				],
			},
			{
				path: "about",
				element: <AboutPage/>
			},
		],
	},
]);

path: "/projects/:projectID";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
