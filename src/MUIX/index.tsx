import { QueryNavLink } from "../components/QueryNavLink";
import LinkMaterial from "@mui/material/Link";
import DataGrid from "./DataGrid";
import DataTime from "./DataTime";

export const Routes = [
  { path: "DataGrid", element: <DataGrid /> },
  { path: "DataTime", element: <DataTime /> }
];

export default function Surfaces() {
  return (
    <div className="Box">
      <div className="Item">
        <b>Surfaces: </b>
      </div>
      <LinkMaterial className="Item" component={QueryNavLink} to="DataGrid">
        DataGrid
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="DataTime">
        DataTime
      </LinkMaterial>
    </div>
  );
}
