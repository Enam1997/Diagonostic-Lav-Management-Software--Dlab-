import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import DoctorOption from "./DoctorOption";
import ProfileOption from "./ProfileOption";

const DocotrsPage = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Doctor Option" value="1" />
            <Tab label="Profile Option" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <DoctorOption />
        </TabPanel>
        <TabPanel value="2">
          <ProfileOption />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default DocotrsPage;
