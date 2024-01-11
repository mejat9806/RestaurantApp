import HomeMenuText from "./HomeMenuText";

function MenuHome() {
  return (
    <div className="flex sm:justify-between  sm:flex-row  md:flex  flex-col items-center">
      <div className="text-center text-yellow-300 justify-center">
        <HomeMenuText />
      </div>

      <img
        src="/public/meat/bbqHomeWide.webp"
        alt="Menu Image"
        className="xl:h-[700px] aspect-square xl:w-[50%] lg:h-[500px] lg:w-[700px] md:h-[700px] md:w-[600px] sm:h-[300px] sm:w-[400px]"
      />
    </div>
  );
}

export default MenuHome;
