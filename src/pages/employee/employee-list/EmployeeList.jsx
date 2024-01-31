import {
  Box,
  ButtonGroup,
  IconButton,
  OutlinedInput,
  Stack,
  Tab,
} from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Tooltip1 from "../../../component/tooltip/Tooltip1";

import EmployeeListTable from "./EmployeeListTable";
import { rows } from "../../../const-data/inventory/checmicalList";

const EmployeeList = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="page-container">
      <PagenameContainer>Iventory</PagenameContainer>
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
                  <Tab label="Admin" value="1" />
                  <Tab label="Doctor" value="2" />
                  <Tab label="Accountant" value="3" />
                  <Tab label="Laboratorist" value="4" />
                  <Tab label="Receptionist" value="5" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <EmployeeListTable rows={rows} />
              </TabPanel>
              <TabPanel value="2">
                <EmployeeListTable rows={rows} />
              </TabPanel>
              <TabPanel value="3">
                <EmployeeListTable rows={rows} />
              </TabPanel>
              <TabPanel value="4">
                <EmployeeListTable rows={rows} />
              </TabPanel>
              <TabPanel value="5">
                <EmployeeListTable rows={rows} />
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeList;
