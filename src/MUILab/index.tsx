import { QueryNavLink } from "../components/QueryNavLink";
import LinkMaterial from "@mui/material/Link";
import Mansory from "./Mansory";
import TimeLine from "./TimeLine";
import TreeView from "./TreeView";

export const Routes = [
  { path: "Mansory", element: <Mansory /> },
  { path: "TimeLine", element: <TimeLine /> },
  { path: "TreeView", element: <TreeView /> }
];

export default function Surfaces() {
  return (
    <div className="Box">
      <div className="Item">
        <b>MUI Lab: </b>
      </div>
      <LinkMaterial className="Item" component={QueryNavLink} to="Mansory">
        Mansory
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="TimeLine">
        TimeLine
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="TreeView">
        TreeView
      </LinkMaterial>
    </div>
  );
}
