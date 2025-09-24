import React, { useState } from "react";
import SpeedDialComponent from "./SpeedDial";
import BrightCode from "../../assets/images/BG.jpeg.jpg";
import DynamicModal from "../../components/ModalComponent/ModalComponent";
import DatePicker from "react-date-picker";
import TimeSlots from "../../components/TimeSlots/TimeSlots";
import Input from "../../components/Input/Input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import clock from "../../assets/images/clock.svg";
import camera from "../../assets/images/camera.svg";
import calender from "../../assets/images/calender.svg";
import globe from "../../assets/images/globe.svg";
import leftarrow from "../../assets/images/leftarrow.svg";
import rightarrow from "../../assets/images/rightarrow.svg";
import OptimizedImage from "../OptimizedImage";
import TechPioneers from "../../assets/images/TechPioneers.png"
import Tourism from "../../assets/images/Tourism.png"
import Islamia from "../../assets/images/Islamia.png"

function HomeImg() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedTimeZone, setSelectedTimeZone] = useState("GMT+5:00 - Asia/Karachi");
  const [phone, setPhone] = useState("");
  const [value, onChange] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: ""
  });

  // Generate time slots from 12 AM to 10 PM with 2-hour intervals
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour += 2) {
      const formattedHour = hour % 12 || 12;
      const period = hour < 12 ? "AM" : "PM";
      slots.push(`${formattedHour}:00 ${period}`);
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Time zone options
  const timeZones = [
    "GMT+5:00 - Asia/Karachi",
    "GMT+0:00 - Europe/London",
    "GMT-5:00 - America/New_York",
    "GMT+1:00 - Europe/Paris",
    "GMT+3:00 - Europe/Moscow",
    "GMT+8:00 - Asia/Shanghai",
    "GMT+10:00 - Australia/Sydney"
  ];


  const handleOpenModal = () => {
    setIsModalOpen(true);
    setStep(1);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleNext = () => {
    if (selectedSlot) {
      setStep(step + 1);
    } else {
      alert("Please select a time slot");
    }
  };

  const handlePrev = () => setStep(step - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // === MAILTO FUNCTION ===
  const handleScheduleEvent = () => {
    const subject = encodeURIComponent("New Consultation Booking");

    const body = encodeURIComponent(
      `NAME: ${formData.name}\n` +
      `EMAIL: ${formData.email}\n` +
      `PHONE: ${phone}\n` +
      `DESCRIPTION: ${formData.description}\n` +
      `DATE: ${value.toDateString()}\n` +
      `TIME: ${selectedSlot}\n` +
      `TIME ZONE: ${selectedTimeZone}`
    );

    window.location.href = `mailto:contact@brightcodelab.net?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative min-h-screen">
      <img
        src={BrightCode}
        alt="Background"
        className="w-full h-screen object-cover cursor-pointer"
      />
      <div className="absolute inset-0 bg-black opacity-50 z-0" />
      <div className="absolute inset-0 pt-20 md:px-8 px-4 sm:pt-20 md:pt-28 lg:pt-48 text-white py-4 flex flex-col items-start justify-center text-center">
        <p
          className="font-bold tracking-tight text-5xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-8xl lg:tracking-[0.43rem]"
        >
          <span style={{ color: "#46bdff" }}>Zone</span> of
        </p>
        <p
          className="font-bold my-2 tracking-tight text-4xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-8xl lg:tracking-[0.33rem]"
        >
          Advance Platforms
        </p>
        <p
          className="font-bold my-4 text-base xs:text-lg sm:text-xl lg:text-3xl lg:tracking-[1rem]"
        >
          AND <span className="font-bold">TECH APPLICATIONS</span>
        </p>
        <p
          className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl my-2"
        >
          Custom Software Design & Development
        </p>
        <div
          className="flex items-center justify-center text-white font-semibold border rounded-lg w-80 h-16 hover:bg-customBlue transition duration-[1.5s] backdrop-blur-lg bg-transparent border-[#406c78] 
              shadow-[0px_4px_10px_rgba(64,108,120,0.6)] 
              p-6 overflow-hidden 
              hover:shadow-[0px_0px_20px_5px_rgba(64,108,120,0.8)] hover:scale-105"
          onClick={handleOpenModal}
        >
          <button className="w-full h-full flex items-center justify-center">
            Book a Consultation - it's free
          </button>
        </div>

        <div className="mt-10 flex flex-col text-start justify-start">
  <h2 className="text-white text-2xl font-bold ">Awarded By</h2>
  <div className="flex flex-wrap justify-start ml-[-40px] items-start mb-24 mt-4 ">
    
    <img src={Tourism} alt="Award Logo 3" className="h-16 ml-8 w-auto object-contain brightness-0 invert-[1]" /><img src={TechPioneers} alt="Award Logo 2" className="h-16 ml-8 w-auto object-contain brightness-0 invert-[1]" />
    <img src={Islamia} alt="Award Logo 4" className="h-16  ml-8 w-auto object-contain brightness-0 invert-[1]" />
  </div>
</div>
      </div>

      <div className="absolute -bottom-10 right-2 z-10">
        <SpeedDialComponent />
      </div>

      {/* === MODAL === */}
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
            <span className="text-primaryBlue">Looking for expert guidance?</span>{" "}
            Book a consultation with us and select a time slot that suits you best.
          </p>

          {/* === STEP 1 === */}
          {step === 1 && (
            <>
              <div className="flex w-full lg:flex-row flex-col relative">
                <div className="w-full flex min-h-[380px] flex-col flex-wrap gap-4">
                  <div className="relative top-12 left-0 scale-90 md:scale-90">
                    <DatePicker
  className="relative left-0 md:left-[-20px]"
  shouldCloseCalendar={() => false}
  isOpen={true}
  onChange={onChange}
  value={value}
  calendarProps={{
    tileDisabled: ({ date }) =>
      date < new Date(new Date().setHours(0, 0, 0, 0)),
    tileClassName: ({ date }) =>
      date < new Date(new Date().setHours(0, 0, 0, 0))
        ? "bg-red-200 text-red-600 opacity-50 cursor-not-allowed"
        : ""
  }}
/>
                  </div>
                </div>

                <div className="ml-12 pt-8">
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
                      slots={timeSlots}
                      onSlotSelect={setSelectedSlot}
                      className="grid grid-rows-3 grid-flow-col gap-4 overflow-x-auto"
                    />
                  </div>
                  <div className="pt-4">Time Zone</div>
                  <div className="relative mt-2">
                    <select
                      className="w-full p-2 pr-12 border rounded appearance-none"
                      value={selectedTimeZone}
                      onChange={(e) => setSelectedTimeZone(e.target.value)}
                    >
                      {timeZones.map((zone, index) => (
                        <option key={index} value={zone}>
                          {zone}
                        </option>
                      ))}
                    </select>
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 -rotate-90">
                      <OptimizedImage src={rightarrow} alt="expand" />
                    </span>
                  </div>
                </div>
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

          {/* === STEP 2 === */}
          {step === 2 && (
            <>
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
                      {selectedSlot}, {value.toDateString()}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center my-4">
                    <OptimizedImage src={globe} alt="globe" />
                    <p className="text-black text-lg">{selectedTimeZone}</p>
                  </div>
                </div>

                {/* Right Side - Enter Details */}
                <div className="lg:w-1/2 w-full px-2">
                  <h1 className="text-lg font-bold">Enter Details</h1>
                  <div className="pt-4">
                    <Input
                      name="name"
                      type="text"
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="test@gmail.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <PhoneInput
                      country={"pk"}
                      value={phone}
                      onChange={setPhone}
                      inputClass="!w-full !border !focus:outline-none !border-[#d4ebfc] !rounded-[8px] !bg-[#fff] !shadow-[#1018280d] !h-[40px] !text-sm"
                      buttonClass="!border !focus:outline-none !border-[#d4ebfc] !border-r-0 !rounded-tl-[8px] !rounded-bl-[8px] !bg-[#fff] !shadow-[#1018280d]"
                    />
                    <div className="flex w-full mt-4">
                      <textarea
                        name="description"
                        placeholder="Enter a description here"
                        className="w-full border h-32 focus:outline-none border-[#d4ebfc] rounded-[8px] bg-[#fff] shadow-[#1018280d] px-4 py-2 text-base resize-none"
                        value={formData.description}
                        onChange={handleInputChange}
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
                <button
                  onClick={handleScheduleEvent}
                  className="bg-primaryBlue text-white flex items-center justify-center rounded py-3 px-6 font-bold text-lg"
                >
                  Schedule Event
                </button>
              </div>
            </>
          )}
        </div>
      </DynamicModal>
    </div>
  );
}

export default HomeImg;
