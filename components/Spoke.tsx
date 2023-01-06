import React from "react";
import { Box, Tooltip } from "@mui/material/";
import { inline } from "../styles";

export const Spoke = ({
  color,
  shape,
  handleClick,
  toolTip,
  placement,
}: any) => {
  return (
    <Box sx={inline.wheelSx.spoke}>
      <svg
        width="5.75vw"
        fill={color}
        onClick={() => {
          handleClick(color);
        }}
        viewBox="0 0 12 12"
      >
        <Tooltip title={toolTip} placement={placement}>
          <path d={shape} />
        </Tooltip>
      </svg>
    </Box>
  );
};
