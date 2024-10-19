import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Navbar from "../utils/Navbar.jsx";
import celestia_logo from "../assets/logocel.svg"
import event_image1 from "../assets/images/event1.png";
import event_image2 from "../assets/images/event2.png";
import event_image3 from "../assets/images/event3.png";

const events = [
  { src: event_image1, description: "Description of image 1" },
  { src: event_image2, description: "Description of image 2" },
  { src: event_image3, description: "Description of image 3" },
];

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
               <div className="events-container w-full m-6">
            <div className="events-head text-center">
              <h1 className="font-bold text-center text-5xl"> Recent <span className="text-[#F15E22]  ">Events</span></h1>
            </div>
            <div className="events-body mt-12">
              {/* slides */}
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                initialSlide={1}
                loop={false}
                slidesPerView={3}
                speed={500}
                spaceBetween={40}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 200,
                  modifier: 1.5,
                  slideShadows: true,
                  scale: 0.7,
                }}
                pagination={{ clickable: true }}
                className="swiper_container rounded-lg"
              >
                {events.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img src={image.src} alt={`slide_image_${index}`} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
         </div>
      </div>
    </>
  );
};

export default Home;