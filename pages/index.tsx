import Head from "next/head";
import { Splash } from "../components/index";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="theme-color" content="#272727" />
        <title>ao | album organizer</title>
      </Head>
      <Splash />
    </>
  );
}
