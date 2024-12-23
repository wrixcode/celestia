import React from "react";

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
    <div className="min-h-screen bg-gray-900 text-white">
      <h1 className="text-white text-center text-4xl font-bold mb-14 md:text-5xl  py-6">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 px-4 md:px-10 mb-10">
        {images.map((image, index) => (
          <div key={index} className="relative hover:scale-105 transition-transform" >
            <img
              src={image}
              alt="gallery image"
              className="w-full h-full object-cover rounded-lg shadow-lg "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;