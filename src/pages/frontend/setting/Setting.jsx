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
            label="Application Name"
            placeholder="Enter Application Name"
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
            label="Receive Email To"
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
            label="Working Hours"
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
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Address "
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
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Mobile No "
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
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Email "
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
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Fax "
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
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Footer Text"
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
        <Grid item sm={12}>
          <DragDropComponenet title={"Logo"} />
        </Grid>
        <Grid item sm={12}>
          <DragDropComponenet title={"Fav Icon"} />
        </Grid>
      </Grid>
    </Box>
  );
}

function socialLinks() {
  return (
    <Box className="card1 basic-deatils-form section-top-margin">
      <p className="title1">Social Links</p>
      <Grid container className="" columnSpacing={3} rowSpacing={4}>
        <Grid item sm={12} md={6} lg={4}>
          <TextField
            id="outlined-basic"
            label="Facebook Url"
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
            label="Twitter Url"
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
            label="Youtube Url"
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
            label="Google Plus"
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
            label="Linkedin Url"
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
            label="Pinterest Url"
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
            label="Instagram Url"
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

const Setting = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Box className="page-container">
      <PagenameContainer>Settings</PagenameContainer>

      <Box className="page-main-content">
        {basicDetails()} {socialLinks()}
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

export default Setting;
