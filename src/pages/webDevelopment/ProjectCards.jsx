import React from "react";
import OptimizedImage from "../../components/OptimizedImage";
import OptimizedVideo from "../../components/OptimizedVideo";

const ProjectCards = ({
  imageSrc,
  videoSrc,
  title,
  description,
  link,
  showVisitButton,
  techStack,
}) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg h-full border border-gray-200">
      {/* Image or Video */}
      {videoSrc ? (
        <OptimizedVideo
          src={videoSrc}
          poster={imageSrc}
          className="w-full h-[430px]"
          onMouseEnter={(e) => e.target.play()}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.currentTime = 0;
          }}
        />
      ) : imageSrc ? (
        <OptimizedImage
          src={imageSrc}
          alt={title}
          className="w-full h-[420px]"
        />
      ) : null}

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 flex flex-col justify-between
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6"
      >
        {/* Title + Description (top) */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-200 text-base">{description}</p>
        </div>

        {/* Tech Stack (bottom, just text now) */}
        {techStack && (
          <div className="mt-4">
            <p className="text-sm text-gray-300 font-semibold">Tech Stack:</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-5 py-1 text-white text-sm sm:text-base border border-white rounded-md hover:bg-white hover:text-blue-900 transition bg-white/40 font-medium"
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCards;
