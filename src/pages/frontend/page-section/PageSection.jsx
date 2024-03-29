import { Box, Grid, OutlinedInput, Stack, Tab } from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { ClipboardType, Contact, Home, ShieldQuestion } from "lucide-react";
import HomePage from "./home-page/HomePage";
import AppoinmentPage from "./appoinment-page/AppoinmentPage";
import DocotrsPage from "./doctors-page/DocotrsPage";
import AboutUsPage from "./aboutus-page/AboutUsPage";
import FaqPage from "./faq-page/FaqPage";
import ContactUsPage from "./contactus-page/ContactUsPage";

const PageSection = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box className="page-container">
      <PagenameContainer>Website Page</PagenameContainer>
      <Box className="page-main-content">
        <TabContext value={value}>
          <Grid container spacing={2}>
            <Grid item sm={12} md={4} lg={2}>
              <Box className="card1">
                <TabList
                  onChange={handleTabChange}
                  aria-label="lab API tabs example"
                  orientation="vertical"
                  sx={{
                    ".MuiTab-root": {
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "start",
                    },
                    ".MuiTab-iconWrapper": {
                      marginRight: 1, // Add a margin between the icon and the label
                    },
                  }}
                >
                  <Tab label="Home" value="1" icon={<Home />} />
                  <Tab label="Appoinment" value="2" icon={<ClipboardType />} />
                  <Tab label="Doctors" value="3" icon={<ClipboardType />} />
                  <Tab label="About us" value="4" icon={<Home />} />
                  <Tab label="FAQ" value="5" icon={<ShieldQuestion />} />
                  <Tab label="Contact us" value="6" icon={<Contact />} />
                </TabList>
              </Box>
            </Grid>

            <Grid item sm={12} md={8} lg={10}>
              <Box className="card1">
                <TabPanel value="1">
                  <HomePage />
                </TabPanel>
                <TabPanel value="2">
                  <AppoinmentPage />
                </TabPanel>
                <TabPanel value="3">
                  <DocotrsPage />
                </TabPanel>
                <TabPanel value="4">
                  <AboutUsPage />
                </TabPanel>
                <TabPanel value="5">
                  <FaqPage />
                </TabPanel>
                <TabPanel value="6">
                  <ContactUsPage />
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </TabContext>
        {/* <Grid container spacing={2}>
          <TabContext>
            <Grid item xs={2}>
              <Box className="card1">
                <Item>xs=8</Item>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Item>xs=4</Item>
            </Grid>
          </TabContext>
        </Grid> */}
      </Box>
    </Box>
  );
};

export default PageSection;
