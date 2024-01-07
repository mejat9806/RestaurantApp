import { useData } from "../Data/useData";
import MenuItem from "../MenuItem";
import { easeInOut, motion } from "framer-motion";
import Spinner from "../Spinner";
import NoItemFound from "../../UI/NoItemFound";
function PizzaMenuItem() {
  const { productData, isLoading, error } = useData();

  if (isLoading) return <Spinner />;
  const PizzaData = productData.filter((pizza) => pizza.category === "pizza");
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  if (error) return <NoItemFound />;
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, easings: easeInOut }}
      className="flex flex-wrap justify-center gap-11"
    >
      {PizzaData.map((item) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex flex-col items-center mb-1"
          key={item.id}
        >
          <MenuItem
            title={item.name}
            imagesrc={item.imagesrc}
            description={item.description}
            price={item.price}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

export default PizzaMenuItem;
