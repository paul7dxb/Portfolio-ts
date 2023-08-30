import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.scss";
import "./globals.scss";
import HomePage from "./pages/home";
import RootLayout from "./components/layout/RootLayout";
import ProjectPage from "./pages/projects";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout/>,
		children: [
			{path: "/",
			element: <HomePage/>,},
			{path: "/projects",
			element: <ProjectPage/>,}
		]
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
