import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "@mui/material";
import { ModalContent } from "./index";

interface ModalBaseProps {
  modalId: string;
  isModalOpen: boolean;
  isActiveUser: boolean;
  handleCloseModal(): any;
  setModalId: Dispatch<SetStateAction<string>>;
  setIsActiveUser: Dispatch<SetStateAction<boolean>>;
}

export const ModalBase = ({
  modalId,
  isActiveUser,
  isModalOpen,
  handleCloseModal,
  setModalId,
  setIsActiveUser,
}: ModalBaseProps) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      sx={{ backdropFilter: "blur(1.5px)" }}
    >
      <>
        <ModalContent
          modalId={modalId}
          isActiveUser={isActiveUser}
          setModalId={setModalId}
          setIsActiveUser={setIsActiveUser}
        />
      </>
    </Modal>
  );
};
