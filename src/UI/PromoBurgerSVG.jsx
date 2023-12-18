/* eslint-disable no-unused-vars */
function PromoBurgerSVG({ dataBurger }) {
  const { video, desc } = dataBurger;
  return (
    <div className="relative bg-black text-yellow-100 sm:flex justify-center flex-col items-center border-b-4 border-yellow-400 text-center hidden">
      {/*  <h1 className="uppercase text-5xl font-bold">{label}</h1>
      <p>{sentences}</p> */}
      <video
        autoPlay
        playsInline
        muted
        loop
        className="h-[50%] w-[100%] p-0 object-fill"
        loading="lazy"
      >
        <source src={video}></source>
      </video>
      <svg height="100%" width="100%" className="absolute ">
        <mask x="0" y="0" height="100%" width="100%" id="mask">
          <rect x="0" y="0" height="100%" width="100%" fill="white" />
          <text
            x="50%"
            y="50%"
            fill="red"
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-roboto text-center font-extrabold uppercase md:text-3xl text-2xl sm:text-3xl lg:text-4xl xl:text-6xl tracking-widest "
          >
            {" "}
            <tspan x="50%" y="5em">
              fresh burger
            </tspan>
            <tspan dy="1em" x="50%">
              with
            </tspan>
            <tspan dy="1em" x="50%">
              Homemade Sauce
            </tspan>
          </text>
        </mask>
        <rect
          x="0"
          y="0"
          height="110%"
          width="100%"
          className="fill-black"
          mask="url(#mask)"
        />
      </svg>
    </div>
  );
}

export default PromoBurgerSVG;
