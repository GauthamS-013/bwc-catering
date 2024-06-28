import React from "react";
import cuisine1 from "../assets/dosa.png";
import cuisine2 from "../assets/cuisine2.webp";
import snacks from "../assets/snacks.jpg";
import burger from "../assets/burger.jpg";

const Cuisineone = () => {
  return (
    <div className="relative w-full">
      <div className="w-full max-h-[600px] overflow-hidden relative mb-10">
        <img
          src={cuisine1}
          alt="cuisineone"
          className="w-full h-auto object-cover max-h-[600px]"
        />

        <div className="absolute inset-0 flex items-center justify-center my-10">
          <div className="py-2 px-4 ">
            <h1 className="text-4xl md:text-7xl sm:text-5xl text-white italic font-serif text-center">
              Cuisine
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-center text-gray-600">THE PERFECT PAIRING</p>
        <h2 className="text-center md:text-4xl sm:text-3xl text-2xl py-2 italic font-serif mb-10">
          Incredible Food & Impeccable Service
        </h2>
        <div className="max-w-[1240px] mx-auto">
          <p className="text-center text-gray-600">
            At Feast Fables Catering, we tailor every detail of your event to
            reflect your vision. Our innovative dishes and top-tier service
            ensure an unforgettable dining experience.
          </p>
        </div>

        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-8">
          <div className="flex flex-col items-center">
            <img
              src={cuisine2}
              alt="cuisine2"
              className="w-[350px] h-[400px] object-cover"
            />
            <h2 className="text-center mt-4 text-2xl text-black italic font-serif mb-8">
              A Blend of Local and International Flavors
            </h2>
            <p className="text-center text-gray-600">
              At Feast Fables, we blend Kozhikode's rich culinary traditions
              with global flavors, crafting menus that surprise and delight
              every palate.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={snacks}
              alt="snacks"
              className="w-[350px] h-[400px] object-cover"
            />
            <h2 className="text-center mt-4 text-2xl text-black italic font-serif mb-8">
              Creative Dishes & Beautiful Presentations
            </h2>
            <p className="text-center text-gray-600">
              Our team brings creativity to every dish, offering unique flavors
              and eye-catching presentations. We stay ahead of culinary trends
              to provide the best dining experience.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={burger}
              alt="burger"
              className="w-[350px] h-[400px] object-cover"
            />
            <h2 className="text-center mt-4 text-2xl text-black italic font-serif mb-8">
              Tailored to Your Taste
            </h2>
            <p className="text-center text-gray-600">
              Feast Fables is dedicated to making your event special. We offer
              diverse menu options and can create a custom menu just for you.
              Your vision is our priority, and we're here to make it a reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisineone;
