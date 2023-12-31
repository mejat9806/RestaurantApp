/* eslint-disable react/no-unescaped-entities */
import PizzaMenuItem from "../features/PizzaMenuItem";
import useScroll from "../hooks/useScroll";

function PizzaMenu() {
  useScroll("gotoMenu");
  return (
    <div className="flex flex-col justify-center text-center items-center mt-4  w-full ">
      {" "}
      <div className="mb-5 flex flex-col items-center ">
        <h1 className="text-6xl font-extrabold mb-5 font-menu" id="menu/pizza">
          Pizza Menu
        </h1>
        <p className="w-[70%] sm:w-[700px] font-medium">
          Step into a world of culinary enchantment with our Ultimate Fresh
          Pizza, a gastronomic journey that transcends the ordinary. Crafted
          with an artisan's touch and a dedication to excellence, this pizza is
          a symphony of flavors meticulously orchestrated to elevate your taste
          experience to unprecedented heights.
        </p>
      </div>
      <div className=" flex mb-40">
        <PizzaMenuItem />
      </div>
    </div>
  );
}

export default PizzaMenu;
