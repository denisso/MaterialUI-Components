import { QueryNavLink } from "../components/QueryNavLink";
import LinkMaterial from "@mui/material/Link";
import AutoComplete from "./AutoComplete";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Checkbox from "./Checkbox";
import FloatingActionButton from "./FloatingActionButton";
import RadioButton from "./RadioButton";
import Rating from "./Rating";
import Select from "./Select";
import SplitButton from "./SplitButton";
import ToggleButton from "./ToggleButton";
import TransferList from "./TransferList";

export const Routes = [
  { path: "AutoComplete", element: <AutoComplete /> },
  { path: "Button", element: <Button /> },
  { path: "ButtonGroup", element: <ButtonGroup /> },
  { path: "Checkbox", element: <Checkbox /> },
  { path: "FloatingActionButton", element: <FloatingActionButton /> },
  { path: "RadioButton", element: <RadioButton /> },
  { path: "Rating", element: <Rating /> },
  { path: "Select", element: <Select /> },
  { path: "SplitButton", element: <SplitButton /> },
  { path: "ToggleButton", element: <ToggleButton /> },
  { path: "TransferList", element: <TransferList /> }
];

export default function Inputs() {
  return (
    <div className="Box">
      <div className="Item">
        <b>Inputs: </b>
      </div>
      <LinkMaterial className="Item" component={QueryNavLink} to="AutoComplete">
        AutoComplete
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Button">
        Button
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="ButtonGroup">
        ButtonGroup
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Checkbox">
        Checkbox
      </LinkMaterial>
      <LinkMaterial
        className="Item"
        component={QueryNavLink}
        to="FloatingActionButton"
      >
        FloatingActionButton
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="RadioButton">
        RadioButton
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Rating">
        Rating
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Select">
        Select
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="SplitButton">
        SplitButton
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="ToggleButton">
        ToggleButton
      </LinkMaterial>
    </div>
  );
}
