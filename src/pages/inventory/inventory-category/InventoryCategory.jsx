import { Box, Grid, InputLabel, OutlinedInput, Stack } from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import ScrolabelContainer from "../../../layout/scrollabel-container/ScrolabelContainer";
import LoadingButtonComponent from "../../../component/buttons/loading-button/LoadingButtonComponent";
import { ChevronRightSquare } from "lucide-react";
import InventoryCategoryList from "./InventoryCategoryList";

function addCategory() {
  return (
    <Box className="card1 basic-deatils-form">
      <p className="title1">Add Category</p>
      <Stack spacing={4}>
        <Stack spacing={2}>
          <InputLabel>Category Name</InputLabel>
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

const InventoryCategory = () => {
  return (
    <Box className="page-container">
      <PagenameContainer>Category</PagenameContainer>
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
                {addCategory()}
              </Grid>
              <Grid xs={6} item>
                <InventoryCategoryList/>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ScrolabelContainer>
    </Box>
  );
};

export default InventoryCategory;
