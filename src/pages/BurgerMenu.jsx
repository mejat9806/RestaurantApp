import BeefBurger from "../UI/BeefBurger";
import ChickenBurger from "../UI/ChickenBurger";
import useScroll from "../hooks/useScroll";

function BurgerMenu() {
  useScroll("menu/burger");
  return (
    <div className="flex flex-col justify-center text-center items-center mt-4  w-full">
      {" "}
      <div className="mb-5 flex flex-col items-center ">
        <h1 className="text-6xl font-extrabold mb-5 font-menu" id="menu/burger">
          Burger Menu
        </h1>
        <p className="w-[70%] sm:w-[700px] font-medium">
          indulge in a culinary delight with our Ultimate Fresh Burger, a
          masterpiece that elevates your burger experience to new heights.
          Crafted with passion and dedication, each bite promises a symphony of
          flavors that will tantalize your taste buds.{" "}
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-2 w-[100%] flex flex-col">
        <BeefBurger />
        <ChickenBurger />
      </div>
    </div>
  );
}

export default BurgerMenu;
