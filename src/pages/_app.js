import "@/styles/globals.css";
import { LayOut } from "@/components";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </React.Fragment>
  );
}
