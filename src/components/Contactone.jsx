import React from "react";
import telephone from "../assets/telephone.jpg";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contactone = () => {
  const email = "gauthams779@gmail.com";
  const phone = "+917736834013";
  const location = "Vennayur road, Ayikkarappadi, Malappuram";

  return (
    <div className="relative w-full">
      <div className="w-full max-h-[600px] overflow-hidden relative">
        <img
          src={telephone}
          alt="telephone"
          className="w-full h-auto object-cover max-h-[600px]"
        />

        <div className="absolute inset-0 flex items-center justify-center my-10">
          <div className="py-2 px-4">
            <h1 className="text-4xl md:text-7xl sm:text-5xl text-white italic font-serif text-center">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div className="flex flex-col justify-center">
          <p className="text-gray-600">CONTACT US</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl py-4 italic font-serif">
            Drop Us a Line
          </h2>
          <p className="text-gray-600 mb-4">
            Fill out the form below, and our team will contact you within 48
            business hours. The more details you share, the better we can
            understand your unique needs. Your event is important to us, and
            we’re excited to work with you!
          </p>
        </div>
        <div className="flex flex-col space-y-4 mt-8 md:mt-0 justify-center">
          <div className="flex items-center">
            <FiMapPin className="text-black mr-2" size={24} />
            <span className="text-gray-600 italic font-serif text-lg">{location}</span>
          </div>
          <div className="flex items-center">
            <FiPhone className="text-black mr-2" size={24} />
            <a href={`tel:${phone}`} className="text-gray-600 italic font-serif text-lg">{phone}</a>
          </div>
          <div className="flex items-center">
            <FiMail className="text-black mr-2" size={24} />
            <a href={`mailto:${email}`} className="text-gray-600 italic font-serif text-lg">{email}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactone;
