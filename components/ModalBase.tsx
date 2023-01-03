import React, { Dispatch, SetStateAction } from "react";
import { Modal } from "@mui/material";
// import { ModalText } from "./index";

interface ModalBaseProps {
  isModalOpen: boolean;
  handleCloseModal(): any;
  modalId: string;
  setModalId: Dispatch<SetStateAction<string>>;
  //   activeUser: any;
  //   setActiveUser: any;
}

export const ModalBase = ({
  isModalOpen,
  handleCloseModal,
  modalId,
  setModalId,
}: ModalBaseProps) => {
  return (
    <Modal
      open={isModalOpen}
      onClose={handleCloseModal}
      sx={{ backdropFilter: "blur(1.5px)" }}
    >
      <>
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
