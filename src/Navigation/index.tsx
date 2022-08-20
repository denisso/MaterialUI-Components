import { QueryNavLink } from "../components/QueryNavLink";
import LinkMaterial from "@mui/material/Link";

import BottomNavigation from "./BottomNavigation";
import Breadcrumbs from "./Breadcrumbs";
import Drawer from "./Drawer";
import Links from "./Links";
import Menu from "./Menu";
import Pagination from "./Pagination";
import SpeedDial from "./SpeedDial";
import Stepper from "./Stepper";
import Tabs from "./Tabs";

export const Routes = [
  { path: "BottomNavigation", element: <BottomNavigation /> },
  { path: "Breadcrumbs", element: <Breadcrumbs /> },
  { path: "Drawer", element: <Drawer /> },
  { path: "Links", element: <Links /> },
  { path: "Menu", element: <Menu /> },
  { path: "Pagination", element: <Pagination /> },
  { path: "SpeedDial", element: <SpeedDial /> },
  { path: "Stepper", element: <Stepper /> },
  { path: "Tabs", element: <Tabs /> }
];

export default function Surfaces() {
  return (
    <div className="Box">
      <div className="Item">
        <b>Navigation: </b>
      </div>
      <LinkMaterial
        className="Item"
        component={QueryNavLink}
        to="BottomNavigation"
      >
        BottomNavigation
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Breadcrumbs">
        Breadcrumbs
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Drawer">
        Drawer
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Links">
        Links
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Menu">
        Menu
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Pagination">
        Pagination
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="SpeedDial">
        SpeedDial
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Stepper">
        Stepper
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Tabs">
        Tabs
      </LinkMaterial>
    </div>
  );
}
