import React from "react";
import { FileText, Printer, Sheet } from "lucide-react";
import { ButtonGroup, IconButton, Stack } from "@mui/material";
import Tooltip1 from "../tooltip/Tooltip1";

const TableDataListPrintButtons = () => {
  return (
    <ButtonGroup size="small" aria-label="small button group">
      <Tooltip1 key={1} title={"Hello"}>
        <IconButton>
          <Sheet />
        </IconButton>
      </Tooltip1>
      <Tooltip1 title={"Hello"} key={2}>
        <IconButton>
          <FileText />
        </IconButton>
      </Tooltip1>
      <Tooltip1 title={"Hello"} key={3}>
        <IconButton>
          <FileText />
        </IconButton>
      </Tooltip1>
      <Tooltip1 title={"Hello"} key={4}>
        <IconButton>
          <FileText />
        </IconButton>
      </Tooltip1>
      <Tooltip1 title={"Hello"} key={5}>
        <IconButton>
          <Printer />
        </IconButton>
      </Tooltip1>
    </ButtonGroup>
  );
};

export default TableDataListPrintButtons;
