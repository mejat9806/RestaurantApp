import { easeInOut, motion } from "framer-motion";
import MenuItem from "../MenuItem";
import Spinner from "../Spinner";
import { useData } from "../Data/useData";
import NoItemFound from "../../UI/NoItemFound";
import useScroll from "../../hooks/useScroll";
function SideMenu() {
  useScroll("gotoMenu");

  const { productData, isLoading, error } = useData();
  if (isLoading) return <Spinner />;
  const Side = productData.filter((item) => item.category === "sides");

  if (error) return <NoItemFound />;
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
          <div className="md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 flex flex-col">
            {Side.map((side) => (
              <motion.div whileHover={{ scale: 1.05 }} key={side.title}>
                <MenuItem
                  title={side.name}
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
