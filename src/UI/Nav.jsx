import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import NavLinks from "../features/NavLinks";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      const isMd = window.innerWidth >= 768;
      if (!isMd) {
        setIsOpen(false); // Close the mobile menu on larger screens
      }
    }
    handleResize();

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
      <div className="hidden md:flex md:flex-row justify-between items-center ">
        <NavLinks />
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-yellow-300 z-50 ">
          <div className="flex flex-col items-center mt-12">
            <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className="md:hidden  top-9 right-2 z-50 absolute">
              <button onClick={toggleNavBar}>
                {!isOpen ? (
                  <CiMenuBurger size="2em" />
                ) : (
                  <IoMdClose size="2em" color="black" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu toggle button */}
      <div className="md:hidden  top-0 right-0  absolute">
        <button onClick={toggleNavBar}>
          {!isOpen ? (
            <CiMenuBurger size="2em" />
          ) : (
            <IoMdClose size="2em" color="black" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
