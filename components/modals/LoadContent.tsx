import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { darkSide } from "../sessions";

export const LoadContent = () => {
  const router = useRouter();

  return (
    <Box sx={{ mx: "2vw" }}>
      <List>
        <ListItem key={darkSide.sessionTitle} disablePadding>
          <ListItemButton
            onClick={() =>
              router.replace({
                pathname: "/grid",
              })
            }
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
        </ListItem>
      </List>
    </Box>
  );
};
