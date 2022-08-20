import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import App from "./App";
import { Routes as DataDisplayRoutes } from "./DataDisplay";
import { Routes as InputsRoutes } from "./Inputs";
import { Routes as FeedbackRoutes } from "./Feedback";
import { Routes as SurfacesRoutes } from "./Surfaces";
import { Routes as NavigationRoutes } from "./Navigation";
import { Routes as LayoutRoutes } from "./Layout";
import { Routes as MUIXRoutes } from "./MUIX";
import { Routes as MUILabRoutes } from "./MUILab";
import { NotFound404 } from "./404";
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

const SiteMap = [
  {
    path: "/",
    element: (
      <StrictMode>
        <App />
      </StrictMode>
    ),
    children: [
      ...DataDisplayRoutes,
      ...InputsRoutes,
      ...FeedbackRoutes,
      ...SurfacesRoutes,
      ...NavigationRoutes,
      ...LayoutRoutes,
      ...MUIXRoutes,
      ...MUILabRoutes
    ]
  },
  { path: "*", element: <NotFound404 /> }
];
const Routes = () => {
  let routes = useRoutes(SiteMap);
  return routes;
};

root.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
