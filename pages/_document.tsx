import { Html, Head, Main, NextScript } from "next/document";
import { Splash } from "../components/index";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/nnr5nkk.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
