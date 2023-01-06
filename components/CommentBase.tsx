import React from "react";
import { Modal } from "@mui/material";
import { CommentModal } from "./CommentModal";

export const CommentBase = ({
  cell,
  cellComment,
  open,
  handleClose,
  register,
  handleSubmit,
  onSubmit,
}: any) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <CommentModal
          cell={cell}
          cellComment={cellComment}
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      </>
    </Modal>
  );
};
