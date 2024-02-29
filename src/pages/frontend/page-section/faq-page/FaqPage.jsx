import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import React from "react";
import FaqSection from "./FaqSection";
import PageOptions from "./PageOptions";

const FaqPage = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleTabChange} aria-label="lab API tabs example">
            <Tab label="Faq" value="1" />
            <Tab label="Options" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <FaqSection />
        </TabPanel>
        <TabPanel value="2">
          <PageOptions />
        </TabPanel>
      </TabContext>
    </Box>
  );
};

export default FaqPage;
