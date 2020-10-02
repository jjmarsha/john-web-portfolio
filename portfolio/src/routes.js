import React from "react";
import ComingSoonPage from "pages/comingsoon";
import About from "pages/about";
import ProjectsPage from "pages/projects";
import Blog from "pages/blog";
import Resume from "./static/jjmarsha2021.pdf";

const Routes = [
  {
    text: "ABOUT",
    route: "/",
    exact: true,
    component: About,
  },
  {
    text: "PROJECTS",
    route: "/projects",
    exact: false,
    component: ProjectsPage,
  },
  {
    text: "RESUME",
    route: "/resume",
    doc: Resume,
    exact: false,
  },
  {
    text: "BLOG",
    outsource: true,
    route: "https://medium.com/@johnmarshall_17009",
    exact: false,
  },
];

export default Routes;
