function LogoForSection({ children }) {
  return (
    <div>
      <h1 className="font-extrabold sm:text-3xl mt-3 text-yellow-300 ">
        {children}
      </h1>
    </div>
  );
}

export default LogoForSection;
