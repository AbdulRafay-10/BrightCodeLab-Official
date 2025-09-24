import React, { useEffect, useRef, useState } from "react";

const DynamicModal = ({ isOpen, onClose, children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const modalRef = useRef(null)
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => setShouldAnimate(true), 10);
      document.body.style.overflow = "hidden";
      if (modalRef.current) {
        modalRef.current.focus();
      }
    } else {
      setShouldAnimate(false);
      const timeout = setTimeout(() => setIsVisible(false), 500);
      document.body.style.overflow = "auto"; 
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);


  return (
    isVisible && (
      <div
      ref={modalRef} // Assign ref to the modal
      tabIndex="-1" 
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 transition-opacity duration-500 ${
          shouldAnimate ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`fixed top-0 right-0 h-full rounded-tl-xl rounded-bl-xl bg-primarySlate shadow-lg z-50 transition-transform duration-500 ${
            shouldAnimate ? "translate-x-0" : "translate-x-full"
          } ${className}`}
        >
          <button
            className="absolute top-8 right-4 text-3xl font-bold text-gray-700 hover:text-black"
            onClick={onClose}
          >
            ×
          </button>
          <div className="p-6 overflow-y-auto max-h-[98vh]">
            {children}
          </div>
        </div>
      </div>
    )
  );
};

export default DynamicModal;
