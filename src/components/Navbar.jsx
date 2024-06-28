import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ff.png";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "CUISINE", href: "/cuisine" },
  { label: "EVENTS", href: "/events" },
  { label: "CONTACT", href: "/contact" },
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b bg-white">
      <div className="container px-4 mx-auto relative text-sm flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img className="h-16 w-16 mr-2" src={logo} alt="logo" />
          </Link>
          <span className="text-2xl font-bold tracking-tight">
            Feast Fables
          </span>
        </div>
        <ul className="hidden lg:flex ml-14 space-x-12">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.href} className="relative hover:text-orange-700">
                {item.label}
                <div className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent transition-all duration-300"></div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden md:flex flex-col justify-end">
          <button onClick={handleNavbar}>
            {mobileDrawerOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed top-16 right-0 z-20 bg-white w-full p-12 flex flex-col justify-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link
                    to={item.href}
                    onClick={handleNavbar} // Close mobile drawer on link click
                    className="relative hover:text-orange-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
