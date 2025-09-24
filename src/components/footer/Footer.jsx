import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/BrightCodeLab-05.png";
import logo1 from "../../assets/images/BrightCodeLab-09 (1).png";

const Footer = () => {
  return (
    <div className="bg-white px-4 py-6">
      <div className="grid grid-cols-12 gap-8 px-6">
        <div className="col-span-12 lg:col-span-4 md:col-span-6">
          <div className="mt-12 -ml-8">
            <div className="relative w-[150px] h-[120px] ml-[-30px] mt-[-90px]">
                      <img
                        src={logo1}
                        alt="Logo 1"
                        className="absolute top-0 left-0 w-full h-full object-contain z-10"
                      />
                      <img
                        src={logo}
                        alt="Logo 2"
                        className="absolute top-[3px] left-[120px] w-full h-full object-contain z-20 scale-[3.00]"
                      />
                    </div>
            
          </div>
          <p className="tracking-tighter font-medium text-black  md:text-lg text-base  leading-relaxed mt-[-30px]">
            Bright Code Lab Technologies is a leading software design and
            development company working in HealthCare, FinTech, Education, ERP,
            eCommerce, Compliance Management, Telecommunication, MarketPlace,
            Logistics, and Supply Chain Management domains. We specialize in
            AI-embedded software solutions and Enterprise Business Solutions.
          </p>
        </div>
        <div className="lg:col-span-3 col-span-5">
          <h1 className="text-xl font-semibold text-black">Services</h1>
          <div className="mt-2 font-medium flex flex-col text-black pt-4 space-y-2 text-start">
            <Link
              to="/web-development"
              className="cursor-pointer hover:text-black duration-[0.2s]"
            >
              {" "}
              Web Development
            </Link>
            <Link
              to="/mobile-development"
              className="cursor-pointer hover:text-black duration-[0.2s]"
            >
              Mobile Development
            </Link>
            <Link
              to="/ui-ux-design"
              className="cursor-pointer hover:text-black duration-[0.2s]"
            >
              UI UX Design
            </Link>
            <Link
              to="/product-scope"
              className="cursor-pointer hover:text-black duration-[0.2s]"
            >
              Product Scope
            </Link>
            <Link
              to="/ai-embedded-applications"
              className="cursor-pointer hover:text-black duration-[0.2s]"
            >
              AI Embedded Application
            </Link>
            <Link
              to="/dedicated-teams"
              className="cursor-pointer hover:text-black duration-[0.2s]"
            >
              Dedicated Teams
            </Link>
          </div>
        </div>

        {/* Third Column */}
        <div className=" lg:col-span-2 col-span-5">
          <h2 className="font-bold text-xl text-black">Quick Links</h2>
          <div className="font-medium text-black flex flex-col pt-7 w-[10rem] space-y-3">
            <Link to="/" className="hover:text-black duration-[0.2s]">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-black duration-[0.2s]">
              About Us
            </Link>
            <Link to="services" className="hover:text-black duration-[0.2s]">
              Services
            </Link>
            <Link to="/projects" className="hover:text-black duration-[0.2s]">
              Projects
            </Link>
            <Link to="/contact-us" className="hover:text-black duration-[0.2s]">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 col-span-6">
          <h2 className="font-bold text-xl text-black">Contact Us</h2>
          <div className="font-medium text-black pt-7 w-[10rem] space-y-3">
            <div className="flex gap-2">
              <img src="/images/Phone.svg" alt="" />
             <a href="https://wa.me/+923151503181"> <p className="hover:text-black cursor-pointer duration-[0.2s]">
                +92 3151503181
              </p></a>
            </div>
            <div className="flex gap-2">
              <img src="/images/Email.svg" alt="" />
             <a href="mailto:brightcodelab@gmail.com?subject=Project Inquiry&body=Hello, I would like to discuss a project."> <p className="hover:text-black cursor-pointer duration-[0.2s]">
                brightcodelab32@gmail.com
              </p></a>
            </div>
            <div className="flex gap-2 w-[160%]">
              <img className="mb-[80%] mt-1 " src="/images/Location.svg" alt="" />
              <a href="https://www.google.com/maps/place/Peshawar+Zoo/@34.0169613,71.4874339,638m/data=!3m2!1e3!4b1!4m6!3m5!1s0x38d916da14063b05:0x36e1c2e2c3b5ab6e!8m2!3d34.0169569!4d71.4900088!16s%2Fg%2F11f15b_p9y?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"><p className="hover:text-black   duration-[0.2s]">
                 University Town Peshawar, KPK, Pakistan
              </p></a>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center pb-6">
        <hr className="mx-8" />
        <p className=" text-slate-400  pt-4">
          @ 2025 Bright code lab custom software development
        </p>
      </div>
    </div>
  );
};

export default Footer;