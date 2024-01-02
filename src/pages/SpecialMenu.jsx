import useScroll from "../hooks/useScroll";
import SpecialMenuItem from "../features/Special/SpecialMenuItem";

function SpecialMenu() {
  useScroll("gotoMenu");

  return (
    <div
      className="flex flex-col justify-center text-center items-center mt-4  w-full "
      id="test"
    >
      {" "}
      <div className="mb-5 flex flex-col items-center ">
        <h1 className="text-6xl font-extrabold mb-5 font-menu" id="menu/pizza">
          Specials Menu
        </h1>
        <p className="w-[70%] sm:w-[700px] font-medium">
          Elevate your dining experience with our exceptional sandwich and beef
          platter offerings.
        </p>
      </div>
      <div className=" flex mb-40">
        <SpecialMenuItem />
      </div>
    </div>
  );
}

export default SpecialMenu;
