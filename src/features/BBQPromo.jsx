import { useState } from "react";
import PromoPizzaSVG from "./PromoBBQSVG";
import { useNavigate } from "react-router-dom";

function BBQPromo({ data }) {
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
          onClick={() => navigate("/menu/barbeque")}
          className={`bg-transparent sm:text-xl text-sm sm:p-1 md:text-2xl md:p-3  box-content  transition-all duration-500  absolute    border-yellow-400 border-2 hover:border-yellow-300 hover:bg-black bg-yellow-300 hover:text-yellow-300 ${
            onblur
              ? "bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100"
              : "-bottom-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0"
          }`}
        >
          {data.button}
        </button>
      </div>
    </div>
  );
}

export default BBQPromo;
