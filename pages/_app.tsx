import "../styles/styles.css";
import React from "react";
import { GridDataProvider } from "../components/contexts/gridDataContext";

export default function MyApp({ Component, pageProps }) {
  return (
    <GridDataProvider>
      <Component {...pageProps} />
    </GridDataProvider>
  );
}
