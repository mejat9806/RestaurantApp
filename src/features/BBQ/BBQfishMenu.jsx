/* eslint-disable no-unused-vars */
import { useItems } from "../../context/contextItem";
import { easeInOut, motion } from "framer-motion";

import BBQfishMenuItem from "./BBQfishMenuItem";
import { useData } from "../Data/useData";
import Spinner from "../Spinner";

function BBQfishMenu({ FishBBQ }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, easings: easeInOut }}
      className="mx-5 mb-3 py-2 shadow-xl shadow-black/30 bg-yellow-200/80 sm:w-[60%] lg:w-[100%] w-[100%] flex flex-col items-center justify-center lg:px-10"
    >
      <h1 className="sm:text-6xl font-extrabold sm:mb-5 text-4xl uppercase font-menu text-black">
        Fish
      </h1>
      <div className=" w-full py-6 ">
        <div className="flex justify-center mb-5 divide-x-4 divide-black">
          <p className=" font-semibold  w-[100%] text-2xl uppercase md:whitespace-nowrap ">
            SUCCULENT BBQ GRILLED FISH DELIGH
          </p>
        </div>

        {FishBBQ.map((item, i) => (
          <BBQfishMenuItem key={i} item={item} />
        ))}
      </div>
    </motion.div>
  );
}

export default BBQfishMenu;
{
  /* <div className="bg-black mx-5 mb-3 py-2 shadow-xl shadow-black/30 ">
<h1 className="sm:text-6xl font-extrabold sm:mb-5 text-4xl uppercase font-menu text-yellow-300">
  {title}
</h1>
<div className="bg-yellow-200  w-[500px] py-4 ">
  <div className="flex justify-center mb-5 divide-x-4 divide-black">
    <p className=" font-semibold  w-[80%] text-2xl uppercase">{desc}</p>
  </div>

  {items.map((item, i) => (
    <BBQfishMenuItem key={i} item={item} />
  ))}
</div>
</div> */
}
