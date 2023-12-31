/* eslint-disable no-unused-vars */

import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

/* function SpecialItem({ children, text, img }) {
  return (
    <div className="w-full h-[50%] ">
      <div className="w-full text-center">
        <h2 className="font-extrabold whitespace-nowrap">{children}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
} */
function SpecialItem({ special }) {
  const navigate = useNavigate();
  return (
    <div className="sm:w-[50%] sm:h-[50%] flex justify-center my-5 ">
      <div className="w-[100%] text-center flex flex-col items-center sm:w-[300px] md:w-[600px] mx-10">
        <div className="flex justify-center ">
          <img
            src={special.img}
            className="sm:w-[100%] rounded-xl h-[300px] md:w-[100%] drop-shadow-2xl "
          />
        </div>
        <h2 className="font-extrabold whitespace-nowrap sm:text-3xl sm:my-6 my-3 text-2xl">
          {special.tittle}
        </h2>

        <p className="font-medium  ">{special.desc}</p>
        <Button design="button" onclick={() => navigate("/menu/special")}>
          Special Menu
        </Button>
      </div>
    </div>
  );
}

export default SpecialItem;
