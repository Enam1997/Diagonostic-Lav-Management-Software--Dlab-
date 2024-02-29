import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import AboutSection from "./AboutSection";
import ServiceSection from "./ServiceSection";
import CallToAction from "./CallToAction";
import PageOptions from "./PageOptions";

const AboutUsPage = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="About" value="1" />
            <Tab label="Service" value="2" />
            <Tab label="Call To action" value="3" />
            <Tab label="Options" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <AboutSection />
        </TabPanel>
        <TabPanel value="2">
          <ServiceSection />
        </TabPanel>
        <TabPanel value="3">
          <CallToAction />
        </TabPanel>
        <TabPanel value="4">
          <PageOptions />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default AboutUsPage;
