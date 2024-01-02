import { Tooltip } from "@mui/material";
import React from "react";

const Tooltip1 = ({ title, children }) => {
  return <Tooltip title={title}>{children}</Tooltip>;
};

export default Tooltip1;
