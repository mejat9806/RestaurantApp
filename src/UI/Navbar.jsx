/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Nav from "./Nav";

function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center shadow-2xl">
        <Logo />
        <Nav />
      </nav>
    </div>
  );
}

export default Navbar;
