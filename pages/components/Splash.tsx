import React, { useState } from "react";

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

  return <>Big Test</>;
};
