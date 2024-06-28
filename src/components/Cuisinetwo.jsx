import React from "react";
import ingred from "../assets/ingred.jpg";
import mojito from '../assets/mojito.jpg';
import noodle from '../assets/noodles.webp';
import soup from '../assets/soup.jpg';
import momos from '../assets/momos.jpg';
import juice from '../assets/juice.jpg';
import steak from '../assets/steak.jpg';
import paneer from '../assets/paneer.avif';
import cake from '../assets/cake.jpg';

const Menu = () => {
  return (
    <div className="relative my-10 w-full">
    
      <div className="w-full max-h-[400px] overflow-hidden relative mb-8">
        <img
          src={ingred}
          alt="ingredients"
          className="w-full h-auto object-cover max-h-[400px]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-6xl sm:text-4xl text-white italic font-serif text-center px-4">
            Sample Menu
          </h1>
        </div>
      </div>

      
      <div className="container mx-auto px-4">
        
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="mt-4 text-3xl text-black italic font-serif mb-8">Coolers</h2>
            <ul className="grid grid-cols-1 gap-4 text-gray-600">
              <li>Mojito</li>
              <li>Revitalizer</li>
              <li>Iced Tea</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src={mojito}
              alt="Coolers"
              className="w-[500px] mx-auto my-4"
            />
          </div>
        </div>

        
        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="mt-4 text-3xl text-black italic font-serif mb-8">Rice and Noodles</h2>
            <ul className="grid grid-cols-1 gap-4 text-gray-600">
              <li>Chicken Noodles</li>
              <li>Veg Fried Rice</li>
              <li>Egg Noodles</li>
              <li>Egg Fried Rice</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src={noodle}
              alt="Rice and Noodles"
              className="w-[500px] mx-auto my-4"
            />
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="mt-4 text-3xl text-black italic font-serif mb-8">Soups</h2>
            <ul className="grid grid-cols-1 gap-4 text-gray-600">
              <li>Tomato Soup</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src={soup}
              alt="Soups"
              className="w-[500px] mx-auto my-4"
            />
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="mt-4 text-3xl text-black italic font-serif mb-8">Hot Starters</h2>
            <ul className="grid grid-cols-1 gap-4 text-gray-600">
              <li>Momos</li>
              <li>Prawns Fry</li>
              <li>Cheese Balls</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src={momos}
              alt="Hot Starters"
              className="w-[500px] mx-auto my-4"
            />
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="mt-4 text-3xl text-black italic font-serif mb-8">Fresh Fruit Juice</h2>
            <ul className="grid grid-cols-1 gap-4 text-gray-600">
              <li>Orange</li>
              <li>Mango</li>
              <li>Watermelon</li>
              <li>Pineapple</li>
              <li>Mint Lime</li>
              <li>Lime</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src={juice}
              alt="Fresh Fruit Juice"
              className="w-[500px] mx-auto my-4"
            />
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="mt-4 text-3xl text-black italic font-serif mb-8">Steak and Grilled</h2>
            <ul className="grid grid-cols-1 gap-4 text-gray-600">
              <li>Steak</li>
              <li>Salmon Carbonara</li>
              <li>Pan Roasted Chicken</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src={steak}
              alt="Steak and Grilled"
              className="w-[500px] mx-auto my-4"
            />
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="mt-4 text-3xl text-black italic font-serif mb-8">Main Course</h2>
            <ul className="grid grid-cols-1 gap-4 text-gray-600">
              <li>Nadan Kozhikkari</li>
              <li>Butter Chicken</li>
              <li>Paneer Butter Masala</li>
              <li>Chilli Gobi</li>
              <li>Naan</li>
              <li>Chapathi</li>
              <li>Appam</li>
              <li>Puttu</li>
              <li>Porotta</li>
              <li>Chicken Biryani</li>
              <li>Veg Biryani</li>
              <li>Beef Biryani</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src={paneer}
              alt="Main Course"
              className="w-[500px] mx-auto my-4"
            />
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="mt-4 text-3xl text-black italic font-serif mb-8">Desserts</h2>
            <ul className="grid grid-cols-1 gap-4 text-gray-600">
              <li>Cake</li>
              <li>Brownie</li>
              <li>Ice Cream</li>
              <li>Gulab Jamun</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <img
              src={cake}
              alt="Desserts"
              className="w-[500px] mx-auto my-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
