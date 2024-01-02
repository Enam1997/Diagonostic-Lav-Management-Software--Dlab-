import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Save } from "lucide-react";

const LoadingButtonComponent = ({ loading }) => {
  return (
    <LoadingButton
      // onClick={handleClick}
      loading={loading}
      loadingPosition="start"
      startIcon={<Save />}
      variant="contained"
    >
      <span>Save</span>
    </LoadingButton>
  );
};

export default LoadingButtonComponent;
