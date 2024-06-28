import React from "react";
import event1 from "../assets/event1.jpg";
import wedding from "../assets/wedding.png";
import social from "../assets/sozial.avif";
import corporate from "../assets/corporate.webp";

const Eventsone = () => {
  return (
    <div className="relative w-full">
      <div className="w-full max-h-[600px] overflow-hidden relative">
        <img
          src={event1}
          alt="eventone"
          className="w-full h-auto object-cover max-h-[600px]"
        />

        <div className="absolute inset-0 flex items-center justify-center my-10">
          <div className="py-2 px-4 ">
            <h1 className="text-4xl md:text-7xl sm:text-5xl text-white italic font-serif text-center">
              Events
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div className="flex flex-col justify-center">
          <p className="text-gray-600">CELEBRATING LOVE</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl py-4 italic font-serif">
            Weddings
          </h2>
          <p className="text-gray-600 mb-4">
            We believe weddings are a labor of love, where every detail is
            thoughtfully executed. Our team becomes personally invested in
            crafting your dream wedding reception, ensuring a seamless and
            unforgettable experience. With our chef’s dedication to culinary
            excellence, we create unique dishes that delight and astonish,
            making the planning process enjoyable and fun.
          </p>
        </div>
        <img
          src={wedding}
          alt="wedding"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <img src={social} alt="social" className="w-full h-auto object-cover" />
        <div className="flex flex-col justify-center">
          <p className="text-gray-600">TOASTING TO MILESTONES</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl py-4 italic font-serif">
            Social Celebrations
          </h2>
          <p className="text-gray-600 mb-4">
            We bring your vision to life for any social event, no matter the
            size. With meticulous planning and personalized touches, we excel at
            executing flawless affairs that cater to diverse guest preferences
            and desires. Our passion for crafting delicious food ensures that
            every guest feels special, creating a fun and exciting atmosphere
            that exceeds expectations.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div className="flex flex-col justify-center">
          <p className="text-gray-600">A SENSE OF COMMUNITY</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl py-4 italic font-serif">
            Corporate Events
          </h2>
          <p className="text-gray-600 mb-4">
            We understand the importance of brand representation for corporate
            events. By delving into your company and event goals, we provide
            tailored recommendations and create a customized experience that
            exceeds expectations. From menu suggestions to service style, we
            cater to any corporate occasion, managing everything within the
            event walls for a flawlessly coordinated gathering.
          </p>
        </div>
        <img
          src={corporate}
          alt="corporate"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default Eventsone;
