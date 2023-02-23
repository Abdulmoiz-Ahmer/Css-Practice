import React from "react";
import { SideBarItems } from "@/components/SideBar/components";
import styles from "@/styles/SideBar.module.css";
import data from "./data/index.json";

export const SideBar = () => {
  return (
    <nav>
      <ul className={styles.sidebar}>
        {React.Children.toArray(
          data.map((element) => <SideBarItems item={element} />)
        )}
      </ul>
    </nav>
  );
};
