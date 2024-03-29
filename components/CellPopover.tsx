import React, { useState, useEffect, SetStateAction } from "react";
import { Box, Tooltip } from "@mui/material/";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { ColorWheel, CommentBase } from "./index";
import { inline } from "../styles";
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface CellPopoverProps {
  cell: any;
  cellComment: string;
  handleClick(value: SetStateAction<string>): void;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onSubmit(data: any): void;
}

export const CellPopover = ({
  cell,
  cellComment,
  handleClick,
  register,
  handleSubmit,
  onSubmit,
}: CellPopoverProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [commentOpen, setCommentOpen] = useState("1");

  const handleClose = () => {
    setIsPopoverOpen(false);
    setCommentOpen("1");
  };

  useEffect(() => {
    commentOpen !== "1" ? setIsPopoverOpen(true) : setIsPopoverOpen(false);
  }, [commentOpen]);

  useEffect(() => {
    setIsPopoverOpen(false);
  }, [cellComment, setIsPopoverOpen]);

  return (
    <>
      <CommentBase
        cell={cell}
        cellComment={cellComment}
        open={isPopoverOpen}
        handleClose={handleClose}
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      />
      <ColorWheel
        handleClick={(color) => handleClick(color)}
        openComment={() => setCommentOpen("2")}
      />
      <Box sx={inline.wheelSx.remove}>
        <Tooltip title="Cancel Task" placement="right-end">
          <RemoveCircleOutlineIcon onClick={() => handleClick("transparent")} />
        </Tooltip>
      </Box>
    </>
  );
};
