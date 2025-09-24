import React, { useState } from "react";

const TimeSlots = ({ slots = [], onSlotSelect, className = "" }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSlotClick = (slot) => {
    setSelectedSlot(slot === selectedSlot ? null : slot);
    if (onSlotSelect) {
      onSlotSelect(slot === selectedSlot ? null : slot);
    }
  };

  return (
    <div className="py-5">
      <h1 className="font-bold text-xl mb-4">Available Slots</h1>
      <div className={`flex gap-4 ${className} max-w-[800px] py-3 custom-scrollbar overflow-x-auto`}>
        {slots.map((slot, index) => (
          <button
            key={index}
            onClick={() => handleSlotClick(slot)}
            className={`h-[40px] w-28 rounded-md min-w-[100px] border text-primaryBlue border-primaryBlue text-center transition ${
              selectedSlot === slot
                ? "bg-[#CAE1F3] text-blue-700"
                : "bg-white text-primaryBlue hover:bg-blue-100"
            }`}
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlots;



