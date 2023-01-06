import React from "react";
import { Box, Divider } from "@mui/material";
import { CommentContent } from "./modals/index";
import { inline, palette } from "../styles";

export const CommentModal = ({
  cell,
  cellComment,
  register,
  handleSubmit,
  onSubmit,
}: any) => {
  return (
    <Box
      sx={{
        ...inline.modalFontSx,
        ...inline.modalBoxStyling,
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          mb: "1vw",
        }}
      >
        <Box
          sx={{
            pr: "0.75vw",
            fontWeight: "800",
            color: palette._red,
          }}
        >
          {cell.track.title}
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ color: palette._darkgrey }}
        />
        <Box sx={{ pl: "0.75vw" }}>{cell.parameter}</Box>
      </Box>
      <Divider variant="middle" sx={{ color: palette._darkgrey }} />
      <CommentContent
        cell={cell}
        cellComment={cellComment}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
    </Box>
  );
};
