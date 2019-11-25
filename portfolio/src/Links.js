import React from "react";

const Homepage = React.lazy(() => import("pages/homepage"));

const Links = [
    {
        text: "homepage.js",
        route: "/",
        exact: true,
        component: Homepage
    }
] 

export default Links