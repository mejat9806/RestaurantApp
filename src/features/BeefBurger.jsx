import { easeInOut, motion } from "framer-motion";
import MenuItem from "./MenuItem";
function BeefBurger() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, easings: easeInOut }}
      className=" items-center justify-center sm:w-full mx-auto flex flex-col"
    >
      <h1 className="font-menu sm:text-6xl font-extrabold sm:mb-5 text-6xl">
        BEEF
      </h1>
      <div className=" px-6">
        <section className="grid sm:grid-cols-1 w-[100%]  mx-auto gap-y-5 gap-x-1 items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center mb-11"
          >
            {" "}
            <MenuItem
              title="Normal Burger"
              imagesrc="/meat/burgerBeef.jpg"
              description="100g Beef patty ,brioche bun , Onions, Tomatoes, Pickles, Lettuce,
              Homemade Sauce and optional cheese"
              price={10}
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center mb-11"
          >
            {" "}
            <MenuItem
              title="Smash burger"
              imagesrc="/meat/smash_burger.jpg"
              description="2x100g Beef patty , Onions, Tomatoes, Pickles, Lettuce,brioche bun, Homemade
              Sauce and optional cheese"
              price={12}
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center mb-11"
          >
            <MenuItem
              title=" Roasted Beef brisket burger"
              imagesrc="/meat/brisket_burger.jpg"
              description=" 151g Roasted beef brisket meat,Toasted brioche buns,Sliced
              pickles,Onion,Secret barbeque sauce "
              price={28}
            />
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}

export default BeefBurger;
