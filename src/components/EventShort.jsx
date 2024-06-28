import React from "react";
import { Link } from "react-router-dom";
import eventShortImage from "../assets/events1.jpeg";

const EventShort = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="text-gray-600">EVENTS</p>
          <h2 className="md:text-4xl sm:text-3xl text-2xl py-4 italic font-serif">
            An Unparalleled Experience
          </h2>
          <p className="text-gray-600 mb-4">
            When it comes to your event, we provide the exceptional turnkey
            experience you deserve. We take the time to understand your vision
            and go above and beyond to ensure every guest is cared for and every
            bite is exceptional. From logistics and loading docks to seamless
            on-site preparations and dietary restrictions, we meticulously cover
            every detail in advance so you can relax and enjoy time with your
            guests.
          </p>
          <Link to="/events">
            <button className="text-black w-[200px] my-4 mx-auto md:mx-0 hover:text-orange-700 bg-white">
              - EXPLORE OUR EVENTS
            </button>
          </Link>
        </div>
        <img
          src={eventShortImage}
          alt="Event"
          className="w-[500px] mx-auto my-4"
        />
      </div>
    </div>
  );
};

export default EventShort;
