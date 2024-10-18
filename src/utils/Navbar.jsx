import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
   <div className="w-full  flex justify-center  items-center">
     <div className="flex justify-between items-center  m-6 bg-[#090909] rounded-full shadow-[0_4px_10px_rgba(255,255,255,0.1)]  w-[70%] ">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-3">
        <div className="text-3xl font-bold"> <a href="#home"> <img src={logo} alt="logo" /></a> </div>
        <ul className="flex space-x-6 text-lg font-semibold">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">About us</li>
          <li className="hover:text-orange-500 cursor-pointer">Events</li>
          <li className="hover:text-orange-500 cursor-pointer">Teams</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          <li className="hover:text-orange-500 cursor-pointer">Gallery</li>
        </ul>
      </nav>
    </div>
   </div>
  );
};

export default Navbar;
