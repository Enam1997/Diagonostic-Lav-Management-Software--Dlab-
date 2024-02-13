import {
  Box,
  FormControlLabel,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  Switch,
  TextField,
} from "@mui/material";
import { Save, ShieldAlert, UserRound } from "lucide-react";
import React from "react";
import LoadingButtonComponent from "../../../component/buttons/loading-button/LoadingButtonComponent";

const AddMenu = () => {
  return (
    <Box mt={2} className="create-test-form">
      <Grid container className="" columnSpacing={3} rowSpacing={4}>
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Title "
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
            label="Position"
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
        <Grid
          item
          sm={12}
          md={6}
          display={"flex"}
          justifyContent={"space-evenly"}
        >
          <FormControlLabel
            value=""
            control={<Switch color="primary" />}
            label="Publish"
            labelPlacement="start"
          />
          <FormControlLabel
            value={true}
            control={<Switch color="primary" />}
            label="Target New Window"
            labelPlacement="start"
          />
          <FormControlLabel
            value=""
            control={<Switch checked={true} color="primary" />}
            label="External Url"
            labelPlacement="start"
          />
        </Grid>
        <Grid item sm={12} md={6}>
          <TextField
            id="outlined-basic"
            label="External Link"
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

export default AddMenu;
