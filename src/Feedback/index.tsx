import { QueryNavLink } from "../components/QueryNavLink";
import LinkMaterial from "@mui/material/Link";
import Alert from "./Alert";
import Backdrop from "./Backdrop";
import Dialog from "./Dialog";
import Progress from "./Progress";
import Skeleton from "./Skeleton";
import Snackbar from "./Snackbar";

export const Routes = [
  { path: "Alert", element: <Alert /> },
  { path: "Backdrop", element: <Backdrop /> },
  { path: "Dialog", element: <Dialog /> },
  { path: "Progress", element: <Progress /> },
  { path: "Skeleton", element: <Skeleton /> },
  { path: "Snackbar", element: <Snackbar /> }
];

export default function Feedback() {
  return (
    <div className="Box">
      <div className="Item">
        <b>Feedback: </b>
      </div>
      <LinkMaterial className="Item" component={QueryNavLink} to="Alert">
        Alert
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Backdrop">
        Backdrop
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Dialog">
        Dialog
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Progress">
        Progress
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Skeleton">
        Skeleton
      </LinkMaterial>
      <LinkMaterial className="Item" component={QueryNavLink} to="Snackbar">
        Snackbar
      </LinkMaterial>
    </div>
  );
}
