import { Box, OutlinedInput, Stack, Tab } from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import PageList from "./PageList";
import AddPage from "./AddPage";

const ManagePage = () => {
  const [value, setValue] = React.useState("1");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="page-container">
      <PagenameContainer>Testimonails</PagenameContainer>
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
                  <Tab label="Page List" value="1" />
                  <Tab label="Add Page" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Stack direction="row" justifyContent="end">
                  <OutlinedInput size="small" placeholder="Search patient" />
                </Stack>

                <PageList />
              </TabPanel>
              <TabPanel value="2">
                <AddPage />
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ManagePage;
