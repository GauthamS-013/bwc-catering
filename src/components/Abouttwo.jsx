import React from "react";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";
import about5 from "../assets/about5.jpg";
import about6 from "../assets/about6.jpeg";

const Abouttwo = () => {
  return (
    <div className="relative my-10 w-full">
      <div className="w-full max-h-[400px] overflow-hidden relative">
        <img
          src={about3}
          alt="aboutthree"
          className="w-full h-auto object-cover max-h-[400px]"
        />

        <div className="absolute inset-0 flex items-center justify-center my-10">
          <h1 className="text-4xl md:text-6xl sm:text-4xl text-white italic font-serif text-center px-4">
            Our Approach
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div className="flex flex-col justify-center">
          <h2 className="md:text-4xl sm:text-3xl text-2xl py-4 italic font-serif">
            Elevating
          </h2>
          <p className="text-gray-600 mb-4">
            Experience culinary artistry like never before with our meticulously
            crafted menus and attention to detail. We specialize in creating
            unforgettable dining experiences tailored to your unique tastes and
            preferences. From elegant corporate affairs to intimate gatherings,
            each event is infused with creativity and flavor, ensuring every
            bite is a masterpiece.
          </p>
        </div>
        <img src={about4} alt="Event1" className="w-full h-auto object-cover" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <img src={about5} alt="Event2" className="w-full h-auto object-cover" />
        <div className="flex flex-col justify-center">
          <h2 className="md:text-4xl sm:text-3xl text-2xl py-4 italic font-serif">
            Innovative
          </h2>
          <p className="text-gray-600 mb-4">
            Embrace the future of catering with our innovative solutions
            designed to exceed your expectations. We blend cutting-edge
            techniques with the freshest ingredients to deliver dishes that
            inspire and delight. Whether you're planning a lavish wedding
            reception or a casual social gathering, our commitment to innovation
            ensures a seamless and memorable culinary experience for you and
            your guests.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        <div className="flex flex-col justify-center">
          <h2 className="md:text-4xl sm:text-3xl text-2xl py-4 italic font-serif">
            Revolutionary
          </h2>
          <p className="text-gray-600 mb-4">
            Step into a new era of event dining where creativity meets
            precision. We're dedicated to revolutionizing the way you experience
            food at your events, offering personalized menus that reflect the
            latest culinary trends and dietary preferences. With a focus on
            quality and innovation, our team ensures that every event is not
            only catered to perfection but also leaves a lasting impression on
            your guests.
          </p>
        </div>
        <img src={about6} alt="Event3" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Abouttwo;
