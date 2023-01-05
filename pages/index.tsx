import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Splash, Grid } from "../components";
import { Session } from "../types";

export default function Home() {
  const [gridData, setGridData] = useState<Session>();
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
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#272727" />
        <title>ao | album organizer</title>
      </Head>
      {gridData ? (
        <Grid gridData={gridData} />
      ) : (
        <Splash
          isActiveUser={isActiveUser}
          setIsActiveUser={setIsActiveUser}
          isModalOpen={isModalOpen}
          modalId={modalId}
          setModalId={setModalId}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
          setGridData={setGridData}
        />
      )}
    </>
  );
}
