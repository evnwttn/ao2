import React, { useState } from "react";
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
        <ListItem key={darkSide.title} disablePadding>
          {/* <Link
                to="/aogrid"
                state={{ from: "load", data: session }}
                style={inline.loadModalFontSx}
              > */}
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
            <ListItemText primary={darkSide.title} />
          </ListItemButton>
          {/* </Link> */}
        </ListItem>
      </List>
    </Box>
  );
};
