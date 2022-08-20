import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
  );
}
function PaginationOutlined() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled />
    </Stack>
  );
}

function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}

function PaginationSize() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} />
      <Pagination count={10} size="large" />
    </Stack>
  );
}

function PaginationButtons() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} showFirstButton showLastButton />
      <Pagination count={10} hidePrevButton hideNextButton />
    </Stack>
  );
}

function CustomIcons() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}

function PaginationRanges() {
  return (
    <Stack spacing={2}>
      <Pagination count={11} defaultPage={6} siblingCount={0} />
      <Pagination count={11} defaultPage={6} /> {/* Default ranges */}
      <Pagination
        count={11}
        defaultPage={6}
        siblingCount={0}
        boundaryCount={2}
      />
      <Pagination count={11} defaultPage={6} boundaryCount={2} />
    </Stack>
  );
}

export default function PaginationExample() {
  return (
    <div>
      <div>Basic Pagination</div>
      <BasicPagination />
      <div>Pagination Outlined</div>
      <PaginationOutlined />
      <div>Pagination Rounded</div>
      <PaginationRounded />
      <div>Pagination Size</div>
      <PaginationSize />
      <div>Pagination Buttons</div>
      <PaginationButtons />
      <div>Custom Icons</div>
      <CustomIcons />
      <div>Pagination Ranges</div>
      <PaginationRanges />
    </div>
  );
}
