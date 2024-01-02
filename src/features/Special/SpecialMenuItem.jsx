/* eslint-disable no-unused-vars */
import { useItems } from "../../context/contextItem";
import MenuItem from "../MenuItem";
import { easeInOut, motion } from "framer-motion";
function SpecialMenuItem() {
  const { SpecialItems } = useItems();
  const {
    Sandwich: { item: SandWichSpecialItem },
  } = SpecialItems[0];
  const {
    Beef: { item: BeefSpecialItem },
  } = SpecialItems[1];
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="sm:w-[80%] md:w-[90%] flex mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1, easings: easeInOut }}
        className="md:grid md:grid-cols-2 md:gap-10 flex flex-col "
      >
        <div className="">
          <h1 className="sm:text-6xl font-extrabold sm:mb-5 text-4xl uppercase font-menu text-black my-8 sm:whitespace-nowrap md:whitespace-normal">
            Meat Special
          </h1>
          <div className="space-y-8 ">
            {BeefSpecialItem.map((beef, i) => (
              <motion.div whileHover={{ scale: 1.05 }} key={beef.title}>
                <MenuItem
                  title={beef.title}
                  imagesrc={beef.imagesrc}
                  description={beef.description}
                  price={beef.price}
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="sm:text-6xl font-extrabold md:mb-20 text-5xl uppercase font-menu text-black mt-8 ">
            Sandwich
          </h1>
          <div className="space-y-8">
            {SandWichSpecialItem.map((sandwich) => (
              <motion.div key={sandwich.title} whileHover={{ scale: 1.05 }}>
                <MenuItem
                  title={sandwich.title}
                  imagesrc={sandwich.imagesrc}
                  description={sandwich.description}
                  price={sandwich.price}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SpecialMenuItem;
