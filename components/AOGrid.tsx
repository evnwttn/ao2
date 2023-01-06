import React, {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { useForm } from "react-hook-form";
import { Box, Grid, ThemeProvider } from "@mui/material/";
import { inline, appTheme } from "../styles";
import { ModalBase, Nav, Cell } from "./index";
import { Session } from "../types";

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

export const AOGrid = ({
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
