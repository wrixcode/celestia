import Navbar from "../utils/Navbar.jsx";
import celestia_logo from "../assets/logocel.svg"
const Home = () => {
  return (
    <>
      <div className="home-head space-y-20" id="home">
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
        <div className="celestia-logo">
            <img class="celestia-logo-home" src={celestia_logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;