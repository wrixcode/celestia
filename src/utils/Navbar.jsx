import logo from "../assets/logo.svg";
import { useState } from "react";

const Navbar = () => {

  const [activeItem, setActiveItem] = useState("home");

  const handleActive = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="w-full  flex justify-center  items-center">
      <div className="flex justify-between items-center py-2 px-3  m-6 bg-[#090909] rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]  w-[70%] ">
        {/* Navbar */}
        <nav className="flex justify-between  w-full ">
          <div className="text-3xl font-bold mt-1"> <a href="#home"> <img src={logo} alt="logo" /></a> </div>
          <ul className="flex space-x-6 text-lg font-semibold">
            <li className={`cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out ${activeItem == "home" ? "text-[#F15E22]" : ""}`} onClick={()=>handleActive("home")}>Home</li>
            <li className={`cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out ${activeItem == "about" ? "text-[#F15E22]" : ""}`} onClick={()=> handleActive("about")}>About us</li>
            <li className={`cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out ${activeItem == "events" ? "text-[#F15E22]" : ""}`} onClick={()=>handleActive("events")}>Events</li>
            <li className={`cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out ${activeItem == "teams" ? "text-[#F15E22]" : ""}`} onClick={()=>handleActive("teams")}>Teams</li>
            <li className={`cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out ${activeItem == "contact" ? "text-[#F15E22]" : ""}`} onClick={()=>handleActive("contact")}>Contact</li>
            <li className={`cursor-pointer hover:-translate-y-1 transition-all duration-300 ease-in-out ${activeItem == "gallery" ? "text-[#F15E22]" : ""}`} onClick={()=>handleActive("gallery")}>Gallery</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
