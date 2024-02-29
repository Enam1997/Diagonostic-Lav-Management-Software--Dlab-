import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import WelcomeMessage from "./WelcomeMessage";
import DoctorsSection from "./DoctorsSection";
import TestimonailSection from "./TestimonailSection";
import ServiceSection from "./ServiceSection";
import CallToActionSection from "./CallToActionSection";
import PageOptions from "./PageOptions";

const HomePage = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Welcome Message" value="1" />
            <Tab label="Docotrs" value="2" />
            <Tab label="Testimonail" value="3" />
            <Tab label="Service" value="4" />
            <Tab label="Call To action" value="5" />
            <Tab label="Option" value="6" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <WelcomeMessage />
        </TabPanel>
        <TabPanel value="2">
          <DoctorsSection />
        </TabPanel>
        <TabPanel value="3">
          <TestimonailSection />
        </TabPanel>
        <TabPanel value="4">
          <ServiceSection />
        </TabPanel>
        <TabPanel value="5">
          <CallToActionSection />
        </TabPanel>
        <TabPanel value="6">
          <PageOptions />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default HomePage;
