import { Box, Grid, InputAdornment, MenuItem, TextField } from "@mui/material";
import React from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import ScrolabelContainer from "../../../layout/scrollabel-container/ScrolabelContainer";
import "./createpatient.css";
import { BadgePlus, Calendar, MailOpen, Phone, ShieldAlert, UserRound } from "lucide-react";

const CreatePatient = () => {
  return (
    <Box className="page-container">
      <PagenameContainer>Create Patient</PagenameContainer>
      <ScrolabelContainer>
        <Box className="page-main-content">
          <Box className="card1 basic-deatils-form">
            <p className="title1">Basic Deatils</p>
            <Grid container className="" columnSpacing={3} rowSpacing={4}>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  placeholder="Enter Your Name"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <UserRound />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Gender"
                  select
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <ShieldAlert />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="" disabled>
                    Select
                  </MenuItem>
                  <MenuItem value="option1">Male</MenuItem>
                  <MenuItem value="option2">Female</MenuItem>
                  <MenuItem value="option3">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="Birthday"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Calendar />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="Age"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <UserRound />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="Maritual Status"
                  variant="outlined"
                  select
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <BadgePlus />
                      </InputAdornment>
                    ),
                  }}
                >
                  <MenuItem value="" disabled>
                    Select
                  </MenuItem>
                  <MenuItem value="option1">Male</MenuItem>
                  <MenuItem value="option2">Female</MenuItem>
                  <MenuItem value="option3">Other</MenuItem>
                </TextField>
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Mobile no"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Phone />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOpen />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sm={12} md={6} lg={4}>
                <TextField
                  id="outlined-basic"
                  label="Category"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <UserRound />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sm={12} md={6} lg={2}>
                <TextField
                  id="outlined-basic"
                  label="Blood Group"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <UserRound />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sm={12} md={6} lg={2}>
                <TextField
                  id="outlined-basic"
                  label="Blood Pressure"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <UserRound />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sm={12} md={6} lg={2}>
                <TextField
                  id="outlined-basic"
                  label="Height"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <UserRound />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sm={12} md={6} lg={2}>
                <TextField
                  id="outlined-basic"
                  label="Weight"
                  variant="outlined"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <UserRound />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item sm={12}>
                <TextField
                  id="outlined-basic"
                  label="Adress"
                  variant="outlined"
                  placeholder="Adress"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ScrolabelContainer>
    </Box>
  );
};

export default CreatePatient;
