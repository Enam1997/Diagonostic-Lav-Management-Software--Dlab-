import { Box, Button, OutlinedInput, Stack } from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import AllAppoinment from "./AllAppoinment";

import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import TableDataListPrintButtons from "../../../component/tableDataListPrintButtons/TableDataListPrintButtons";

const AppoinmentList = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="page-container">
      <PagenameContainer>Schedule</PagenameContainer>
      <Box
        className="page-main-content"
        sx={{
          ".MuiPaper-root": {
            boxShadow: 0,
            // marginBottom:0,
          },
        }}
      >
        <Box className="card1" mb={2} mt={2} display={"flex"}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DateRangePicker"]}>
              <DemoItem label="2 calendars" component="DateRangePicker">
                <DateRangePicker calendars={2} />
              </DemoItem>
              <Button variant="contained" style={{ height: "40px" }}>
                Filter
              </Button>
            </DemoContainer>
          </LocalizationProvider>
        </Box>
        <Box className="card1">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <Stack direction="row" justifyContent="space-between">
              <TableDataListPrintButtons />
              <OutlinedInput size="small" placeholder="Search patient" />
            </Stack>
            <AllAppoinment />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AppoinmentList;
