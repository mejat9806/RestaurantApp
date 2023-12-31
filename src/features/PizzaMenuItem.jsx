import MenuItem from "./MenuItem";
import { easeInOut, motion } from "framer-motion";
function PizzaMenuItem() {
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
      className="flex flex-wrap justify-center gap-11"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center mb-11"
      >
        <MenuItem
          title="Classic BBQ Delight Pizza"
          imagesrc="/meat/pizza_bbq.jpg"
          description="Hand stretch pizza with tomato sauce and Parmesan Cheese, topping with fresh barbecue meat and homemade barbecue sauce with fresh arugula"
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center mb-11"
      >
        <MenuItem
          title="Beef Pepperoni"
          imagesrc="/meat/pepperoni_pizza.jpg"
          description="Pizza topping with tomato sauce and Parmesan Cheese, topping with beef pepperoni"
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center mb-11"
      >
        <MenuItem
          title="BBQ Chicken Pizza"
          imagesrc="/meat/bbq-chicken-pizza-1-1200x675.jpg"
          description="Pizza topping with Barbecue chicken, Tomato sauce, Smoked Cheddar, mozzarella cheese and red onion"
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center mb-11"
      >
        <MenuItem
          title="White Pizza"
          imagesrc="/meat/white_pizza2.jpg"
          description="Made with 3 different cheeses and drizzled with extra-virgin olive oil, and a lot of garlic"
        />
      </motion.div>
    </motion.div>
  );
}

export default PizzaMenuItem;
