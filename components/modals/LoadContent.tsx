import React, { useState, useContext } from "react";
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
import { GridDataContext } from "../contexts/gridDataContext";
import { darkSide } from "../sessions";

export const LoadContent = () => {
  const useGridDataContext = useContext(GridDataContext);
  const [gridData, setGridData] = useState(useGridDataContext);

  const router = useRouter();

  return (
    <Box sx={{ mx: "2vw" }}>
      <button onClick={() => console.log(gridData)}>the rig</button>
      <button
        onClick={() =>
          setGridData({
            ...gridData,
            test: "test",
          })
        }
      >
        test
      </button>
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
