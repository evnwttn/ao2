import { useState } from "react";
import { Session } from "../types";
import "../styles/styles.css";

export default function MyApp({ Component, pageProps }) {
  const [gridData, setGridData] = useState<Session>();

  return (
    <Component {...pageProps} dataTest={gridData} setDataTest={setGridData} />
  );
}
