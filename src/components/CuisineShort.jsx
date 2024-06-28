import React from "react";
import { Link } from "react-router-dom";
import biriyani from "../assets/biriyani.jpg";
import mojitos from "../assets/mojitos.jpg";
import arrangement from "../assets/arrangement.jpg";

const CuisineShort = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-center text-gray-600">
        DELECTABLE CUISINE COUPLED WITH REFRESHING BEVERAGES
      </p>
      <h2 className="text-center md:text-4xl sm:text-3xl text-2xl py-2 italic font-serif">
        Exquisite Culinary Mastery
      </h2>

      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-8">
        <div className="flex flex-col items-center">
          <img
            src={biriyani}
            alt="biriyani"
            className="w-[350px] h-[400px] object-cover"
          />
          <h2 className="text-center mt-4 text-2xl text-gray-600 italic font-serif">
            FOOD
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={mojitos}
            alt="mojitos"
            className="w-[350px] h-[400px] object-cover"
          />
          <h2 className="text-center mt-4 text-2xl text-gray-600 italic font-serif">
            BEVERAGE
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={arrangement}
            alt="arrangements"
            className="w-[350px] h-[400px] object-cover"
          />
          <h2 className="text-center mt-4 text-2xl text-gray-600 italic font-serif">
            EVENTS
          </h2>
        </div>
      </div>

      <div className="flex justify-center my-10">
        <Link to="/cuisine">
          <button className="bg-orange-500 hover:bg-gray-600 text-white w-[350px] mx-auto my-6 py-3">
            GET A TASTE OF OUR OFFERINGS
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CuisineShort;
