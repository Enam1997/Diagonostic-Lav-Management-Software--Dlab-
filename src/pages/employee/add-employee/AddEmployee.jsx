import {
  Box,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import PagenameContainer from "../../../layout/pagename-container/PagenameContainer";
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
  Save,
  Send,
  ShieldAlert,
  SquareUser,
  Syringe,
  UnlockKeyhole,
  UserRound,
  Weight,
} from "lucide-react";
import DragDropComponenet from "../../../component/dragdrop-compoent/DragDropComponenet";
import LoadingButtonComponent from "../../../component/buttons/loading-button/LoadingButtonComponent";

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
            label="Religion"
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
        <Grid item sm={12} md={6} lg={4}>
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
        <Grid item sm={12} md={6} lg={4}>
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

function officeDetails() {
  return (
    <Box className="card1 basic-deatils-form section-top-margin">
      <p className="title1">Office Details</p>
      <Grid container className="" columnSpacing={3} rowSpacing={4}>
        <Grid item sm={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Role"
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
        <Grid item sm={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Designation"
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
        <Grid item sm={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Department"
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
            label="Joining Date"
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
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Qualification"
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
      </Grid>
    </Box>
  );
}

function socialLink() {
  return (
    <Box className="card1 basic-deatils-form section-top-margin">
      <p className="title1">Social Links</p>
      <Grid container className="" columnSpacing={3} rowSpacing={4}>
        <Grid item sm={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Username"
            placeholder="Facebook"
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
            label="Twitter"
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
            label="Linkedin"
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

function bankDetails() {
  return (
    <Box className="card1 basic-deatils-form section-top-margin">
      <p className="title1">Bank Details</p>
      <Grid container className="" columnSpacing={3} rowSpacing={4}>
        <Grid item sm={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Bank Name"
            placeholder="Facebook"
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
            label="Holder Name"
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
            label="Bank Branch"
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
            label="Bank Address"
            placeholder="Facebook"
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
            label="Ifsc Code"
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
            label="Account No"
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

const AddEmployee = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Box className="page-container">
      <PagenameContainer>Add Employee</PagenameContainer>

      <Box className="page-main-content">
        {basicDetails()}
        {loginDetails()}
        {officeDetails()}
        {socialLink()}
        {bankDetails()}
        {/* {emergencyContact()}
         */}
        <Stack className="section-top-margin" alignItems="end">
          {
            <LoadingButtonComponent
              loading={loading}
              text={"Save"}
              icon={<Save />}
            />
          }
        </Stack>
      </Box>
    </Box>
  );
};

export default AddEmployee;
