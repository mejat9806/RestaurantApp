/* eslint-disable no-unused-vars */
import { easeInOut, motion } from "framer-motion";
import BBQBeefMenuItem from "./BBQBeefMenuItem";

function BBQBeefMenu({ BeefBBQ = [] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5, easings: easeInOut }}
      className="mx-5 mb-3 py-2 shadow-xl shadow-black/30 bg-yellow-200/80 md:w-[70%] flex flex-col items-center justify-center"
    >
      <h1 className="sm:text-6xl font-extrabold sm:mb-5 text-4xl uppercase font-menu text-black">
        Beef
      </h1>
      <div className=" w-full  py-4 ">
        <div className="flex justify-center mb-5 ">
          {" "}
          <p className=" font-semibold  w-[80%] text-2xl uppercase">
            Smoked daily,all served with bread and vegetable.all sold by 100g
          </p>
        </div>
        {BeefBBQ.map((item, i) => (
          <BBQBeefMenuItem key={i} item={item} />
        ))}{" "}
      </div>
    </motion.div>
  );
}

export default BBQBeefMenu;
