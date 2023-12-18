import { useState } from "react";
import PromoPizzaSVG from "./PromoPizzaSVG";
import { useNavigate } from "react-router-dom";

function PizzaPromo({ data }) {
  const [onblur, setOnBlur] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={`sm:grid sm:grid-cols-2 flex flex-col-re bg-black overflow-hidden 
    `}
      onMouseEnter={() => setOnBlur(true)}
      onMouseLeave={() => setOnBlur(false)}
    >
      <PromoPizzaSVG dataPizza={data} />
      <div className="relative ">
        <img
          src={data.image}
          className={`w-full  ${
            onblur ? "blur scale-100 " : ""
          } transition-all duration-300`}
        />
        <button
          onClick={() => navigate("/menu/PizzaMenu")}
          className={`bg-transparent text-2xl  p-4 box-content  transition-all duration-500 rounded-xl absolute    border-yellow-400 border-2 hover:border-yellow-300 hover:bg-black bg-yellow-300 hover:text-yellow-300 ${
            onblur
              ? "bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              : "-bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
          }`}
        >
          {data.button}
        </button>
      </div>
    </div>
  );
}

export default PizzaPromo;
