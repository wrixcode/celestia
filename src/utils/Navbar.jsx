import logo from "../assets/logo.svg";
import { useState } from "react";
import navicon from "../assets/images/navicon.svg";
import { X } from "react-feather";

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
    <div className="home-navbar sticky w-full top-5 z-20">
      {/* desktop */}
      <div className="hidden md:flex justify-between items-center bg-black py-2 px-3 rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]">
        {/* Navbar */}
        <nav className="flex justify-between w-full">
          <div className="text-3xl font-bold mt-1">
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <ul className="flex space-x-6 text-lg font-semibold">
            {["home", "about", "events", "team", "contact", "gallery"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer  m-0 hover:-translate-y-1  transition duration-300 ease-in-out ${activeItem === item ? "text-[#F15E22]" : ""
                  }`}
                onClick={() => handleActive(item)}
              >
                <span className="list-span-navbar ">
                {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* mobile */}
      <div className="flex justify-between w-full md:hidden">
        {/* logo */}
        <div className="bg-black rounded-2xl flex items-center justify-center px-3">
          <img src={logo} alt="logo" className="w-28 h-10" />
        </div>
        {/* navigation */}
        <div className="text-white flex justify-between items-center bg-black rounded-2xl w-28">
          <h1 className="m-2 text-center  text-xl font-bold flex-auto">Home</h1>
          <div onClick={toggleNav} className="cursor-pointer flex-auto my-2">
            <img
              src={navicon}
              alt="navicon"
              className="bg-orange-500  w-11 rounded-lg transition-transform duration-700"
            />
            {/* {isNavOpen ? (
              <X className="bg-orange-500 w-11 rotate-90 transition-all duration-700" />
            ) : (
              <img
                src={navicon}
                alt="navicon"
                className="bg-orange-500  w-11 rounded-lg transition-transform duration-700"
              />
            )} */}
          </div>
        </div>
      </div>
      {
        isNavOpen && (
          <div className="w-full flex justify-end z-40 absolute top-16">
            <div className="flex flex-col items-center justify-center bg-black text-white rounded-2xl mt-2 w-44">
              {["home", "about", "events", "team", "contact", "gallery"].map((item) => (
                <div
                  key={item}
                  className={`cursor-pointer m-2 hover:text-[#F15E22] `}
                  onClick={() => handleActive(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
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