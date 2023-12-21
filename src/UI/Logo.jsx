import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <img
        src="/Borgur.svg"
        alt="logo"
        width="100px"
        className="sm:min-w-[150px] h-full m-3"
      />
    </Link>
  );
}

export default Logo;
