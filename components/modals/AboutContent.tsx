import React from "react";
import { Box } from "@mui/material";
import { inline } from "../../styles";

export const AboutContent = () => {
  return (
    <Box sx={inline.modalCenteredSx}>
      A VISUAL ALBUM MANAGEMENT TOOLKIT DESIGNED TO TRACK &amp; MONITOR
      PROGRESS, FOSTER COLLABORATION AND AID IN THE SMASHING OF GOALS.
      <Box sx={{ mt: "2vw" }}>
        TO BEGIN START A <b>NEW</b> PROJECT.
      </Box>
      <Box>
        OR <b>LOAD</b> A PRE-LOADED DEMO.
      </Box>
    </Box>
  );
};
