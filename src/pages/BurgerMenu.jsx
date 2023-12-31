import BeefBurger from "../features/BeefBurger";
import ChickenBurger from "../features/ChickenBurger";
import useScroll from "../hooks/useScroll";

function BurgerMenu() {
  useScroll("gotoMenu");

  return (
    <div className="flex flex-col justify-center text-center items-center mt-4 mx-6">
      <div className="mb-5 flex flex-col items-center ">
        <h1 className="text-6xl font-extrabold mb-5 font-menu uppercase">
          Burger Menu
        </h1>
        <p className="w-[70%] sm:w-[700px] font-medium">
          Indulge in a culinary delight with our Ultimate Fresh Burger, a
          masterpiece that elevates your burger experience to new heights.
          Crafted with passion and dedication, each bite promises a symphony of
          flavors that will tantalize your taste buds.{" "}
        </p>
      </div>
      <div className="sm:grid sm:grid-cols-1 w-full flex flex-col mb-40 mx-4 md:grid-cols-2">
        <BeefBurger />

        <ChickenBurger />
      </div>
    </div>
  );
}

export default BurgerMenu;
