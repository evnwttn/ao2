import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "@mui/material";
// import { ModalText } from "./index";

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
        {`${modalId}`}
        {/* <ModalText
          prompt={text}
          activeUser={activeUser}
          setActiveUser={setActiveUser}
          setModalType={setModalType}
        /> */}
      </>
    </Modal>
  );
};
