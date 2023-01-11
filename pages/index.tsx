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
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#272727" />
        <meta
          name="description"
          content="the visual album management toolkit designed to track & monitor progress, foster collaboration, & aid in the smashing of goals."
        />
        <title>ao | album organizer</title>

        <meta property="og:title" content="ao | album organizer" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.ibb.co/RQTq9q5/aoapp.png"
        />
        <meta property="og:url" content="https://ao-demo.vercel.app/" />
        <meta
          property="og:description"
          content="the visual album management toolkit designed to track & monitor progress, foster collaboration, & aid in the smashing of goals."
        />

        <link rel="icon" href="../public/imagesfavicon.ico" />
        <link rel="apple-touch-icon" href="../public/imageslogo192.png" />
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
