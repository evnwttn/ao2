import React from "react";
import { Box, Divider } from "@mui/material";
import { inline, palette } from "../../styles";

export const AboutContent = () => {
  return (
    <Box sx={inline.modalCenteredSx}>
      <Box>
        THIS IS A CLIENT-SIDE ONLY VERSION DEVELOPED USING NEXT 13, TYPESCRIPT &
        MUI FOR DEMONSTRATION PURPOSES.
        <br />
        <br />
        YOU WILL NOT BE ABLE TO SAVE YOUR SESSIONS.
      </Box>
      <Box sx={{ mt: "2vw" }}>
        TO BEGIN START A <b>NEW</b> PROJECT.
      </Box>
      <Box>
        OR <b>LOAD</b> A PRE-LOADED DEMO.
      </Box>
    </Box>
  );
};
