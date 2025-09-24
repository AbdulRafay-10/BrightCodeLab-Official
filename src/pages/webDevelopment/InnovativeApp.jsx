import React, { useState } from "react";
import { motion } from "framer-motion";
import DynamicHeading from "../../components/DynamicHeading/DynamicHeading";
import DynamicModal from "../../components/ModalComponent/ModalComponent";
import DatePicker from "react-date-picker";
import clock from "../../assets/images/clock.svg";
import camera from "../../assets/images/camera.svg";
import leftarrow from "../../assets/images/leftarrow.svg";
import rightarrow from "../../assets/images/rightarrow.svg";
import calender from "../../assets/images/calender.svg";
import globe from "../../assets/images/globe.svg";
import TimeSlots from "../../components/TimeSlots/TimeSlots";
import Input from "../../components/Input/Input";
import PhoneInput from "react-phone-input-2";
import OptimizedImage from "../../components/OptimizedImage";
import "react-phone-input-2/lib/style.css";

const InnovativeApp = ({
  dynamicHeading,
  className = "",
  headingClassName = "",
  description,
  descriptionClassName = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);
  const [value, onChange] = useState(new Date());

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleSlotSelect = (slot) => setSelectedSlot(slot);
  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  return (
    <>
      <div
        className={`w-full gap-3 flex justify-center flex-col items-center mx-auto ${className}`}
      >
        {/* Heading animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className={`w-full mx-auto ${headingClassName}`}
        >
          <DynamicHeading
            mainText={dynamicHeading.mainText}
            highlightedParts={dynamicHeading.highlightedParts}
          />
        </motion.div>

        {/* Paragraph animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false }}
          className={`text-lg w-full text-center text-textBlack font-medium ${descriptionClassName}`}
        >
          {description}
        </motion.div>

        {/* Button animation */}
        <motion.button
          onClick={handleOpenModal}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
          className="mt-6 border px-8 py-3 rounded font-semibold text-lg border-primaryBlue text-primaryBlue hover:bg-primaryBlue hover:text-white transition-colors duration-300 ease-in-out"
        >
          Meet Our Experts!
        </motion.button>
      </div>

      <DynamicModal
        className="lg:w-[70%] w-11/12 z-40"
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <div className="w-full flex flex-col overflow-hidden py-8">
          <h1 className="text-xl font-bold">
            <span className="text-primaryBlue mr-1">Let's</span>meet our experts
          </h1>
          <p className="text-base">
            <span className="text-primaryBlue">
              Looking for expert guidance?
            </span>{" "}
            Book a consultation with us and select a time slot that suits you
            best.
          </p>

          {/* Step 1 */}
          <div
            className={`transition-all justify-between duration-200 ease-in-out transform ${step === 1 ? "translate-x-0 opacity-100" : step > 1 ? "translate-x-full opacity-0" : "translate-x-[-100%] opacity-0"}`}
          >
            {step === 1 && (
              <>
                <div className="flex w-full lg:flex-row flex-col relative">
                  <div className="w-full flex min-h-[380px] flex-col flex-wrap gap-4">
                    <div className="relative">
                      <DatePicker
                        className="relative left-0 top-10"
                        shouldCloseCalendar={() => false}
                        isOpen={true}
                        onChange={onChange}
                        value={value}
                      />
                    </div>
                  </div>

                  {/* Image info section animates from right */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                    className="ml-8 pt-8"
                  >
                    <h1 className="text-2xl font-bold my-2">
                      Let's <span className="text-primaryBlue">Meet</span>
                    </h1>
                    <div className="flex gap-4 items-center my-2">
                      <OptimizedImage src={clock} alt="clock" />
                      <p className="text-textBlack text-lg">30 mins</p>
                    </div>
                    <div className="flex gap-4 items-center">
                      <OptimizedImage src={camera} alt="camera" />
                      <p className="text-textBlack text-lg">
                        Web conferencing details provided upon confirmation.
                      </p>
                    </div>
                    <div className="w-full">
                      <TimeSlots
                        slots={[
                          "09:00 AM",
                          "10:15 AM",
                          "11:30 AM",
                          "01:00 PM",
                          "02:15 PM",
                          "03:30 PM",
                        ]}
                        onSlotSelect={handleSlotSelect}
                        className="grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto"
                      />
                    </div>
                    <div className="pt-4">Time Zone</div>
                  </motion.div>
                </div>
                <div className="w-full px-4 flex justify-end items-end mt-10">
                  <button
                    onClick={handleNext}
                    className="bg-primaryBlue text-white flex items-center px-2 justify-center gap-2 rounded py-2 w-28 font-bold text-lg"
                  >
                    Next <OptimizedImage src={leftarrow} alt="" />
                  </button>
                </div>
              </>
            )}
          </div>

          {/* Step 2 */}
          <div
            className={`transition-all duration-500 ease-in-out transform ${step === 2 ? "translate-x-0 opacity-100" : step > 2 ? "translate-x-full opacity-0" : "translate-x-[-100%] opacity-0"}`}
          >
            {step === 2 && (
              <div className="w-full">
                <div className="w-full flex flex-wrap lg:flex-nowrap justify-between gap-6 pt-6 items-start">
                  {/* Left Side - Meeting Details */}
                  <div className="lg:w-1/2 w-full">
                    <h1 className="text-lg font-bold">Meeting Details</h1>
                    <div className="flex gap-4 items-center my-4">
                      <OptimizedImage src={clock} alt="clock" />
                      <p className="text-textBlack text-lg">30 mins</p>
                    </div>
                    <div className="flex gap-4 items-center my-4">
                      <OptimizedImage src={camera} alt="camera" />
                      <p className="text-textBlack text-lg">
                        Web conferencing details provided upon confirmation.
                      </p>
                    </div>
                    <div className="flex gap-4 items-center my-4">
                      <OptimizedImage src={calender} alt="calendar" />
                      <p className="text-textBlack text-lg">
                        1:10 PM - 1:40 PM, Monday, December 30, 2024
                      </p>
                    </div>
                    <div className="flex gap-4 items-center my-4">
                      <OptimizedImage src={globe} alt="globe" />
                      <p className="text-black text-lg">
                        GMT+5:00 - Asia/Karachi
                      </p>
                    </div>
                  </div>

                  {/* Right Side - Enter Details */}
                  <div className="lg:w-1/2 w-full px-2">
                    <h1 className="text-lg font-bold">Enter Details</h1>
                    <div className="pt-4">
                      <Input
                        name="username"
                        type="text"
                        placeholder="Enter full name"
                        value={""}
                        onChange={() => {}}
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder="test@gmail.com"
                        value={""}
                        onChange={() => {}}
                      />
                      <PhoneInput
                        country={"pk"}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                        inputClass="!w-full !border !focus:outline-none !border-[#d4ebfc] !rounded-[8px] !bg-[#fff] !shadow-[#1018280d] !h-[40px] !text-sm"
                        buttonClass="!border !focus:outline-none !border-[#d4ebfc] !border-r-0 !rounded-tl-[8px] !rounded-bl-[8px] !bg-[#fff] !shadow-[#1018280d]"
                      />
                      <div className="flex w-full mt-4">
                        <textarea
                          placeholder="Enter a description here"
                          className="w-full border h-32 focus:outline-none border-[#d4ebfc] rounded-[8px] bg-[#fff] shadow-[#1018280d] px-4 py-2 text-base resize-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between pt-12 px-2 items-center">
                  <button
                    onClick={handlePrev}
                    className="text-black flex items-center px-2 border border-primaryBlue hover:border-none justify-center gap-2 rounded py-2 w-28 font-bold text-lg"
                  >
                    <OptimizedImage src={rightarrow} alt="" /> Back
                  </button>
                  <button className="bg-primaryBlue text-white flex items-center justify-center rounded py-3 px-6 font-bold text-lg">
                    Schedule Event
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DynamicModal>
    </>
  );
};

export default InnovativeApp;
