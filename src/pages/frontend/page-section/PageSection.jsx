import { Box, Grid, OutlinedInput, Stack, Tab } from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import "./page-section.css";

const PageSection = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="page-container">
      <PagenameContainer>Website Page</PagenameContainer>
      <Box className="page-main-content">
        <Grid container spacing={2} className="" sx={{ marginTop: "20px" }}>
          <Grid xs={12} md={4} lg={2} className="test" item>
            <TabContext value={value}>
              <TabList
                onChange={handleTabChange}
                aria-label="lab API tabs example"
                orientation="vertical"
              >
                <Tab label="Slider List" value="1" sx={{ textAlign: "left" }} />
                <Tab label="Add Slider" value="2" />
                <Tab label="Slider List" value="3" />
                <Tab label="Add Slider" value="4" />
                <Tab label="Slider List" value="5" />
                <Tab label="Add Slider" value="6" />
              </TabList>
              <TabPanel value="1"></TabPanel>
              <TabPanel value="2"></TabPanel>
            </TabContext>
          </Grid>
          <Grid xs={12} md={8} lg={10} item className="text">
            sadfd
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PageSection;
