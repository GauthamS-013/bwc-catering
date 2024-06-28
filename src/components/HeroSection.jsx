import React from "react";
import { Link } from "react-router-dom";
import video1 from "../assets/video1.mp4";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="video-container relative overflow-hidden">
        <video
          className="video object-cover w-full h-full md:h-auto"
          autoPlay
          loop
          muted
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          {/* Hide for small screens, but show for md and lg */}
          <p className="hidden sm:block text-base md:text-lg lg:text-2xl xl:text-3xl text-white mb-6 md:mb-8 lg:mb-10 xl:mb-12">
            KOZHIKODE'S PREMIER CATERER
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-white italic font-serif font-bold mb-4 md:mb-6 lg:mb-8 xl:mb-10">
            Savor the Exceptional
          </h2>
          <Link to="/contact">
            <button className="bg-orange-500 hover:bg-gray-600 text-white w-[200px] mx-auto my-6 py-3">
              INQUIRE NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
