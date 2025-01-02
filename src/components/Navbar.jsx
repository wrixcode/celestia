import logo from "../assets/logo.svg";
import { useState } from "react";
import navicon from "../assets/images/navicon.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <nav className="home-navbar fixed top-5 z-50 w-[90%] md:w-[68%]">
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center bg-black py-2 px-3 rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]">
        <div className="text-3xl font-bold mt-1">
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <ul className="flex space-x-6 text-lg font-semibold">
          {menuItems.map((item) => (
            <li key={item.name} className="cursor-pointer m-0 hover:-translate-y-1 transition duration-300 ease-in-out">
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  isActive ? "text-orange-500 font-bold" : "text-white"
                }
              >
                <span className="list-span-navbar">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div className="flex justify-between w-full bg-black bg-opacity-5 rounded-3xl lg:hidden">
        <div className="bg-black rounded-2xl flex items-center justify-center px-3">
          <NavLink to={"/"}>
          <img src={logo} alt="logo" className="w-28 h-10" />
          </NavLink>
        </div>
        <div className="bg-orange-500 px-5 py-2 rounded-full">
          <div onClick={toggleNav} className="cursor-pointer flex-auto">
            <img src={navicon} alt="navicon" className={`w-8 rounded-lg transition-transform duration-500 ${isNavOpen? "rotate-90": "rotate-0"}`} />
          </div>
        </div>
      </div>

      {isNavOpen && (
        <div className="w-full flex justify-end z-40 absolute top-16  transition-all duration-1000">
          <div className="flex flex-col items-center justify-center bg-black bg-opacity-80 text-white rounded-2xl mt-2 w-44">
            {menuItems.map((item) => (
              <div key={item.name} className="cursor-pointer m-2 hover:text-[#F15E22]">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "text-orange-500 font-bold" : "text-white"
                  }
                  onClick={() => setIsNavOpen(false)} // Close menu on click
                >
                  {item.name}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
