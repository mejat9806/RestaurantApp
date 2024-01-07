import DrinkMenuStuff from "../features/Drink/DrinkMenuStuff";

function DrinkMenu() {
  return (
    <div className="flex flex-col justify-center text-center items-center mt-4  w-full h-full mb-20 ">
      <div className="mb-5 flex flex-col items-center ">
        <h1 className="sm:text-6xl font-extrabold  text-4xl uppercase font-menu text-black sm:mb-5">
          Drink
        </h1>
        <p className="w-[70%] sm:w-[700px] font-medium">
          {" "}
          Elevate Your Dining with Unique Drinks
        </p>
      </div>

      <DrinkMenuStuff />
    </div>
  );
}

export default DrinkMenu;
