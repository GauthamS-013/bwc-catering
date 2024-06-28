import React from "react";
import { Link } from "react-router-dom";
import aboutShortImage from "../assets/sadhya.png";

const AboutShort = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          src={aboutShortImage}
          alt="Sadhya"
          className="w-[500px] mx-auto my-4"
        />
        <div className="flex flex-col justify-center">
          <p className="text-gray-600">ABOUT</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl py-4 italic font-serif">
            Indulge in Kozhikode's Finest Catering Experience
          </h2>
          <p className="text-gray-600 mb-4">
            As Kozhikode's trusted catering choice, we bring unparalleled
            expertise to every event, ensuring unforgettable culinary
            experiences for all. Whether it's a cozy outdoor gathering or a
            grand celebration, count on us to deliver exceptional dining that
            reflects your unique style and vision.
          </p>
          <Link to="/about">
            <button className="text-black w-[120px] my-4 mx-auto md:mx-0 hover:text-orange-700 bg-white">
              - WHO WE ARE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutShort;
