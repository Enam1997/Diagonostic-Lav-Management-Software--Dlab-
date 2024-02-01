import { Box, Grid, InputLabel, OutlinedInput, Stack } from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import ScrolabelContainer from "../../../layout/scrollabel-container/ScrolabelContainer";
import LoadingButtonComponent from "../../../component/buttons/loading-button/LoadingButtonComponent";
import { ChevronRightSquare } from "lucide-react";
import DesignationList from "./DesignationList";

function addDesignation() {
  return (
    <Box className="card1 basic-deatils-form">
      <p className="title1">Add Designation</p>
      <Stack spacing={4}>
        <Stack spacing={2}>
          <InputLabel>Designation Name</InputLabel>
          <OutlinedInput size="small" fullWidth />
        </Stack>
        <Stack alignItems={"end"}>
          <LoadingButtonComponent
            text={"Create"}
            icon={<ChevronRightSquare />}
          />
        </Stack>
      </Stack>
    </Box>
  );
}

const Designation = () => {
  return (
    <Box className="page-container">
      <PagenameContainer>Designation</PagenameContainer>
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
                {addDesignation()}
              </Grid>
              <Grid xs={6} item>
                <DesignationList/>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ScrolabelContainer>
    </Box>
  );
};

export default Designation;
