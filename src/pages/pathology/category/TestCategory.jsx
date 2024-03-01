import React from "react";

import { Box, Grid, InputLabel, OutlinedInput, Stack } from "@mui/material";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import ScrolabelContainer from "../../../layout/scrollabel-container/ScrolabelContainer";
import LoadingButtonComponent from "../../../component/buttons/loading-button/LoadingButtonComponent";
import { ChevronRightSquare } from "lucide-react";
import DeparatmentList from "./CategoryList";
import CategoryList from "./CategoryList";

function addTestCategory() {
  return (
    <Box className="card1 basic-deatils-form">
      <p className="title1">Add Test Category</p>
      <Stack spacing={4}>
        <Stack spacing={2}>
          <InputLabel>Test Name</InputLabel>
          <OutlinedInput size="small" fullWidth />
        </Stack>
        <Stack alignItems={"end"}>
          <LoadingButtonComponent text={"Add"} icon={<ChevronRightSquare />} />
        </Stack>
      </Stack>
    </Box>
  );
}

const TestCategory = () => {
  return (
    <Box className="page-container">
      <PagenameContainer>Test Category</PagenameContainer>
      <ScrolabelContainer>
        <Box
          className="page-main-content"
          sx={{
            ".MuiPaper-root": {
              boxShadow: 0,
            },
          }}
        >
          <Box className="section-top-margin">
            <Grid container spacing={2} height={500} className="">
              <Grid xs={6} item>
                {addTestCategory()}
              </Grid>
              <Grid xs={6} item>
                <CategoryList />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ScrolabelContainer>
    </Box>
  );
};

export default TestCategory;
