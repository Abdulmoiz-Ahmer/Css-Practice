import React from "react";
import Image from "next/image";
import { NavBarCtas, NavBar } from "@/components/Header/components";
import styles from "@/styles/Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" alt="account icon" width="203" height="81" />
      <div className={styles.navigation}>
        <NavBar />
        <NavBarCtas />
      </div>
    </header>
  );
};
