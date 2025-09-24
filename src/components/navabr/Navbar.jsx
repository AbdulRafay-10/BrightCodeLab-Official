import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { servicesItems } from "../constants/Constant";
import logo1 from "../../assets/images/BrightCodeLab-05.png";
import logo from "../../assets/images/BrightCodeLab-09 (1).png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-8 py-4 transition duration-300 ${isScrolled ? "bg-white text-black" : "text-white"}`}
      style={{ height: "70px" }}
    >
      <div
        className="flex items-center justify-between"
        style={{ height: "100%" }}
      >
        <div className="relative w-[180px] h-[150px] ml-[-70px]">
  {/* Base Logo */}
  <img
    src={logo}
    alt="Logo"
    className="absolute top-0 left-0 w-full h-full object-contain z-10"
  />

  {/* Animated Text Behind Logo (only show when scrolled) */}
  {isScrolled && (
    <div
      key={isScrolled} // re-mounts on scroll change, triggers animation
      className="absolute top-1/2 left-[210px] transform -translate-x-1/2 -translate-y-1/2 z-0 text-[25px] font-extrabold whitespace-nowrap"
    >
      <span className="inline-block animate-slide-in-left text-[#00319f]">
        Bright
      </span>
      <span className="inline-block animate-slide-in-left text-[#47b7f7] delay-600 ml-1">
        Code
      </span>
      <span className="inline-block animate-slide-in-left text-[#00319f] delay-900 ml-1">
        Lab
      </span>
    </div>
  )}
</div>

        <div className="hidden lg:flex items-center font-semibold gap-16">
          <Link
            to="/"
            className="hover:border-b-2 hover:border-[#0031a0] transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="hover:border-b-2 hover:border-[#0031a0] transition duration-300"
          >
            About Us
          </Link>
          <div className="lg:block hidden">
            <Dropdown
              title="Services"
              items={servicesItems}
              linkPath="/services"
              isScrolled={isScrolled}
            />
          </div>
          <Link
            to="/projects"
            className="hover:border-b-2 hover:border-[#0031a0] transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/team"
            className="hover:border-b-2 hover:border-[#0031a0] transition duration-300"
          >
            Team
          </Link>
          <a href="#contact">
            <button
              className={`rounded-full h-12 text-center font-bold flex justify-center items-center p-6 overflow-hidden transition duration-[1.5s] hover:scale-105 ${isScrolled ? "bg-[#0f51db] text-white" : "bg-white text-[#0f51db]"}`}
            >
              Contact Us
            </button>
          </a>
        </div>

        {/* Hamburger Menu */}
        <div
          className="lg:hidden p-2 rounded block cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <div className="text-xl font-bold">X</div>
          ) : (
            <div className="space-y-1">
              <div
                className={`${isScrolled ? "bg-black" : "bg-white"} h-1 w-6 rounded`}
              ></div>
              <div
                className={`${isScrolled ? "bg-black" : "bg-white"} h-1 w-6 rounded`}
              ></div>
              <div
                className={`${isScrolled ? "bg-black" : "bg-white"} h-1 w-6 rounded`}
              ></div>
            </div>
          )}
        </div>
      </div>

      {/* Black Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-20"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-black font-medium transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ width: "250px" }}
      >
        <div className="flex items-center w-full pt-3 justify-between px-6">
          <div className="font-bold text-lg">Logo</div>
          <div className="text-xl" onClick={toggleMenu}>
            X
          </div>
        </div>
        <div className="flex flex-col gap-6 p-8">
          <Link
            to="/"
            className="hover:underline transition duration-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="hover:underline transition duration-300"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <div className="lg:hidden block w-full">
            <button
              className="flex items-center justify-between w-full text-black font-semibold py-2"
              onClick={() => setIsServicesOpen((prev) => !prev)}
            >
              Services
              <span className="ml-2 text-xs">
                {isServicesOpen ? "▲" : "▼"}
              </span>
            </button>
            {isServicesOpen && (
              <div className="pl-4 flex flex-col gap-2">
                <Link to="/web-development" className="py-1 text-black hover:text-primaryBlue" onClick={closeMenu}>Web Development</Link>
                <Link to="/mobile-development" className="py-1 text-black hover:text-primaryBlue" onClick={closeMenu}>Mobile Development</Link>
                <Link to="/ui-ux-design" className="py-1 text-black hover:text-primaryBlue" onClick={closeMenu}>UI/UX Design</Link>
                <Link to="/ai-embedded-applications" className="py-1 text-black hover:text-primaryBlue" onClick={closeMenu}>AI Embedded Application</Link>
                <Link to="/dedicated-teams" className="py-1 text-black hover:text-primaryBlue" onClick={closeMenu}>Dedicated Teams</Link>
              </div>
            )}
          </div>

          <Link
            to="/projects"
            className="hover:underline transition duration-300  "
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="/team"
            className="hover:underline transition duration-300"
            onClick={closeMenu}
          >
            Team
          </Link>
          <a href="#contact">
            <button className="button" onClick={closeMenu}>
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;