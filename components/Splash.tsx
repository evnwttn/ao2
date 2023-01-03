import React, { useState } from "react";
import { ThemeProvider, Box } from "@mui/material";
import { ModalButton, ModalBase } from "./index";
import { appTheme, inline } from "../styles/index";

export const Splash = () => {
  const [isActiveUser, setIsActiveUser] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [modalId, setModalId] = useState<string>("");

  const handleOpenModal = (id: string) => {
    setModalId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalId("");
    setIsModalOpen(false);
  };

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
