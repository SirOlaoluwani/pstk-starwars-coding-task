import React from "react";
const Home = React.lazy(() => import("../views/home"));
const MovieDetails = React.lazy(() => import("../views/details"));

export const clientRoutes = [
  { path: "/", name: "Home", exact: true, component: Home },
  {
    path: "/film/:slug",
    name: "Film Details",
    component: MovieDetails,
    exact: false
  }
];
