/* eslint-disable no-unused-vars */
function PromoPizzaSVG({ dataPizza }) {
  return (
    <div className="relative bg-black text-yellow-100 sm:flex justify-center flex-col-reverse items-center border-b-4 border-yellow-400 text-center hidden">
      {/*  <h1 className="uppercase text-5xl font-bold">{label}</h1>
      <p>{sentences}</p> */}
      <video autoPlay playsInline muted loop className="h-[50%] w-[100%] p-0">
        <source src={dataPizza.video}></source>
      </video>
      <svg height="100%" width="100%" className="absolute ">
        <mask x="0" y="0" height="100%" width="100%" id="mask2">
          <rect x="0" y="0" height="100%" width="100%" fill="white" />
          <text
            x="50%"
            y="50%"
            dy="0"
            fill="red"
            className="font-roboto text-center font-extrabold uppercase md:text-3xl text-2xl sm:text-3xl lg:text-3xl xl:text-6xl tracking-widest break-words max-w-[80%] mx-auto leading-normal"
          >
            <tspan x="20%" y="5em">
              fresh baked Pizza
            </tspan>
            <tspan dy="1em" x="20%">
              in
            </tspan>
            <tspan dy="1em" x="20%">
              woodBurning Oven
            </tspan>
          </text>
        </mask>
        <rect
          x="0"
          y="0"
          height="100%"
          width="100%"
          className="fill-black"
          mask="url(#mask2)"
        />
      </svg>
    </div>
  );
}

export default PromoPizzaSVG;
