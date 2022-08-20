import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { pink } from "@mui/material/colors";
import "../styles.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function IconCheckboxes() {
  return (
    <div>
      <div className="Header">
        <b>Icon</b>
      </div>
      <div>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <Checkbox
          {...label}
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
        />
      </div>
      <div className="Header">
        <b>basic</b>
      </div>
      <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
      </div>
      <div className="Header">
        <b>Size</b>
      </div>
      <div>
        <Checkbox {...label} defaultChecked size="small" />
        <Checkbox {...label} defaultChecked />
        <Checkbox
          {...label}
          defaultChecked
          sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
        />
      </div>
      <div className="Header">
        <b>Color</b>
      </div>
      <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} defaultChecked color="secondary" />
        <Checkbox {...label} defaultChecked color="success" />
        <Checkbox {...label} defaultChecked color="default" />
        <Checkbox
          {...label}
          defaultChecked
          sx={{
            color: pink[800],
            "&.Mui-checked": {
              color: pink[600]
            }
          }}
        />
      </div>
    </div>
  );
}
