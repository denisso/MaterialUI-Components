import { QueryNavLink } from "../components/QueryNavLink";
import LinkMaterial from "@mui/material/Link";
import Avatar from "./Avatar";
import Badge from "./Badge";
import Chip from "./Chip";
import Divider from "./Divider";
import Icons from "./Icons";
import MaterialIcons from "./MaterialIcons";
import List from "./List";
import Table from "./Table";
import Tooltip from "./Tooltip";

export const Routes = [
  { path: "Avatar", element: <Avatar /> },
  { path: "Badge", element: <Badge /> },
  { path: "Chip", element: <Chip /> },
  { path: "Divider", element: <Divider /> },
  { path: "Icons", element: <Icons /> },
  { path: "MaterialIcons", element: <MaterialIcons /> },
  { path: "List", element: <List /> },
  { path: "Table", element: <Table /> },
  { path: "Tooltip", element: <Tooltip /> }
];

export default function DataDisplay() {
  return (
    <div className="Box">
      <div className="Item">
        <b>Data display: </b>
      </div>
      <LinkMaterial className="Item" component={QueryNavLink} to="Avatar">
        Avatar
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Badge">
        Badge
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Chip">
        Chip
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Divider">
        Divider
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Icons">
        Icons (Font Awesome)
      </LinkMaterial>
      <LinkMaterial
        className="Item"
        component={QueryNavLink}
        to="MaterialIcons"
      >
        MaterialIcons
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="List">
        List
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Table">
        Table
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Tooltip">
        Tooltip
      </LinkMaterial>
    </div>
  );
}
