import { GitHub, Instagram, Linkedin } from "react-feather";
import Footer from "../utils/Footer";
import Navbar from "../utils/Navbar";
import teams from "../data/teams.json";

const Team = () => {

  
  return (
    <>
    <div className="flex justify-center" id="teams">
    <div className="home-head space-y-20 w-[90%] md:w-[70%]" >
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center  py-10">
      <h1 className="text-white text-center text-4xl font-bold mb-14 md:text-5xl">Our Team</h1>
     
{/* main members */}
<div className="flex justify-center flex-wrap md:grid  md:grid-cols-3 gap-6 mb-6 ">
  {teams.mainmemebers.map((member, index) => (
    <div
      key={index}
      className="bg-gray-800 rounded-lg p-4 text-center shadow-lg hover:scale-105 transition-transform"
    >
      <img
        src={member.name}
        alt={member.name}
        className="w-20 h-20 mx-auto rounded-full mb-4"
      />
      <h2 className="text-white text-lg font-semibold">{member.name}</h2>
      <p className="text-gray-400">{member.position}</p>
      <div className="icons flex justify-around items-center mt-2">
        <GitHub width={18} />
        <Linkedin width={18} />
        <Instagram width={18} />
      </div>
    </div>
  ))}
</div>

{/* other members */}
<div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5   gap-6 mb-6">
  {teams.othermembers.map((member, index) => (
    <div
      key={index}
      className="bg-gray-800 rounded-lg p-4 text-center shadow-lg hover:scale-105 transition-transform"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-20 h-20 mx-auto rounded-full mb-4"
      />
      <h2 className="text-white text-lg font-semibold">{member.name}</h2>
      <p className="text-gray-400">{member.position}</p>
      <div className="icons flex justify-around items-center mt-2">
        <GitHub width={18} />
        <Linkedin width={18} />
        <Instagram width={18} />
      </div>
    </div>
  ))}
</div>

    
    </div>
    </div>
    </div>

    <div className="footer w-full flex justify-around items-center  py-10 bg-black rounded-t-[30px] shadow-[0_0px_15px_rgba(0,0,0,0.62)]">
        <Footer/>
      </div>
      <p className="py-3 text-center text-sm">Copyright @{new Date().getFullYear()} Celestia</p>
    </>
  );
};

export default Team;