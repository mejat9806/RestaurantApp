/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";

function NavLinks({ isOpen, setIsOpen }) {
  return (
    <div
      className={`mt-10 flex items-center justify-between  sm:flex-col space-x-7 md:flex-row md:justify-between gap-28 md:gap-0 ${
        isOpen ? "flex-col" : "flex-row"
      }`}
    >
      <NavLink
        end
        className={({ isActive }) =>
          `   ${
            isActive
              ? "sm:text-yellow-300 font-extrabold sm:bg-black sm:boxNav  text-yellow-200 bg-black"
              : ""
          } sm:boxNav boxNavSmall`
        }
        to="/menu"
        onClick={() => setIsOpen(false)}
      >
        Menu
      </NavLink>
      {/*   <NavLink
        className={({ isActive }) =>
          `   ${
            isActive
              ? "sm:text-yellow-300 font-extrabold sm:bg-black sm:boxNav bg-black text-yellow-200 "
              : ""
          } sm:boxNav boxNavSmall`
        }
        to="/about"
        onClick={() => setIsOpen(false)}
      >
        About
      </NavLink> */}
      <NavLink
        className={({ isActive }) =>
          `   ${
            isActive
              ? "sm:text-yellow-300 font-extrabold sm:bg-black sm:boxNav bg-black text-yellow-200 "
              : ""
          } sm:boxNav boxNavSmall`
        }
        to="/contact"
        onClick={() => setIsOpen(false)}
      >
        Contact
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
        onClick={() => setIsOpen(false)}
      >
        Booking
      </NavLink>
    </div>
  );
}

export default NavLinks;
