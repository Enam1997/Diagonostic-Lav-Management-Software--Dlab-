import { Box, ButtonGroup, IconButton, OutlinedInput, Stack, Tab } from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import ScrolabelContainer from "../../../layout/scrollabel-container/ScrolabelContainer";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TestList from "./TestList";
import CreateTest from "./CreateTest";
import Tooltip1 from "../../../component/tooltip/Tooltip1";
import { FileText, Printer, Sheet } from "lucide-react";

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

const LabTest = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="page-container">
      <PagenameContainer>Lab Test</PagenameContainer>
      <Box
        className="page-main-content"
        sx={{
          ".MuiPaper-root": {
            boxShadow: 0,
            // marginBottom:0,
          },
        }}
      >
        <Box className="card1">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleTabChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Test List" value="1" />
                  <Tab label="Create Test" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Stack direction="row" justifyContent="space-between">
                  <ButtonGroup size="small" aria-label="small button group">
                    {buttons}
                  </ButtonGroup>
                  <OutlinedInput size="small" placeholder="Search patient" />
                </Stack>
                <TestList />
              </TabPanel>
              <TabPanel value="2">
                <CreateTest />
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LabTest;
