import React from "react";
import styles from "@/styles/SideBar.module.css";

export const SideBarItems = ({ item }) => {
  return <li className={styles["sidebar-item"]}>{item}</li>;
};
