import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className="">
      <ul className="flex sm:space-x-7  mt-10  mx-1">
        <li>
          <NavLink
            to="barbeque"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-black text-yellow-300 "
                  : "bg-yellow-300 text-black"
              } text-2xl border-2 border-black px-2 py-1 font-semibold`
            }
          >
            Barbeque
          </NavLink>
        </li>
        <li>
          <NavLink
            to="burger"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-black text-yellow-300 "
                  : "bg-yellow-300 text-black"
              } text-2xl border-2 border-black px-2 py-1 font-semibold`
            }
          >
            Burger
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-black text-yellow-300 "
                  : "bg-yellow-300 text-black"
              } text-2xl border-2 border-black px-2 py-1 font-semibold`
            }
            to="pizza"
          >
            Pizza
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-black text-yellow-300 "
                  : "bg-yellow-300 text-black"
              } text-2xl border-2 border-black px-2 py-1 font-semibold`
            }
            to="special"
          >
            Special{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-black text-yellow-300 "
                  : "bg-yellow-300 text-black"
              } text-2xl border-2 border-black px-2 py-1 font-semibold`
            }
            to="drink"
          >
            Drink
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
