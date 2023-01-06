import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Box, Grid, Popover } from "@mui/material/";
import { CellPopover } from "./index";
import { inline, palette } from "../styles";
import { Session, Track } from "../types";

interface CellProps {
  cell: any;
  track: Track;
  parameter: any;
  toggleHovered(): any;
  setHoverCell: Dispatch<SetStateAction<any>>;
  hoverCell: any;
  gridData: Session;
  setCellOpen: Dispatch<SetStateAction<any>>;
  setCellClosed: Dispatch<SetStateAction<any>>;
}

export const Cell = ({
  cell,
  track,
  parameter,
  toggleHovered,
  setHoverCell,
  hoverCell,
  gridData,
  setCellOpen,
  setCellClosed,
}: CellProps) => {
  const { register, handleSubmit } = useForm<FieldValues, any>();
  const [cellColor, setCellColor] = useState<string>(palette._grey);
  const [cellComment, setCellComment] = useState<string>("");
  const onSubmit = (data) => setCellComment(data.comment);
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCellClosed({
      color: cellColor,
      comment: cellComment,
      trackTitle: track.title,
      parameter: parameter,
    });
  };

  useEffect(() => {
    const initColor = () => {
      if (track.parameters) {
        track.parameters.forEach((cell) => {
          if (cell.parameter === parameter) {
            setCellColor(cell.colour);
          } else if (cell.comment && cell.parameter === parameter) {
            setCellComment(cell.comment);
          }
        });
      }
    };

    const initComment = () => {
      if (track.parameters) {
        track.parameters.forEach(
          (cell) =>
            cell.comment &&
            cell.parameter === parameter &&
            setCellComment(cell.comment)
        );
      }
    };

    initColor();
    initComment();
  }, [parameter, track.parameters]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHoverCell(undefined);
    }, 1000);
    return () => clearTimeout(timer);
  }, [toggleHovered, setHoverCell]);

  return (
    <>
      <Grid
        item
        sm={1}
        onClick={handleClick}
        onMouseEnter={() => setHoverCell(cell)}
        onMouseLeave={toggleHovered}
      >
        <Box
          onClick={() =>
            setCellOpen({
              color: cellColor,
              comment: cellComment,
              trackTitle: track.title,
              parameter: parameter,
            })
          }
          sx={{
            backgroundColor: cellColor,
            ...inline.cellSx.cell,
            boxShadow:
              // triggers cell hover effects
              (hoverCell && hoverCell.track === cell.track) ||
              (hoverCell && hoverCell.parameter === cell.parameter)
                ? `0 0 0.5vw 0.2vw rgb(243, 239, 224, 0.125)`
                : ``,
            transition:
              (hoverCell && hoverCell.track === cell.track) ||
              (hoverCell && hoverCell.parameter === cell.parameter)
                ? "box-shadow 0.025s linear"
                : "box-shadow 0.1s linear",
            ...(cellColor !== palette._grey && cellColor !== "transparent"
              ? cellComment !== "" && inline.cellSx.comment
              : cellComment !== "" && inline.cellSx.commentInverse),
            "&:hover": {
              backgroundColor: cellColor === palette._black && palette._grey,
              opacity: "0.6",
              cursor: "pointer",
            },
          }}
        ></Box>
      </Grid>
      <Popover
        sx={{
          backdropFilter: "blur(1.5px)",
          top: "1.6vw",
          left: "0.2vw",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <CellPopover
          cell={cell}
          cellComment={cellComment}
          handleClick={(color) => setCellColor(color)}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </Popover>
    </>
  );
};
