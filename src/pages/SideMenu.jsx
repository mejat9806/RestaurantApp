import { useItems } from "../context/contextItem";
import { easeInOut, motion } from "framer-motion";
import MenuItem from "../features/MenuItem";
function SideMenu() {
  const {
    Sides: { items: sideMenuItems },
  } = useItems();
  console.log(sideMenuItems);
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="sm:w-[80%] md:w-[100%] flex mx-auto">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1, easings: easeInOut }}
        className="flex"
      >
        <div className="">
          <h1 className="sm:text-6xl font-extrabold sm:mb-5 text-4xl uppercase font-menu text-black my-8 sm:whitespace-nowrap md:whitespace-normal"></h1>
          <div className="grid grid-cols-2 gap-10">
            {sideMenuItems.map((side) => (
              <motion.div whileHover={{ scale: 1.05 }} key={side.title}>
                <MenuItem
                  title={side.title}
                  description={side.description}
                  imagesrc={side.imagesrc}
                  price={side.price}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SideMenu;
