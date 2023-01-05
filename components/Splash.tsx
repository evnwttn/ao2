import React, { Dispatch, SetStateAction, useState } from "react";
import { ThemeProvider, Box } from "@mui/material";
import { ModalButton, ModalBase, MainLogo } from "./index";
import { appTheme, inline } from "../styles/index";
import { Session } from "../types";

interface SplashProps {
  isActiveUser: boolean;
  setIsActiveUser: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  modalId: string;
  setModalId: Dispatch<SetStateAction<string>>;
  handleOpenModal(id: string): any;
  handleCloseModal(): any;
  setGridData: Dispatch<SetStateAction<Session>>;
}

export const Splash = ({
  isActiveUser,
  setIsActiveUser,
  isModalOpen,
  modalId,
  setModalId,
  handleOpenModal,
  handleCloseModal,
  setGridData,
}: SplashProps) => {
  return (
    <Box sx={inline.homeSx.mainDiv}>
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
        <Box sx={inline.homeSx.cornerDiv}>
          <ModalButton
            buttonText={"About"}
            handleOpenModal={(id: string) => handleOpenModal(id)}
          />
          <ModalButton
            buttonText={"Contact"}
            handleOpenModal={(id: string) => handleOpenModal(id)}
          />
        </Box>
        <Box sx={inline.homeSx.centerDiv}>
          <MainLogo />
          <ModalButton
            buttonText={"New"}
            handleOpenModal={(id: string) => handleOpenModal(id)}
          />
          <ModalButton
            buttonText={"Load"}
            handleOpenModal={(id: string) => handleOpenModal(id)}
          />
        </Box>
      </ThemeProvider>
    </Box>
  );
};
