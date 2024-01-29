import {
  Box,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import { Save, ShieldAlert, UserRound } from "lucide-react";
import React from "react";
import LoadingButtonComponent from "../../component/buttons/loading-button/LoadingButtonComponent";
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

const CreateSchedule = () => {
  return (
    <Box mt={2} className="create-test-form">
      <Grid container className="" columnSpacing={3} rowSpacing={4}>
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
            <MenuItem value="option1">Liter</MenuItem>
            <MenuItem value="option2">Pak</MenuItem>
            <MenuItem value="option3">Kit</MenuItem>
            <MenuItem value="option3">Ml</MenuItem>
          </TextField>
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Consultation Fees"
            placeholder="Example 500"
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
            label="Week Day"
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
            <MenuItem value="option1">Sunday</MenuItem>
            <MenuItem value="option2">Monday</MenuItem>
            <MenuItem value="option3">Tuesday</MenuItem>
            <MenuItem value="option3">Wensday</MenuItem>
          </TextField>
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Per patient Duration"
            placeholder="Duration in Minute"
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
        <Grid item sm={12} >
          <Grid container >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["MobileTimePicker"]}>
                <Grid item sm={12}>
                  <DemoItem label="Time Start">
                    <MobileTimePicker
                      defaultValue={dayjs("2022-04-17T15:30")}
                      
                    />
                  </DemoItem>
                </Grid>
                <Grid item sm={12}>
                  <DemoItem label="Time End">
                    <MobileTimePicker
                      defaultValue={dayjs("2022-04-17T15:30")}
                    />
                  </DemoItem>
                </Grid>
              </DemoContainer>
            </LocalizationProvider>
          </Grid>
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

export default CreateSchedule;
