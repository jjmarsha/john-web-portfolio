import React from "react";

import Resume from "./static/jjmarsha20201.pdf";
const Homepage = React.lazy(() => import("pages/homepage"));
const About = React.lazy(() => import("pages/about.jsx"));

const Routes = [
    {
        text: "HOMEPAGE",
        route: "/",
        exact: true,
        component: Homepage,
    },
    {
        text: "ABOUT",
        route: "/about",
        exact: false,
        component: About,
    },
    {
        text: "PROJECTS",
        route: "/projects",
        exact: false,
        component: Homepage,
    },
    {
        text: "RESUME",
        route: "/resume",
        doc: Resume,
        exact: false,
    },
    {
        text: "BLOG",
        route: "/blog",
        exact: false,
        component: Homepage,
    },
] 

export default Routes;