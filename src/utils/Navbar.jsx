import logo from "../assets/logo.svg";
import { useState } from "react";
import navicon from "../assets/images/navicon.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleActive = (item) => {
    setActiveItem(item);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  return (
    <div className="home-navbar  fixed top-5 z-50  w-[90%] md:w-[68%]">
      {/* desktop */}
      <div className="hidden lg:flex justify-between items-center bg-black py-2 px-3 rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]">
        {/* Navbar */}
        <nav className="flex justify-between w-full">
          <div className="text-3xl font-bold mt-1">
            <Link href="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="flex space-x-6 text-lg font-semibold">
            {["home", "about", "events", "team", "contact", "gallery"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer  m-0 hover:-translate-y-1  transition duration-300 ease-in-out ${activeItem === item ? "text-[#F15E22]" : ""
                  }`}
                onClick={() => handleActive(item)}
              >
                <Link to={item} spy={true} smooth={true} offset={-100} duration={500}  >
                  <span className="list-span-navbar ">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* mobile */}
      <div className="flex justify-between w-full bg-black bg-opacity-5 rounded-3xl lg:hidden">
        {/* logo */}
        <div className="bg-black  rounded-2xl flex items-center justify-center px-3">
          <img src={logo} alt="logo" className="w-28 h-10" />
        </div>
        {/* navigation */}
        <div className="bg-orange-500  px-5 py-2 rounded-full">
          <div onClick={toggleNav} className="cursor-pointer flex-auto">
            <img
              src={navicon}
              alt="navicon"
              className="w-8 rounded-lg transition-transform duration-700"
            />
          </div>
        </div>
      </div>
      {
        isNavOpen && (
          <div className="w-full flex justify-end z-40 absolute top-16">
            <div className="flex flex-col items-center justify-center bg-black bg-opacity-80 text-white rounded-2xl mt-2 w-44">
              {["home", "about", "events", "team", "contact", "gallery"].map((item) => (
                <div
                  key={item}
                  className={`cursor-pointer m-2 hover:text-[#F15E22] `}
                  onClick={() => handleActive(item)}
                >
                  <Link to={item} spy={true} smooth={true} offset={-100} duration={500}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Navbar;