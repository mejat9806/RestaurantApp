function About() {
  return (
    <div>
      <div className="w-full h-[500px] relative bg-banner">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm "
          style={{
            backgroundImage: "url('/public/meat/BBQ banner.jpg')",
          }}
        >
          {" "}
        </div>
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-300 text-4xl sm:text-7xl font-bold text-center">
          About Us
        </h1>
      </div>
    </div>
  );
}

export default About;
