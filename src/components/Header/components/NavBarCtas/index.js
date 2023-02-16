import React from "react";
import Image from "next/image";
import { NavBarCta } from "./components";
import { SvgLoader } from "@/components/common";

export const NavBarCtas = () => {
  return (
    <span>
      {/* <SvgLoader id="icon-1" /> */}
      <Image src="/account.svg" alt="account icon" width="21" height="21" />
      <NavBarCta text="Sign in" /> or <NavBarCta text="Register" />
    </span>
  );
};
