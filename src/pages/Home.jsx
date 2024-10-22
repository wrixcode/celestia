
import Navbar from "../utils/Navbar.jsx";
import celestia_logo from "../assets/logocel.svg"
import rocket_lanuch from "../assets/images/rocket.svg";
import Carousel from "../utils/Carousel.jsx";
import mission_content from "../assets/mission-content.svg"
import mission_mobile from "../assets/images/mission.svg"
import Vision from "../utils/Vision.jsx";
import Testimonials from "../utils/Testimonials.jsx";
import Community from "../utils/Community.jsx";
import Footer from "../utils/Footer.jsx";



const Home = () => {
  return (
    <>
      <div className="home-container flex justify-center">
        <div className="home-head space-y-20 w-[90%] md:w-[70%]  md:h-screen" id="home">
          {/* <div className="home-navbar"><Navbar/></div> */}
          <Navbar />
          <div className="herosection grid grid-cols-1 grid-rows-2 md:flex justify-between items-center relative top-4 md:top-28">
            <div className="welcome-text h-ful  flex-col ">
              <section className='welcome-head text-6xl md:text-7xl'>
                Innovate. <span className="text-[#F15E22]">Code</span>. <br></br>
                Elevate
              </section>
              <section className="welcome-words text-xl md:text-2xl font-semibold font-sans">
                <br />
                Welcome to <span className="font-bold">Celestia</span>,<br />
                where computer science students ,<br />
                collaborate, <span className="font-bold">innovate</span>, and <span className="font-bold">create</span> solutions <br />
                that shape the future of technology
              </section>
              <button className="flex justify-around items-center bg-black w-60 md:w-72 p-2 my-14 md:my-5 rounded-xl shadow-[0_0px_10px_rgba(255,255,255,0.62)]">
                <img src={rocket_lanuch} alt="" className="w-10 h-10" />
                <p className="text-xl md:text-2xl">Explore Events</p>
              </button>
            </div>
            <div className="celestia-logo">
              <img className="celestia-logo-home object-fill relative bottom-10 w-fit" src={celestia_logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className=" w-[90%] md:w-[70%]">
          {/* events */}
          <Carousel/>
        </div>
      </div>

      
      <div className="what-is-celestia ">
        <div className="what-head flex justify-center  my-10 font-bold text-4xl md:text-7xl">
              What Is Celestia
        </div>
        <div className="what-logo flex justify-center m-10">
        <img className="celestia-logo-home object-fill w-[250px] " src={celestia_logo} alt="" />
        </div>
        <div className="what-text text-center  flex justify-center text-md md:text-xl font-semibold">
          <div className="w-[1000px] px-5">
            <p className="mb-10">Celestia is an association we, the CSE department of Eranad Knowledge City Technical Campus created to push the boundaries of what we can achieve in Computer Science and Engineering</p>
            
            <p className="mb-20">Its vision is to ensure that students can explore and master the field, gain the skills for high-end jobs before they graduate, and stay connected to the community even after graduation.</p>
          </div>

        </div>
      </div>
      {/* vision */}
      <div className="vision">
        <Vision/>
      </div>
       {/* mission */}
      <div className="mission">
        <div className="mission-head flex justify-center text-5xl mt-40 mb-20">
          Our Mission
        </div>
        <div className="mission-content hidden md:flex justify-center ">
          <img className="celestia-logo-home object-fill " src={mission_content} alt="" />
        </div>
        <div className="mission-content flex justify-center md:hidden">
          <img className="celestia-logo-home object-fill " src={mission_mobile} alt="" />
        </div>
      </div>
      {/* Testimonials */}
      <div className="testimonials mt-24 md:mt-10">
         <Testimonials/>
      </div>
      {/* community  */}
      <div className="community">
        <Community/>
      </div>
      <div className="footer w-full flex justify-around items-center  py-10 bg-black rounded-t-[50px] shadow-[0_0px_15px_rgba(0,0,0,0.62)]">
        <Footer/>
      </div>
       <p className="py-3 text-center">Copyright @2024 Celestia</p>
    </>
  );
};

export default Home;