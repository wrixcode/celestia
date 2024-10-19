import logo from "../assets/logo.svg";
import { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleActive = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="home-navbar sticky top-5 z-50">
      <div className="items-center">
        <div className="flex justify-between items-center py-2 px-3 bg-[#090909] rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]">
          {/* Navbar */}
          <nav className="flex justify-between w-full">
            <div className="text-3xl font-bold mt-1">
              <a href="#home">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <ul className="flex space-x-6 text-lg font-semibold">
              <li
                className={`cursor-pointer m-0 hover:-translate-y-1 hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.62)] transition duration-300 ease-in-out ${
                  activeItem == "home" ? "text-[#F15E22]" : ""
                }`}
                onClick={() => handleActive("home")}
              >
                Home
              </li>
              <li
                className={`cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out ${
                  activeItem == "about" ? "text-[#F15E22]" : ""
                }`}
                onClick={() => handleActive("about")}
              >
                About
              </li>
              <li
                className={`cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out ${
                  activeItem == "events" ? "text-[#F15E22]" : ""
                }`}
                onClick={() => handleActive("events")}
              >
                Events
              </li>
              <li
                className={`cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out ${
                  activeItem == "team" ? "text-[#F15E22]" : ""
                }`}
                onClick={() => handleActive("team")}
              >
                Team
              </li>
              <li
                className={`cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out ${
                  activeItem == "contact" ? "text-[#F15E22]" : ""
                }`}
                onClick={() => handleActive("contact")}
              >
                Contact
              </li>
              <li
                className={`cursor-pointer hover:-translate-y-1 hover:shadow-[0_4px_4px_0_rgba(255,255,255,0.5)] transition-all duration-300 ease-in-out ${
                  activeItem == "gallery" ? "text-[#F15E22]" : ""
                }`}
                onClick={() => handleActive("gallery")}
              >
                Gallery
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
