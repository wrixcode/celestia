import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import event_image1 from "../assets/images/event1.png";
import event_image2 from "../assets/images/event2.png";
import event_image3 from "../assets/images/event3.png";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";


const events = [
  { src: event_image1, description: "Description of image 1" },
  { src: event_image2, description: "Description of image 2" },
  { src: event_image3, description: "Description of image 3" },
];
const Carousel = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="events-container w-full">
      <div className="events-head text-center">
        <h1 className="font-bold text-center text-4xl md:text-5xl">
          Recent <span className="text-[#F15E22]">Events</span>
        </h1>
      </div>
      <div className="events-body mt-12 relative w-full">
        <div className="absolute inset-0 flex z-10 space-x-4 justify-between md:justify-around">
          <button onClick={handlePrevClick}>
            <ArrowLeft size={30} className="bg-black p-1 rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]"/>
          </button>
          <button onClick={handleNextClick}>
            <ArrowRight size={30} className="bg-black p-1 rounded-full shadow-[0_0px_10px_rgba(255,255,255,0.62)]"/>
          </button>
        </div>
        {/* slides */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={1}
          loop={false}
          slidesPerView={3}
          speed={800}
          spaceBetween={40}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
            scale: 0.7,
          }}
          pagination={{clickable: true}}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },

            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
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
  );
};

export default Carousel;