import React from "react";

const EventRequest = () => {
  return (
    <div className="w-full py-16 px-4">
      <p className="text-center text-gray-600">READY TO GET IN TOUCH?</p>
      <h2 className="text-center md:text-4xl sm:text-3xl text-2xl py-2 italic font-serif">
        Make an Event Request
      </h2>
      <div className="max-w-[1240px] mx-auto my-10">
        <div className="flex flex-col md:flex-row mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full md:w-1/2 px-4 py-2 mb-2 md:mb-0 md:mr-2 border border-gray-400 focus:outline-none focus:border-orange-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-1/2 px-4 py-2 mb-2 md:mb-0 md:ml-2 border border-gray-400 focus:outline-none focus:border-orange-500"
          />
        </div>
        <textarea
          placeholder="Message"
          className="w-full px-4 py-2 mb-4 border border-gray-400 focus:outline-none focus:border-orange-500"
        />
        <a
          href="mailto:gauthams779@gmail.com?subject=Event Request"
          className="w-[200px] my-8 mx-auto text-black hover:bg-orange-300 py-3 text-center block border border-black"
        >
          GET IN TOUCH
        </a>
      </div>
    </div>
  );
};

export default EventRequest;
