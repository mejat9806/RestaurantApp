import SideMenu from "../features/Sides/SideMenu";
import useScroll from "../hooks/useScroll";

function Side() {
  useScroll("gotoMenu");

  return (
    <div className="flex flex-col justify-center text-center items-center mt-4  w-full ">
      {" "}
      <div className="mb-5 flex flex-col items-center ">
        <h1 className="text-6xl font-extrabold mb-5 font-menu" id="menu/pizza">
          Side Menu
        </h1>
        <p className="w-[70%] sm:w-[700px] font-medium">
          Enhance your dinner with our delectable selection of side dishes,
          adding a perfect complement to your dining experience
        </p>
      </div>
      <div className=" flex mb-40">
        <SideMenu />
      </div>
    </div>
  );
}

export default Side;
