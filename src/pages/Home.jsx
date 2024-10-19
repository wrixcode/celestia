import Navbar from "../utils/Navbar.jsx";
import celestia_logo from "../assets/logocel.svg"
const Home = () => {
  return (
    <>
      <div className="home-container flex justify-center">
        <div className="home-head space-y-20 m-6 w-[70%]" id="home">
          {/* <div className="home-navbar"><Navbar/></div> */}
          <Navbar/>
          <div className="welcome-text ">
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
          <div className="celestia-logo flex justify-end">
              <img className="celestia-logo-home object-fill " src={celestia_logo}  alt="" />
          </div>
        </div>
      </div>
      
      
    </>
  );
};

export default Home;