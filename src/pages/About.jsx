import celestia_logo from "../assets/logocel.svg"
import Navbar from "../components/Navbar"
import Vision from "../components/Vision"
import mission_content from "../assets/mission-content.svg"
import mission_mobile from "../assets/images/mission.svg"
import Footer from "../components/Footer"

const About = () => {
    return (
        <div className="min-h-screen w-full flex flex-col space-y-10 justify-center items-center">
            <Navbar />
            
            <div className="about-celestia w-full px-4 md:px-8 lg:px-16" id="about">
                <div className="what-logo flex justify-center m-10">
                    <img 
                        className="celestia-logo-about object-fill w-[200px] md:w-[300px]" 
                        src={celestia_logo} 
                        alt="Celestia Logo" 
                    />
                </div>
                <div className="what-text text-center  flex justify-center text-md md:text-xl font-semibold">
          <div className="w-[1000px] px-5">
            <p className="mb-10">Celestia is an association we, the CSE department of Eranad Knowledge City Technical Campus created to push the boundaries of what we can achieve in Computer Science and Engineering</p>
            <p className="mb-8 lg:mb-20">Its vision is to ensure that students can explore and master the field, gain the skills for high-end jobs before they graduate, and stay connected to the community even after graduation.</p>
          </div>

        </div>
        {/* vision */}
      <div className="vision">
        <Vision />
      </div>
      {/* mission */}
      <div className="mission">
        <div className="mission-head flex justify-center text-5xl  mb-10 mt-24 md:mt-16 lg:mt-24 font-bold">
          Our Mission
        </div>
        <div className="mission-content hidden md:flex justify-center ">
          <img className="celestia-logo-home object-fill " src={mission_content} alt="" />
        </div>
        <div className="mission-content flex justify-center md:hidden">
          <img className="celestia-logo-home object-fill " src={mission_mobile} alt="" />
        </div>
      </div>
      <div className="footer w-full flex justify-around items-center relative top-[-20px] md:top-0 py-10 bg-black rounded-t-[30px] mt-10 shadow-[0_0px_15px_rgba(0,0,0,0.62)]">
        <Footer />
      </div>
      <p className="py-3 text-center text-sm">Copyright @{new Date().getFullYear()} Celestia</p>
     
                
            </div>
        </div>
    );
};

export default About;
