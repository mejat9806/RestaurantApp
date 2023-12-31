import { useState } from "react";
import Promo from "./PromoBurgerSVG";

/* eslint-disable no-unused-vars */
function PictureAndButton() {
  const [onblur, setOnBlur] = useState(false);

  return (
    <div
      className={`sm:grid sm:grid-cols-2 flex flex-col bg-black overflow-hidden 
    `}
      onMouseEnter={() => setOnBlur(true)}
      onMouseLeave={() => setOnBlur(false)}
    >
      <Promo video={video} image={image} desc="dsdsds" item="Pizza">
        Pizza
      </Promo>
      <div className="relative ">
        <img
          src="/public/burger1.jpg"
          className={`w-full  ${
            onblur ? "blur scale-100 " : ""
          } transition-all duration-300`}
        />
        <button
          className={`bg-yellow-300 text-2xl  p-4 box-content  transition-all duration-500 rounded-2xl absolute  hover:font-semibold hover:text-3xl ${
            onblur ? "bottom-8 left-[35%] " : "-bottom-28 left-[35%] "
          }`}
        >
          Pizza Menu
        </button>
      </div>
    </div>
  );
}

export default PictureAndButton;
