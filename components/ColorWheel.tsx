import React from "react";
import { Box } from "@mui/system";
import { Spoke } from "./index";
import { inline, palette } from "../styles";

export const ColorWheel = ({ handleClick, openComment }: any) => {
  return (
    <Box>
      <Box>
        <Spoke
          color={palette._yellow}
          shape={inline.svgShapes.topLeft}
          handleClick={(color: any) => handleClick(color)}
          toolTip="In Progress"
          placement="left-start"
        />
        <Spoke
          color={palette._blue}
          shape={inline.svgShapes.topRight}
          handleClick={(color: any) => handleClick(color)}
          toolTip="Completed"
          placement="right-start"
        />
      </Box>
      <Box>
        <Spoke
          color={palette._grey}
          shape={inline.svgShapes.bottomLeft}
          handleClick={(color: any) => handleClick(color)}
          toolTip="Set Task"
          placement="left-end"
        />
        <Spoke
          color={palette._black}
          shape={inline.svgShapes.bottomRight}
          toolTip="Comments"
          placement="right-end"
          handleClick={openComment}
        />
      </Box>
    </Box>
  );
};
