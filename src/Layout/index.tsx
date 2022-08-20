import { QueryNavLink } from "../components/QueryNavLink";
import LinkMaterial from "@mui/material/Link";
import Box from "./Box";
import Container from "./Container";
import Grid from "./Grid";
import ImageList from "./ImageList";
import Stack from "./Stack";

export const Routes = [
  { path: "Box", element: <Box /> },
  { path: "Container", element: <Container /> },
  { path: "Grid", element: <Grid /> },
  { path: "ImageList", element: <ImageList /> },
  { path: "Stack", element: <Stack /> }
];

export default function Surfaces() {
  return (
    <div className="Box">
      <div className="Item">
        <b>Layout: </b>
      </div>
      <LinkMaterial className="Item" component={QueryNavLink} to="Box">
        Box
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Container">
        Container
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Grid">
        Grid
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="ImageList">
        ImageList
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Stack">
        Stack
      </LinkMaterial>
    </div>
  );
}
