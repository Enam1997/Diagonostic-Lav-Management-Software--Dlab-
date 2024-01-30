import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import {
  Box,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { Save, ShieldAlert, UserRound } from "lucide-react";
import LoadingButtonComponent from "../../../component/buttons/loading-button/LoadingButtonComponent";

const CreateAppoinment = () => {
  return (
    <Box className="page-container">
      <PagenameContainer>Create Appoinemnt</PagenameContainer>
      <Box className="page-main-content">
        <Box className="card1">
          <Box mt={2} className="create-test-form">
            <Grid container className="" columnSpacing={3} rowSpacing={4}>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Patient"
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
                  <MenuItem value="option1">Enam</MenuItem>
                  <MenuItem value="option2">Rahat</MenuItem>
                  <MenuItem value="option3">Murad</MenuItem>
                </TextField>
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Doctor"
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
                  <MenuItem value="option1">Kashem</MenuItem>
                  <MenuItem value="option2">Safiullah</MenuItem>
                  <MenuItem value="option3">Mehedi</MenuItem>
                </TextField>
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Appointment Date"
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
                  label="Time Slot"
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
                  <MenuItem value="option1">UltasonoGraphy</MenuItem>
                  <MenuItem value="option2">Digital Xray</MenuItem>
                  <MenuItem value="option3">Endoscopy</MenuItem>
                </TextField>
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Consultation Fees"
                  placeholder="Enter Test Name"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    readOnly: true,
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
                  label="Discount"
                  placeholder="Enter Purchase Price"
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
                  label="Net Payable"
                  placeholder="Eg. Purchase unit : KG & Sale Unit : Gram = Ration : 1000"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    readOnly: true,
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
                  label="Remarks"
                  placeholder="Enter Purchase Price"
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
        </Box>
      </Box>
    </Box>
  );
};

export default CreateAppoinment;
