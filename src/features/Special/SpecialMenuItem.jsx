/* eslint-disable no-unused-vars */
import { useItems } from "../../context/contextItem";
import MenuItem from "../MenuItem";
import { easeInOut, motion } from "framer-motion";
import { useData } from "../Data/useData";
import Spinner from "../Spinner";
function SpecialMenuItem() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const { productData, isLoading } = useData();
  if (isLoading) return <Spinner />;
  const SpecialBeefs = productData.filter(
    (Special) => Special.category === "special_beef",
  );
  const SpecialSandwich = productData.filter(
    (Special) => Special.category === "special_sandwich",
  );
  return (
    <div className="sm:w-[80%] md:w-[90%] flex mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1, easings: easeInOut }}
        className="md:grid md:grid-cols-2 md:gap-10 flex flex-col "
      >
        <div className="flex  flex-col">
          <h1 className="sm:text-6xl font-extrabold sm:mb-5 text-4xl uppercase font-menu text-black my-8 sm:whitespace-nowrap md:whitespace-normal">
            Meat Special
          </h1>
          <div className="space-y-8 px-6">
            {SpecialBeefs.map((beef) => (
              <motion.div whileHover={{ scale: 1.05 }} key={beef.id}>
                <MenuItem
                  title={beef.name}
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
          <div className="space-y-8 px-6">
            {SpecialSandwich.map((sandwich) => (
              <motion.div key={sandwich.id} whileHover={{ scale: 1.05 }}>
                <MenuItem
                  title={sandwich.name}
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
