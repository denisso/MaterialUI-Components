import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange, deepPurple } from "@mui/material/colors";
function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://picsum.photos/id/1/200/200" />
      <Avatar alt="Travis Howard" src="https://picsum.photos/id/234/200/200" />
      <Avatar alt="Cindy Baker" src="https://picsum.photos/id/12/200/200" />
    </Stack>
  );
}
function LetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    </Stack>
  );
}

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`
  };
}

function BackgroundLetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar("Kent Dodds")} />
      <Avatar {...stringAvatar("Jed Watson")} />
      <Avatar {...stringAvatar("Tim Neutkens")} />
    </Stack>
  );
}

export default function AvatarExample() {
  return (
    <div>
      <div>Image Avatars</div>
      <ImageAvatars />
      <div>Letter Avatars</div>
      <LetterAvatars />
      <div>Background Letter Avatars</div>
      <BackgroundLetterAvatars />
    </div>
  );
}
