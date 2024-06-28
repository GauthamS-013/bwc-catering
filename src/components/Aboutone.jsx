import React from "react";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";

const Aboutone = () => {
  return (
    <div className="relative w-full">
      
      <div className="w-full max-h-[600px] overflow-hidden relative">
        <img
          src={about1}
          alt="aboutone"
          className="w-full h-auto object-cover max-h-[600px]"
        />

        
        <div className="absolute inset-0 flex items-center justify-center my-10">
          <div className="py-2 px-4 ">
            <h1 className="text-4xl md:text-7xl sm:text-5xl text-white italic font-serif text-center">
              About Us
            </h1>
          </div>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div className="flex flex-col justify-center">
          <p className="text-gray-600">ABOUT</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl py-4 italic font-serif">
            Crafting Memorable Culinary Experiences with Passion
          </h2>
          <p className="text-gray-600 mb-4">
            We understand that the effort you put into planning and preparing
            for your celebration is crucial. Rest assured, we're committed to
            earning your trust, meticulously attending to every detail, and
            ensuring a memorable event from start to finish.
          </p>
        </div>
        <img src={about2} alt="Event" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Aboutone;
