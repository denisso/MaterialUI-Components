import "./styles.css";

import { Outlet } from "react-router-dom";
import DataDisplay from "./DataDisplay";
import Inputs from "./Inputs";
import Feedback from "./Feedback";
import Surfaces from "./Surfaces";
import Navigation from "./Navigation";
import Layout from "./Layout";
import MUIX from "./MUIX";
import MUILab from "./MUILab";
export default function App() {
  return (
    <>
      <DataDisplay />
      <Inputs />
      <Feedback />
      <Surfaces />
      <Navigation />
      <Layout />
      <MUIX />
      <MUILab />
      <div className="Center">
        <Outlet />
      </div>
    </>
  );
}
