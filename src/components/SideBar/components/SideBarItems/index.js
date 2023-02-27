import React from "react";
import styles from "@/styles/SideBar.module.css";
import Link from "next/link";
import { useWindowSize } from "@/common";

function decide(item, width) {
  if (
    (item.element.toLowerCase() === "lp" && width > 875) ||
    (item.element.toLowerCase() === "gp" && width > 875)
  ) {
    return (
      <li className={`${styles["sidebar-item"]}`}>
        <span className={styles["sidebar-item-parent"]}>{item.element}</span>
      </li>
    );
  } else if (
    (item.element.toLowerCase() === "lp" && width < 875) ||
    (item.element.toLowerCase() === "gp" && width < 875)
  )
    return;

  if (
    item.element.toLowerCase() !== "lp" &&
    width > 875 &&
    item.element.toLowerCase() !== "gp" &&
    width > 875
  ) {
    return (
      <li className={`${styles["sidebar-item"]}`}>
        <Link href="/#" className={styles["sidebar-item-link"]}>
          {item.element}
        </Link>
      </li>
    );
  } else {
    return (
      <Link href="/#" className={styles["sidebar-item-link"]}>
        {item?.parent ? `${item.element} (${item.parent})` : item.element}
      </Link>
    );
  }

  return;
}

export const SideBarItems = ({ item }) => {
  const size = useWindowSize();
  return <>{decide(item, size.width)}</>;
};
