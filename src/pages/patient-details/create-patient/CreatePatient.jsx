import { Box, Grid, InputAdornment, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
import ScrolabelContainer from "../../../layout/scrollabel-container/ScrolabelContainer";

import "./createpatient.css";
import {
  BadgePlus,
  Calendar,
  CalendarCheck,
  HeartPulse,
  Layers3,
  MailOpen,
  Phone,
  RefreshCcwDot,
  Ruler,
  Send,
  ShieldAlert,
  SquareUser,
  Syringe,
  UnlockKeyhole,
  UserRound,
  Weight,
} from "lucide-react";
import DragDropComponenet from "../../../component/dragdrop-compoent/DragDropComponenet";

function basicDetails() {
  return (
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
            className="custom-textfield"
            autoFocus
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Gender"
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
                  <CalendarCheck />
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
                  <Layers3 />
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
                  <Syringe />
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
                  <HeartPulse />
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
                  <Ruler />
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
                  <Weight />
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
        <Grid item sm={12}>
          <DragDropComponenet />
        </Grid>
      </Grid>
    </Box>
  );
}

function emergencyContact() {
  return (
    <Box className="card1 basic-deatils-form section-top-margin">
      <p className="title1">Emergency Contact</p>
      <Grid container className="" columnSpacing={3} rowSpacing={4}>
        <Grid item sm={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Gurdian"
            placeholder="Enter Gurdian Name"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Send />
                </InputAdornment>
              ),
            }}
            className="custom-textfield"
            autoFocus
          />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Relationship"
            placeholder="Relationship with Gurdian"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RefreshCcwDot />
                </InputAdornment>
              ),
            }}
            className="custom-textfield"
            autoFocus
          />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Mobile No"
            placeholder="Gurdian Phone"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Phone />
                </InputAdornment>
              ),
            }}
            className="custom-textfield"
            autoFocus
          />
        </Grid>
      </Grid>
    </Box>
  );
}

function loginDetails() {
  return (
    <Box className="card1 basic-deatils-form section-top-margin">
      <p className="title1">Login Details</p>
      <Grid container className="" columnSpacing={3} rowSpacing={4}>
        <Grid item sm={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Username"
            placeholder="Enter Your Name"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SquareUser />
                </InputAdornment>
              ),
            }}
            className="custom-textfield"
            autoFocus
          />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Password"
            placeholder="Enter Your Name"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UnlockKeyhole />
                </InputAdornment>
              ),
            }}
            className="custom-textfield"
            autoFocus
          />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Retype Password"
            placeholder="Enter Your Name"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <UnlockKeyhole />
                </InputAdornment>
              ),
            }}
            className="custom-textfield"
            autoFocus
          />
        </Grid>
      </Grid>
    </Box>
  );
}

const CreatePatient = () => {
  return (
    <Box className="page-container">
      <PagenameContainer>Create Patient</PagenameContainer>
      <ScrolabelContainer>
        <Box className="page-main-content">
          {basicDetails()} {emergencyContact()} {loginDetails()}
        </Box>
      </ScrolabelContainer>
    </Box>
  );
};

export default CreatePatient;
