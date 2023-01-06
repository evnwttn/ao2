import React from "react";
import { Button, Box, Divider } from "@mui/material";
import { inline, palette } from "../styles";
import { Session } from "../types";

interface NavProps {
  gridData: Session;
  handleOpenModal(id: string): any;
}

export const Nav = ({ gridData, handleOpenModal }: NavProps) => {
  return (
    <Box sx={inline.navSx.container}>
      <Box sx={{ ...inline.navSx.text, textTransform: "uppercase" }}>
        <Box sx={inline.navSx.text.author}>{gridData.author}</Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ color: palette._darkgrey, mx: "1vw" }}
        />
        <Box sx={inline.navSx.text.sessionTitle}>{gridData.sessionTitle}</Box>
      </Box>
      <Button
        disableRipple
        sx={{ mt: "0.5vw" }}
        onClick={() => handleOpenModal("Help")}
        variant="text"
        color={"inherit"}
      >
        ?
      </Button>
      <Box>
        <Button
          disableRipple
          sx={{ ...inline.logoSx.nav, textTransform: "lowercase" }}
          onClick={() => handleOpenModal("Menu")}
          variant="text"
          color={"inherit"}
        >
          ꜵ
        </Button>
      </Box>
    </Box>
  );
};
