
import Navbar from "../utils/Navbar.jsx";
import celestia_logo from "../assets/logocel.svg"
import Swipermodule from "../utils/swiper.jsx";


const Home = () => {
  return (
    <>
      <div className="home-container flex justify-center">
        <div className="home-head space-y-20 m-6 w-[70%] h-screen" id="home">
          {/* <div className="home-navbar"><Navbar/></div> */}
          <Navbar />
          <div className="herosection flex justify-between items-center relative top-10">
            <div className="welcome-text h-ful flex-col">
              <section className='welcome-head'>
                Innovate. <span className="text-[#F15E22]">Code</span>.
                Elevate
              </section>
              <section className="welcome-words">
                Welcome to <b>Celestia</b>,<br></br>
                where computer science students ,<br></br>
                collaborate, <b>innovate</b>, and <b>create</b> solutions<br></br>
                that shape the future of technology
              </section>
            </div>
            <div className="celestia-logo">
              <img className="celestia-logo-home object-fill " src={celestia_logo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[70%]">
          {/* events */}
          <Swipermodule/>
        </div>
      </div>
    </>
  );
};

export default Home;