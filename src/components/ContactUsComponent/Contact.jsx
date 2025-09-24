import React, { useState } from "react";
import Input from "../Input/Input";
import DynamicDropdown from "../DynamicDropdown/DynamicDropdown";
import { motion } from "framer-motion";
 
const Contact = ({ options, budget }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    number: "",
    message:"",
    service: "",
   budget: "",
  });

  const handleDropdownChange = (name, value) => {
  setFormData((prev) => ({ ...prev, [name]: value }));
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  

 const handleSubmit = () => {
  const subject = encodeURIComponent("New Contact Form Submission");
  const body = encodeURIComponent(
    `Name: ${formData.username}\n` +
    `Email: ${formData.email}\n` +
    `Phone: ${formData.number}\n` +
    `Service Needed: ${formData.service?.label || ""}\n` +
    `Budget: ${formData.budget?.label || ""}\n` +
    `Message: ${formData.message}`
  );

  window.location.href = `mailto:contact@brightcodelab.net?subject=${subject}&body=${body}`;
};

  return (
    <div id="contact">
    <div className="w-full my-6 px-6 bg-[#f2f7fb] py-10">
      <div className="flex items-start justify-center w-full flex-wrap">
        {/* Left Section - Animate from Left */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="lg:w-1/2 md:w-3/4 w-full px-3"
        >
          <h1 className="lg:text-[40px] md:text-3xl text-xl font-bold ">
            We’re just a <span className="text-primaryBlue">message away!</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-[#111827]">
            Tell us briefly about your idea or challenge, and our product and tech experts will reach out within 24 hours with the next best steps.
          </p>
          {/* Replaced video area with explanatory text */}
          <div className="w-11/12 my-8">
            <ul className="list-disc pl-6 space-y-3 text-sm md:text-base text-[#111827] leading-relaxed">
              <li>Quick response within 24 hours – no waiting around.</li>
              <li>Direct access to our product & tech experts (no middlemen).</li>
              <li>Personalized solutions tailored to your idea or challenge.</li>
              <li>Transparent process – we guide you step by step.</li>
              <li>Dedicated support from start to finish.</li>
              <li>Clear communication without technical jargon.</li>
              <li>Flexible engagement – we adapt to your needs & budget.</li>
              <li>Secure and confidential handling of your project details.</li>
              <li>Expert advice on best practices, trends, and technologies.</li>
              <li>Long-term partnership focused on your growth.</li>

            </ul>
          </div>
        </motion.div>

        {/* Right Section - Animate from Right */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="lg:w-1/2 md:w-3/4 w-full px-3"
        >
          <h1 className="lg:text-[30px] text-xl font-bold">Send Us a Message</h1>
          <div className="flex w-full flex-wrap mt-4">
            <div className="md:w-1/2 w-full">
              <Input
                name="username"
                type="text"
                placeholder="Enter full name"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="md:w-1/2 w-full">
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex w-full flex-wrap">
            <div className="md:w-1/2 my-2 w-full">
              <DynamicDropdown options={options} placeholder="Service I need" value={formData.service}
  onChange={(value) => handleDropdownChange("service", value)} />
            </div>
            <div className="md:w-1/2 w-full my-2">
              <DynamicDropdown options={budget} placeholder="Your Budget" value={formData.budget}
  onChange={(value) => handleDropdownChange("budget", value)} />
            </div>
          </div>
          <Input
                name="number"
                type="text"
                placeholder="Enter your PhoneNumber"
                className="mt-[-100px]"
                value={formData.number}
                onChange={handleChange}
              />
          <div className="flex w-full mt-4">
            <textarea
            name="message"
              placeholder="Enter your message"
              className="w-full border h-44 focus:outline-none border-[#d4ebfc] rounded-[8px] bg-[#fff] shadow-[#1018280d] px-4 py-2 text-sm resize-none"
              value={formData.massege}
              onChange={handleChange}
            />
          </div>
          <button
          onClick={handleSubmit}
          className="mt-6 border md:w-52 w-full md:py-3 py-2 rounded font-semibold text-lg border-primaryBlue text-white hover:bg-white bg-primaryBlue hover:text-primaryBlue transition-colors duration-300 ease-in-out">
            Send us a message!
          </button>
        </motion.div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
