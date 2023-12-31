/* eslint-disable no-unused-vars */
function PromoBBQSVG({ dataPizza }) {
  return (
    <div className="relative bg-black text-yellow-100 sm:flex justify-center flex-col-reverse items-center border-b-4 border-yellow-400 text-center hidden">
      {/*  <h1 className="uppercase text-5xl font-bold">{label}</h1>
      <p>{sentences}</p> */}
      <video autoPlay playsInline muted loop className="h-[50%] w-[100%] p-0 ">
        <source src={dataPizza.video} />
      </video>
      <svg
        height="100vh"
        width="100%"
        className="absolute "
        viewBox="0 0 1400 899"
      >
        <mask x="0" y="0" height="100%" width="100%" id="mask2">
          <rect x="0" y="0" height="100%" width="100%" fill="white" />
          <text
            x="50%"
            y="50%"
            dy="0"
            fill="red"
            className="font-roboto text-center font-extrabold uppercase  text-xl sm:text-5xl  md:text-6xl tracking-widest break-words max-w-[80%] mx-auto leading-normal h-full"
          >
            <tspan x="30%" y="40%">
              Embrace BBQ&apos;s
            </tspan>
            <tspan dy="1em" x="30%">
              Smoky
            </tspan>
            <tspan dy="1em" x="30%">
              Serenade
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

export default PromoBBQSVG;
