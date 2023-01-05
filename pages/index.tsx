import React, { useEffect, useState } from "react";
import Head from "next/head";
import { Splash, Grid } from "../components";
import { Session } from "../types";

export default function Home() {
  const [gridData, setGridData] = useState<Session>();

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
        <Splash setGridData={setGridData} />
      )}
    </>
  );
}
