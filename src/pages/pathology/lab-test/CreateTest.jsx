import { Box, Grid, InputAdornment, MenuItem, Stack, TextField } from "@mui/material";
import { Save, ShieldAlert, UserRound } from "lucide-react";
import React from "react";
import LoadingButtonComponent from "../../../component/buttons/loading-button/LoadingButtonComponent";

const CreateTest = () => {
  return (
    <Box mt={2} className="create-test-form">
      <Grid container className="" columnSpacing={3} rowSpacing={4}>
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Test Category"
            select
            variant="outlined"
            fullWidth
            value={""}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ShieldAlert />
                </InputAdornment>
              ),
            }}
            SelectProps={{
              displayEmpty: true, // To show an empty option initially
            }}
          >
            <MenuItem value="">Select</MenuItem>
            <MenuItem value="option1">Dental</MenuItem>
            <MenuItem value="option2">Pathology</MenuItem>
            <MenuItem value="option3">Bed</MenuItem>
          </TextField>
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Test Name"
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
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Test Code"
            placeholder="Enter Test Code"
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
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Production Cost"
            placeholder="Enter Production Cost"
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
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Patient Price"
            placeholder="Enter Patient Price"
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
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Date"
            variant="outlined"
            fullWidth
            type="date"
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

export default CreateTest;
