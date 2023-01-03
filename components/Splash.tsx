import React, { useState, useEffect } from "react";
import { ThemeProvider, Box } from "@mui/material";
import { appTheme } from "../styles/index";

export const Splash = () => {
  const [isActiveUser, setIsActiveUser] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [modalId, setModalId] = useState<string>("");

  const handleOpenModal = (id: string) => {
    setModalId(id);
  };

  const handleClose = () => {
    setModalId("");
    setIsModalOpen(false);
  };

  return (
    <Box>
      <ThemeProvider theme={appTheme}></ThemeProvider>
    </Box>
  );
};
