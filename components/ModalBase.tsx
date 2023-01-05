import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "@mui/material";
import { ModalContent } from "./index";
import { Session } from "../types";

interface ModalBaseProps {
  modalId: string;
  isModalOpen: boolean;
  isActiveUser: boolean;
  handleCloseModal(): any;
  setModalId: Dispatch<SetStateAction<string>>;
  setIsActiveUser: Dispatch<SetStateAction<boolean>>;
  setGridData: Dispatch<SetStateAction<Session>>;
}

export const ModalBase = ({
  modalId,
  isActiveUser,
  isModalOpen,
  handleCloseModal,
  setModalId,
  setIsActiveUser,
  setGridData,
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
          handleCloseModal={handleCloseModal}
          setGridData={setGridData}
        />
      </>
    </Modal>
  );
};
