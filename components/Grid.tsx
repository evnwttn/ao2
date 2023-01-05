import React, { Dispatch, SetStateAction } from "react";
import { ThemeProvider, Box } from "@mui/material";
import { ModalBase, Nav } from "./index";
import { Session } from "../types";
import { appTheme, inline } from "../styles";

interface GridProps {
  gridData: Session;
  setGridData: Dispatch<SetStateAction<Session>>;
  isActiveUser: boolean;
  setIsActiveUser: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  modalId: string;
  setModalId: Dispatch<SetStateAction<string>>;
  handleOpenModal(id: string): any;
  handleCloseModal(): any;
}

export const Grid = ({
  gridData,
  setGridData,
  isActiveUser,
  setIsActiveUser,
  isModalOpen,
  modalId,
  setModalId,
  handleOpenModal,
  handleCloseModal,
}: GridProps) => {
  return (
    <Box sx={inline.gridSx.container}>
      <ThemeProvider theme={appTheme}>
        <ModalBase
          modalId={modalId}
          isActiveUser={isActiveUser}
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          setModalId={setModalId}
          setIsActiveUser={setIsActiveUser}
          setGridData={setGridData}
        />
        <Nav gridData={gridData} handleOpenModal={handleOpenModal} />
        <Box sx={inline.gridSx.dom}></Box>
      </ThemeProvider>
    </Box>
  );
};

// <Box sx={gridSx.container}>
//   <ModalBase
//     open={open}
//     handleClose={handleClose}
//     text={modalType}
//     setModalType={setModalType}
//   />
//   <ThemeProvider theme={aotheme}>
// <Nav gridData={gridData} setModalType={setModalType} />
//     <Box sx={gridSx.dom}>
//       </Box>
