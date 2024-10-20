
import Navbar from "../utils/Navbar.jsx";
import celestia_logo from "../assets/logocel.svg"
import Swipermodule from "../utils/swiper.jsx";
import rocket_lanuch from "../assets/images/rocket.svg";

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
          <Swipermodule/>
        </div>
      </div>
    </>
  );
};

export default Home;