import { Box, Grid, InputAdornment, Stack, TextField } from "@mui/material";
import { Save, UserRound } from "lucide-react";
import React from "react";
import LoadingButtonComponent from "../../../component/buttons/loading-button/LoadingButtonComponent";

const AddFaq = () => {
  return (
    <Box mt={2} className="create-test-form">
      <Grid container className="" columnSpacing={3} rowSpacing={4}>
        <Grid item sm={12}>
          <TextField
            id="outlined-basic"
            label="Title"
            placeholder="Enter Test Name"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UserRound />
                </InputAdornment>
              ),
            }}
            className="custom-textfield"
            autoFocus
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            id="outlined-basic"
            label="Description"
            placeholder="Eg. Purchase unit : KG & Sale Unit : Gram = Ration : 1000"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UserRound />
                </InputAdornment>
              ),
            }}
            className="custom-textfield"
            autoFocus
          />
        </Grid>
      </Grid>
      <Stack className="section-top-margin" alignItems="end">
        {
          <LoadingButtonComponent
            loading={true}
            text={"Save"}
            icon={<Save />}
          />
        }
      </Stack>
    </Box>
  );
};

export default AddFaq;
