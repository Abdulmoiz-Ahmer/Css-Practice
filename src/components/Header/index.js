import React from "react";
import { useVisibility } from "@/common";
import Image from "next/image";
import { NavBarCtas, NavBar } from "@/components/Header/components";
import styles from "@/styles/Header.module.css";

export const Header = () => {
  const [visibility, toggleVisibility] = useVisibility(false);

  return (
    <header className={styles.header}>
      <button
        className={styles["mobile-nav-toggle"]}
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={toggleVisibility}
      >
        <div className={styles.bar1}></div>
        <div className={styles.bar2}></div>
        <div className={styles.bar3}></div>
      </button>
      <Image src="/logo.svg" alt="account icon" width="203" height="81" />
      <div className={styles.navigation} data-visible={visibility}>
        <NavBar />
        <NavBarCtas />
      </div>
    </header>
  );
};
