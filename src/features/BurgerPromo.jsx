/* eslint-disable no-unused-vars */
import { useState } from "react";
import PromoBurgerSVG from "./PromoBurgerSVG";
import { useNavigate } from "react-router-dom";

function BurgerPromo({ data }) {
  const [onblur, setOnBlur] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`sm:grid sm:grid-cols-2 flex flex-col bg-black overflow-hidden  h-[50%]
  `}
      onMouseEnter={() => setOnBlur(true)}
      onMouseLeave={() => setOnBlur(false)}
    >
      <div className="relative ">
        <img
          src={data.image}
          className={`w-full  ${
            onblur ? "blur scale-100 " : ""
          } transition-all duration-300`}
        />
        <button
          onClick={() => navigate("menu/burger")}
          className={`bg-transparent sm:text-xl  text-sm sm:p-1 md:text-2xl md:p-3  box-content  transition-all duration-500  absolute    border-yellow-400 border-2 hover:border-yellow-300 hover:bg-black bg-yellow-300 hover:text-yellow-300 ${
            onblur
              ? "bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100"
              : "-bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 "
          }`}
        >
          {data.button}
        </button>
      </div>
      <PromoBurgerSVG dataBurger={data} />
    </div>
  );
}

export default BurgerPromo;
