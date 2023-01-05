import React, { useState, useContext, SetStateAction, Dispatch } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { GridDataContext } from "../contexts/gridDataContext";
import { darkSide } from "../sessions";

interface LoadContextProps {
  setGridToggle: Dispatch<SetStateAction<boolean>>;
}

export const LoadContent = ({ setGridToggle }: LoadContextProps) => {
  const useGridDataContext = useContext(GridDataContext);
  const [gridData, setGridData] = useState(useGridDataContext);

  const submitGridData = () => {
    setGridToggle(true);
    console.log("Submitting grid data...");

    // setGridData({
    //   ...gridData,
    //   test: "test",
    // })
  };

  return (
    <Box sx={{ mx: "2vw" }}>
      <List>
        <ListItem key={darkSide.sessionTitle} disablePadding>
          <ListItemButton
            onClick={() => submitGridData()}
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
