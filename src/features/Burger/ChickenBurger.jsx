import MenuItem from "../MenuItem";
import { easeInOut, motion } from "framer-motion";

function ChickenBurger() {
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
      className="flex flex-col  mt-9 sm:mt-0 items-center"
    >
      <h1 className="font-menu sm:text-6xl font-extrabold sm:mb-5 text-6xl ">
        Chicken
      </h1>
      <div className="">
        <section className="flex flex-col mx-auto gap-y-16 gap-x-1 items-center ">
          <motion.div whileHover={{ scale: 1.05 }}>
            <MenuItem
              type="chicken"
              title="Normal Chicken Burger"
              imagesrc="/meat/chickenburger.jpg"
              imageSmall="/meat/chickenburger-small.jpg"
              description="Breaded chicken with our homemade seasoning  flour,Brioche bun, special ranch sauce,pickle,lettuce"
              style="menuItemChicken"
            />
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <MenuItem
              type="chicken"
              title=" Spicy Chicken Burger"
              imagesrc="/meat/spicy-chicken-burger.jpg"
              imageSmall="/meat/spicy-chicken-burger-small.jpg"
              description="breaded chicken with our homemade seasoning  flour,Brioche bun, special hot spicy sauce,pickle"
            />
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}

export default ChickenBurger;
