import React from "react";
import Link from "next/link";
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
            href={{
              pathname: "/grid",
              query: { session: darkSide as any },
            }}
            style={inline.loadModalFontSx}
            replace
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
