import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div className=" mt-8 ">
      <ul className="flex space-x-7">
        <li>
          <NavLink
            to="burger"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-black text-yellow-300 "
                  : "bg-yellow-300 text-black"
              } text-2xl border-2 border-transparent px-2 py-1 font-semibold`
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
              } text-2xl border-2 border-transparent px-2 py-1 font-semibold`
            }
            to="pizza"
          >
            Pizza
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
