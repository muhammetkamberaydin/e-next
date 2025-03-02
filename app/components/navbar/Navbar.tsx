import React from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Search from "./Search";
import User from "./User";
import CardCount from "./CardCount";
import { ToggleMode } from "./ToggleMode";

const Navbar = () => {
  return (
    <div className="flex gap-4 items-center justify-between md:gap-10 px-3 md:px-10 h-16 bg-foreground text-white">
      <Logo />
      <Search />
      <div className="flex gap-4 items-center">
        <CardCount />
        <User />
        <ToggleMode />
      </div>
      <Hamburger />
    </div>
  );
};

export default Navbar;
