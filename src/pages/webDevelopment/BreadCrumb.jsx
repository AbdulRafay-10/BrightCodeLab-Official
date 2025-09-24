import React from "react";

const Breadcrumb = ({ paths }) => {
  return (
    <nav
      className="flex items-center lg:text-xl md:text-lg text-base font-semibold mt-4 text-white"
      aria-label="breadcrumb"
    >
      {paths.map((path, index) => (
        <span key={index} className="flex items-center">
          <a
            href={path.href}
            className={`hover:text-gray-300 ${
              index === paths.length - 1 ? "text-white font-semibold" : "text-gray-300"
            }`}
          >
            {path.label}
          </a>
          {index < paths.length - 1 && (
            <svg
              className="mx-2 h-4 w-4 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
