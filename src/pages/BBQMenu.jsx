import BBQBeefMenu from "../features/BBQ/BBQBeefMenu";
import BBQChickenMenu from "../features/BBQ/BBQChickenMenu";
import BBQfishMenu from "../features/BBQ/BBQfishMenu";
import { easeInOut, motion } from "framer-motion";
import useScroll from "../hooks/useScroll";

function BBQMenu() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  useScroll("gotoMenu");
  return (
    <div
      className="flex flex-col justify-center text-center items-center mt-4  w-full h-full mb-20 "
      id="menu/barbeque"
    >
      <div className="mb-5 flex flex-col items-center ">
        <h1 className="text-6xl font-extrabold mb-5 font-menu uppercase">
          Barbeque Menu
        </h1>
        <p className="w-[70%] sm:w-[700px] font-medium">
          Explore BBQ excellence with our Smoked Delight — a symphony of flavors
          meticulously crafted for an elevated experience. Passionately smoked,
          each bite promises a tantalizing blend of premium ingredients and
          rich, smoky essence, ensuring an unforgettable journey for your taste
          buds
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-2  flex-col  gap-7 justify-center w-[100%] ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1, easings: easeInOut }}
          className="flex lg:justify-end justify-center mb-7"
        >
          <BBQBeefMenu />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1, easings: easeInOut, delay: 0.2 }}
          className="flex lg:justify-start justify-center mb-7"
        >
          <BBQChickenMenu />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1, easings: easeInOut, delay: 0.4 }}
          className="lg:col-span-2 lg:mx-auto flex justify-center mb-7"
        >
          <BBQfishMenu />
        </motion.div>
      </div>
    </div>
  );
}

export default BBQMenu;
