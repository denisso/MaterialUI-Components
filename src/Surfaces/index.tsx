import { QueryNavLink } from "../components/QueryNavLink";
import LinkMaterial from "@mui/material/Link";
import Accordion from "./Accordion";
import AppBar from "./AppBar";
import Card from "./Card";
import Paper from "./Paper";

export const Routes = [
  { path: "Accordion", element: <Accordion /> },
  { path: "AppBar", element: <AppBar /> },
  { path: "Card", element: <Card /> },
  { path: "Paper", element: <Paper /> }
];

export default function Surfaces() {
  return (
    <div className="Box">
      <div className="Item">
        <b>Surfaces: </b>
      </div>
      <LinkMaterial className="Item" component={QueryNavLink} to="Accordion">
        Accordion
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="AppBar">
        AppBar
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Card">
        Card
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Paper">
        Paper
      </LinkMaterial>
    </div>
  );
}
