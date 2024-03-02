import React from "react";
import "./topbar.css";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  OutlinedInput,
  Stack,
  Tooltip,
} from "@mui/material";
import {
  AlignJustify,
  Globe,
  Grid3X3,
  LogOut,
  Maximize,
  Settings,
} from "lucide-react";
import Tooltip1 from "../../component/tooltip/Tooltip1";

const Topbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [sideBarOpen, setSideBarOpen] = React.useState(true);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="topbar">
      <Stack width="100%" direction="row" justifyContent="space-between">
        <Box>
          <Stack spacing={2} direction="row">
            <Tooltip1 title={sideBarOpen ? "Close" : "Open"}>
              <IconButton>
                <AlignJustify />
              </IconButton>
            </Tooltip1>
            <Tooltip1 title={"Full Screen"}>
              {" "}
              <IconButton>
                <Maximize />
              </IconButton>
            </Tooltip1>
            <Tooltip1 title={"Shortcuts"}>
              <IconButton>
                <Grid3X3 />
              </IconButton>
            </Tooltip1>

            <OutlinedInput size="small" placeholder="Search patient" />
          </Stack>
        </Box>
        <Box>
          <Stack pacing={2} direction="row">
            <Tooltip1 title={"Website"}>
              <IconButton>
                <Globe />
              </IconButton>
            </Tooltip1>

            <Tooltip1 title={"Account"}>
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip1>
          </Stack>
        </Box>
      </Stack>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <LogOut />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Topbar;
