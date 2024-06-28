import React from "react";
import { FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import logo from "../assets/ff.png";

const ContactShort = () => {
  const email = "gauthams779@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/gauthm_.s/", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/gautham-s-6b4a08271/", "_blank");
  };

  return (
    <div className="w-full py-8 bg-black p-8 flex flex-col md:flex-row items-center justify-between">
      <div className="flex items-center flex-col md:flex-row mb-4 md:mb-0">
        <img src={logo} alt="Logo" className="w-32 md:w-48 lg:w-64 mx-auto my-4" />
        <h2 className="text-2xl md:text-4xl text-orange-400 font-semibold text-center md:text-left">
          Feast Fables
        </h2>
      </div>
      <div className="flex items-center justify-center mt-4 md:mt-0">
        <FiMail
          className="text-gray-200 cursor-pointer mr-4"
          size={24}
          onClick={handleEmailClick}
        />
        <FiInstagram
          className="text-gray-200 cursor-pointer mr-4"
          size={24}
          onClick={handleInstagramClick}
        />
        <FiLinkedin
          className="text-gray-200 cursor-pointer"
          size={24}
          onClick={handleLinkedinClick}
        />
      </div>
    </div>
  );
};

export default ContactShort;
