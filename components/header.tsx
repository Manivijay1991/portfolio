import React, { SetStateAction, useState,} from "react";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function Header() {

  return (

    <header className="z-[999] relative">
      <DesktopNav/>
      <MobileNav/>
    </header>
  );
}
