function Image() {
  return (
    <div className="relative flex items-center justify-center shadow-2xl">
      <img
        src={url}
        alt=""
        className={`w-full h-full object-cover  transition-transform 300ms ease-out aspect-video shadow-2xl ${
          index === imageIndex ? "" : "opacity-0 hidden"
        }`}
      />
      <button className="absolute bg-yellow-500 text-3xl text-black-300 z-50 bottom-0 mb-5  p-5 font-semibold uppercase rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 hover:text-3xl">
        click for delicous burger
      </button>
    </div>
  );
}

export default Image;
