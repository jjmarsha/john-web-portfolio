import React from "react";

import Resume from "./static/jjmarsha20201.pdf";
const Homepage = React.lazy(() => import("pages/homepage"));

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
        exact: true,
        component: Homepage,
    },
    {
        text: "RESUME",
        route: "/resume",
        doc: Resume,
        exact: true,
        component: Homepage,
    },
    {
        text: "BLOG",
        route: "/blog",
        exact: true,
        component: Homepage,
    }
] 

export default Routes;