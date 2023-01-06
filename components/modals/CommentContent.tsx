import React from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import { inline } from "../../styles";

export const CommentContent = ({
  cell,
  cellComment,
  handleSubmit,
  onSubmit,
  register,
}: any) => {
  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id={`${cell.track}.${cell.parameter}`}
          inputProps={inline.commentSx.inputProps}
          sx={inline.commentSx.textField}
          margin="normal"
          variant="filled"
          multiline
          rows={6}
          defaultValue={cellComment}
          {...register("comment", {})}
        />
        <IconButton disableRipple sx={{ cursor: "default" }} type="submit">
          <SaveRoundedIcon
            sx={{
              ml: "25vw",
              mt: "1vh",
            }}
          />
        </IconButton>
      </Box>
    </>
  );
};
