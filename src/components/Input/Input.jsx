import React from "react";

const Input = ({
  type = "text",
  name,
  placeholder = "",
  value,
  onChange,
  label = "",
  error = "",
  inputClassName = "",
  labelClassName = "",
  errorClassName = "",
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className={`block text-sm font-medium text-gray-700 mb-2 ${labelClassName}`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full border focus:outline-none border-[#d4ebfc] rounded-[8px] bg-[#fff] shadow-[#1018280d] px-4 h-[40px] text-sm ${inputClassName}`}
      />
      {error && (
        <p className={`text-red-500 text-sm mt-1 ${errorClassName}`}>{error}</p>
      )}
    </div>
  );
};

export default Input;
