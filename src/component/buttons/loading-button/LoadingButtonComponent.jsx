import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { Save } from "lucide-react";

const LoadingButtonComponent = ({ loading, text, icon }) => {
  return (
    <LoadingButton
      // onClick={handleClick}
      loading={loading}
      loadingPosition="start"
      startIcon={icon}
      variant="contained"
    >
      <span>{text}</span>
    </LoadingButton>
  );
};

export default LoadingButtonComponent;
