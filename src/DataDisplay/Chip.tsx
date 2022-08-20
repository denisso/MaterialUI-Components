import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function BasicChips() {
  return (
    <div>
      <div className="Header">
        <p>
          <a
            href="https://mui.com/material-ui/react-chip/"
            target="_blank"
            rel="noopener noreferrer"
          >
            reference
          </a>
        </p>
        <b>
          Chips are compact elements that represent an input, attribute, or
          action.
        </b>
      </div>
      <Stack direction="row" spacing={1}>
        <Chip label="Chip Filled" />
        <Chip label="Chip Outlined" variant="outlined" />
      </Stack>
    </div>
  );
}
