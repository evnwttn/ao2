import React, { useState } from "react";
import Head from "next/head";
import { Splash, Grid } from "../components";

export default function Home() {
  const [gridToggle, setGridToggle] = useState<boolean>(false);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#272727" />
        <title>ao | album organizer</title>
      </Head>
      {gridToggle ? <Grid /> : <Splash setGridToggle={setGridToggle} />}
    </>
  );
}
