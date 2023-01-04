import { useState } from "react";
import "../styles/styles.css";

export default function MyApp({ Component, pageProps }) {
  const [dataTest, setDataTest] = useState<any>("yo");

  return (
    <Component {...pageProps} dataTest={dataTest} setDataTest={setDataTest} />
  );
}
