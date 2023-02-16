import React from "react";
import { useNavBar } from "@/components/Header/useNavBar";
import styles from "@/styles/NavBar.module.css";

export const NavBar = () => {
  const navElements = useNavBar();
  return (
    <React.Fragment>
      <button
        className={styles["mobile-nav-toggle"]}
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
        <div class={styles.bar1}></div>
        <div class={styles.bar2}></div>
        <div class={styles.bar3}></div>
      </button>

      <nav className={styles["primary-navigation__container"]}>
        <ul className={styles["primary-navigation"]}>
          {React.Children.toArray(
            navElements?.map((listItem) => {
              return (
                <li className={styles["primary-navigation__item"]}>
                  {listItem}
                </li>
              );
            })
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
};
