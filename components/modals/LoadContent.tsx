import React, { SetStateAction, Dispatch } from "react";
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
import { Session } from "../../types";

interface LoadContextProps {
  setGridData: Dispatch<SetStateAction<Session>>;
}

export const LoadContent = ({ setGridData }: LoadContextProps) => {
  return (
    <Box sx={{ mx: "2vw" }}>
      <List>
        <ListItem key={darkSide.sessionTitle} disablePadding>
          <ListItemButton
            onClick={() =>
              setGridData({
                ...darkSide,
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
