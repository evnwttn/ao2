import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Splash, AOGrid } from "../components";
import { Session } from "../types";

export default function Home() {
  const [gridData, setGridData] = useState<Session>();
  const [isActiveUser, setIsActiveUser] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const [modalId, setModalId] = useState<string>("About");

  const handleOpenModal = (id: string) => {
    setModalId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalId("");
    setIsModalOpen(false);
  };

  useEffect(() => {
    gridData && handleCloseModal();
  }, [gridData]);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#272727" />

        <meta property="og:title" content="ao | album organizer" key="title" />
        <meta
          property="og:image"
          content="https://i.ibb.co/VwJ5V9s/Screenshot-129.png"
          key="image"
        />
        <meta
          property="og:description"
          content="an album organizational toolkit"
          key="description"
        />
        <meta
          property="og:url"
          content="https://ao-demo.vercel.app/"
          key="url"
        />

        <title>ao | album organizer</title>
      </Head>
      {gridData ? (
        <AOGrid
          gridData={gridData}
          setGridData={setGridData}
          isActiveUser={isActiveUser}
          setIsActiveUser={setIsActiveUser}
          isModalOpen={isModalOpen}
          modalId={modalId}
          setModalId={setModalId}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
      ) : (
        <Splash
          setGridData={setGridData}
          isActiveUser={isActiveUser}
          setIsActiveUser={setIsActiveUser}
          isModalOpen={isModalOpen}
          modalId={modalId}
          setModalId={setModalId}
          handleOpenModal={handleOpenModal}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}
