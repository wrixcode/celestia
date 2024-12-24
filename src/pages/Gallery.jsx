import Footer from "../utils/Footer";
import Navbar from "../utils/Navbar";

const images = [
  "https://via.placeholder.com/200", 
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/200",
];

const Gallery = () => {
  return (
    <>
    <div className="flex justify-center" id="gallery">
    <div className="home-head space-y-20 w-[90%] md:w-[70%]">
     <Navbar />
    <div className="">
      <h1 className="text-white text-center font-bold mb-14 text-5xl  py-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 px-4 md:px-10 mb-10">
              {images.map((image, index) => (
                <div key={index} className="relative hover:scale-105 transition-transform">
                  <img
                    src={image}
                    alt="gallery image"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>
    </div>
    </div>
    </div>
     
     <div className="footer  w-full flex justify-around items-center  py-10 bg-black rounded-t-[30px] shadow-[0_0px_15px_rgba(0,0,0,0.62)]">
     <Footer/>
   </div>
   <p className="py-3 text-center text-sm">Copyright @{new Date().getFullYear()} Celestia</p>
    </>
  );
};

export default Gallery;