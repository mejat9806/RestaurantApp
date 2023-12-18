/* eslint-disable no-unused-vars */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="grid  p-5 shadow-md shadow-black/40 grid-cols-2 items-center">
      <Logo />
      <div className="justify-self-end ">
        <NavLink
          className={({ isActive }) =>
            `   ${
              isActive
                ? "sm:text-yellow-300 font-extrabold sm:bg-black sm:boxNav  text-yellow-300 "
                : ""
            } sm:boxNav boxNavSmall`
          }
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `   ${
              isActive
                ? "sm:text-yellow-300 font-extrabold sm:bg-black sm:boxNav  text-yellow-300 "
                : ""
            } sm:boxNav boxNavSmall`
          }
          to="/menu"
        >
          Menu
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `   ${
              isActive
                ? "sm:text-yellow-300 font-extrabold sm:bg-black sm:boxNav bg-black text-yellow-300 "
                : ""
            } sm:boxNav boxNavSmall`
          }
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `   ${
              isActive
                ? "sm:text-yellow-300 font-extrabold sm:bg-black sm:boxNav bg-black text-yellow-300 "
                : ""
            } sm:boxNav boxNavSmall`
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `   ${
              isActive
                ? "sm:text-yellow-300 font-extrabold sm:bg-black sm:boxNav bg-black text-yellow-300 "
                : ""
            }  bg-black rounded-lg text-yellow-300 text-2xl p-2 border-2 border-transparent hover:bg-yellow-300 hover:text-black hover:border-black hover:border-2 hover:font-extrabold`
          }
          to="/about"
        >
          Booking
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
