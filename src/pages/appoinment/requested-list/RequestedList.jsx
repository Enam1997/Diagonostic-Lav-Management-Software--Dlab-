import {
  Box,
  ButtonGroup,
  IconButton,
  OutlinedInput,
  Stack,
} from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import Tooltip1 from "../../../component/tooltip/Tooltip1";
import { FileText, Printer, Sheet } from "lucide-react";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import RequestListTable from "./RequestListTable";
import ScrolabelContainer from "../../../layout/scrollabel-container/ScrolabelContainer";

const buttons = [
  <Tooltip1 key={1} title={"Hello"}>
    <IconButton>
      <Sheet />
    </IconButton>
  </Tooltip1>,
  <Tooltip1 title={"Hello"} key={2}>
    <IconButton>
      <FileText />
    </IconButton>
  </Tooltip1>,
  <Tooltip1 title={"Hello"} key={3}>
    <IconButton>
      <FileText />
    </IconButton>
  </Tooltip1>,
  <Tooltip1 title={"Hello"} key={4}>
    <IconButton>
      <FileText />
    </IconButton>
  </Tooltip1>,
  <Tooltip1 title={"Hello"} key={5}>
    <IconButton>
      <Printer />
    </IconButton>
  </Tooltip1>,
];

const RequestedList = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ScrolabelContainer>
      <Box className="page-container">
        <PagenameContainer>Requested List</PagenameContainer>
        <Box
          className="page-main-content"
          sx={{
            ".MuiPaper-root": {
              boxShadow: 0,
              // marginBottom:0,
            },
          }}
        >
          <Box className="card1" mb={2} mt={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateRangePicker"]}>
                <DemoItem label="2 calendars" component="DateRangePicker">
                  <DateRangePicker calendars={2} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Box>
          <Box className="card1">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <Stack direction="row" justifyContent="space-between">
                <ButtonGroup size="small" aria-label="small button group">
                  {buttons}
                </ButtonGroup>
                <OutlinedInput size="small" placeholder="Search patient" />
              </Stack>
              <RequestListTable />
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrolabelContainer>
  );
};

export default RequestedList;
