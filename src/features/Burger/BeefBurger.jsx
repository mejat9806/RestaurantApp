import { easeInOut, motion } from "framer-motion";
import MenuItem from "../MenuItem";
import { useData } from "../Data/useData";
import Spinner from "../Spinner";
function BeefBurger() {
  const { productData, isLoading } = useData();
  if (isLoading) return <Spinner />;
  const BeefBurgers = productData.filter(
    (BeefBurger) => BeefBurger.category === "burger_beef",
  );

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
          {BeefBurgers.map((item) => (
            <motion.div key={item.id}>
              <MenuItem
                title={item.name}
                imagesrc={item.imagesrc}
                description={item.description}
                price={item.price}
              />
            </motion.div>
          ))}
        </section>
      </div>
    </motion.div>
  );
}

export default BeefBurger;
