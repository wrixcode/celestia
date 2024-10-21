
import Navbar from "../utils/Navbar.jsx";
import celestia_logo from "../assets/logocel.svg"
import rocket_lanuch from "../assets/images/rocket.svg";
import Carousel from "../utils/carousel.jsx";
import Swipermodule from "../utils/swiper.jsx";
import vision_content from "../assets/vision-content.svg"
import mission_content from "../assets/mission-content.svg"



const Home = () => {
  return (
    <>
      <div className="home-container flex justify-center">
        <div className="home-head space-y-20 w-[90%] md:w-[70%]  md:h-screen" id="home">
          {/* <div className="home-navbar"><Navbar/></div> */}
          <Navbar />
          <div className="herosection grid grid-cols-1 grid-rows-2 md:flex justify-between items-center relative top-4 md:top-10">
            <div className="welcome-text h-ful  flex-col">
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
        <div className="what-head text-7xl flex justify-center  my-10">
              What Is Celestia
        </div>
        <div className="what-logo flex justify-center m-10">
        <img className="celestia-logo-home object-fill w-[250px] " src={celestia_logo} alt="" />
        </div>
        <div className="what-text text-center  flex justify-center text-xl">
          <div className="w-[1000px]">
            <p className="mb-10">Celestia is an association we, the CSE department of Eranad Knowledge City Technical Campus created to push the boundaries of what we can achieve in Computer Science and Engineering</p>
            
            <p className="mb-20">Its vision is to ensure that students can explore and master the field, gain the skills for high-end jobs before they graduate, and stay connected to the community even after graduation.</p>
          </div>

        </div>
      </div>

      <div className="vision">
        <div className="vision-head flex justify-center text-5xl my-20">
          Our Vision
        </div>
        <div className="vision-content flex justify-center mb-20">
        <img className="celestia-logo-home object-fill " src={vision_content} alt="" />
        </div>
      </div>

      <div className="mission">
        <div className="mission-head flex justify-center text-5xl mt-40 mb-20">
          Our Mission
        </div>
        <div className="mission-content flex justify-center">
          <img className="celestia-logo-home object-fill " src={mission_content} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;