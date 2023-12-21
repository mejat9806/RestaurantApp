import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import NavLinks from "./NavLinks";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      const isMd = window.innerWidth >= 768;
      setIsOpen(isMd);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex mx-3 relative">
      {/* Hidden on small screens, visible on medium and larger screens */}
      <div className="hidden md:flex md:flex-row justify-between items-center w-full">
        <NavLinks />
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white/50 z-50">
          <div className="flex flex-col items-center mt-12">
            <NavLinks isOpen={isOpen} />
          </div>
        </div>
      )}

      {/* Mobile menu toggle button */}
      <div className="md:hidden  bottom-0 right-0  z-50 absolute">
        <button onClick={toggleNavBar}>
          {!isOpen ? (
            <button>
              <CiMenuBurger size="2em" />
            </button>
          ) : (
            <IoMdClose size="2em" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
