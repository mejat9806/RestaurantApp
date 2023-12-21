/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";

function NavLinks(isOpen) {
  console.log(isOpen);
  return (
    <div
      className={`mt-10 flex items-center  sm:flex-col  md:flex-row md:justify-between gap-28 md:gap-0`}
    >
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
          }  bg-yellow-300  text-black text-2xl p-2 border-2 border-black hover:bg-black hover:text-yellow-300 hover:border-black hover:border-2 hover:font-extrabold transition-all duration-300 font-black`
        }
        to="/booking"
      >
        Booking
      </NavLink>
    </div>
  );
}

export default NavLinks;
