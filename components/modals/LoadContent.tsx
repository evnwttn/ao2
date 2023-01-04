import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { inline } from "../../styles";
import { darkSide } from "../sessions";

export const LoadContent = () => {
  return (
    <Box sx={{ mx: "2vw" }}>
      <List>
        <ListItem key={darkSide.sessionTitle} disablePadding>
          <Link
            to="/grid"
            state={{ from: "load", data: darkSide }}
            style={inline.loadModalFontSx}
          >
            <ListItemButton
              sx={{
                span: {
                  fontSize: "1.25vw",
                },
                "&:hover": {
                  background: "transparent",
                  opacity: "0.7",
                  cursor: "pointer",
                },
              }}
              disableRipple
            >
              <ListItemIcon>
                <ArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary={darkSide.sessionTitle} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};
