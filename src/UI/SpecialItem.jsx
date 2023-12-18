/* eslint-disable no-unused-vars */

import Button from "./Button";

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
  console.log(special);
  return (
    <div className="w-[100%] h-[50%] flex justify-center my-5">
      <div className="w-[50%] text-center flex flex-col items-center sm:w-[300px] md:w-[400px]">
        <div className="flex justify-center ">
          <img
            src={special.img}
            className="w-[500px] rounded-xl h-[300px] drop-shadow-2xl"
            loading="lazy"
          />
        </div>
        <h2 className="font-extrabold whitespace-nowrap text-3xl my-6">
          {special.tittle}
        </h2>

        <p className="font-medium  ">{special.desc}</p>
        <Button design="button">BBQ MENU</Button>
      </div>
    </div>
  );
}

export default SpecialItem;
