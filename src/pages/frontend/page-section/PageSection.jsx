import { Box, Grid, OutlinedInput, Stack, Tab } from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const PageSection = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="page-container">
      <PagenameContainer>Website Page</PagenameContainer>
      <Box className="page-main-content">
        <Grid container>
          <Grid item sm={12} md={4} lg={2} className="card1" mr={2}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleTabChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Slider List" value="1" />
                  <Tab label="Add Slider" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Stack direction="row" justifyContent="end">
                  <OutlinedInput size="small" placeholder="Search patient" />
                </Stack>

                {/* <SliderList /> */}
              </TabPanel>
              <TabPanel value="2">{/* <AddSlider /> */}</TabPanel>
            </TabContext>
          </Grid>
          <Grid item sm={12} md={8} lg={10} className="card1"></Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PageSection;
