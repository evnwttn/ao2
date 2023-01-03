import React from "react";
import { Button } from "@mui/material";

interface ModalButtonProps {
  buttonText: string;
  handleOpenModal(id: string): any;
}

export const ModalButton = ({
  buttonText,
  handleOpenModal,
}: ModalButtonProps) => {
  return (
    <Button
      disableRipple
      key={buttonText}
      onClick={() => handleOpenModal(buttonText)}
      variant="text"
      color={
        buttonText === "New"
          ? "primary"
          : buttonText === "Load"
          ? "secondary"
          : "inherit"
      }
    >
      {buttonText}
    </Button>
  );
};
