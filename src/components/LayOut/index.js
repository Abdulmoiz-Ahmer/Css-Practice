import React from "react";
import { Header, SideBar, MainContent } from "@/components";
import styles from "@/styles/LayOut.module.css";
function index() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <SideBar />
        <MainContent />
      </main>
    </>
  );
}

export const LayOut = index;
