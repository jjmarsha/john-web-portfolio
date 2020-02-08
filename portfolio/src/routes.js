import React from "react";

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