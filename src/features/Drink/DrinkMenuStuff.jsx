import { useData } from "../Data/useData";
import Spinner from "../Spinner";
import NoItemFound from "../../UI/NoItemFound";
import DrinkList from "./DrinkList";
import useScroll from "../../hooks/useScroll";

function DrinkMenuStuff() {
  useScroll("gotoMenu");

  const { productData, isLoading, error } = useData();
  if (isLoading) return <Spinner />;
  const Drinks = productData.filter((item) => item.category === "drink");
  console.log(Drinks);
  if (error) return <NoItemFound />;
  console.log(Drinks);
  return (
    <div className="mx-5 mb-3 py-2 shadow-xl shadow-black/30 bg-yellow-200/80 w-[90%]  flex flex-col items-center justify-center">
      <div className="w-full flex gap-4 ">
        <div className="flex justify-between w-full border-b-4 border-black mx-3">
          <h1 className=" font-menu font-extrabold text-4xl">Name</h1>
          <h1 className="pl-8 font-menu font-extrabold text-4xl">Price</h1>
        </div>
        <div className="sm:flex justify-between w-full sm:border-b-4 sm:border-black mx-3 hidden ">
          <h1 className=" font-menu font-extrabold text-4xl">Name</h1>
          <h1 className="pl-8 font-menu font-extrabold text-4xl">Price</h1>
        </div>
      </div>
      <div className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 ">
        {Drinks.map((drink) => (
          <DrinkList key={drink.id} drink={drink} />
        ))}
      </div>
    </div>
  );
}

export default DrinkMenuStuff;
