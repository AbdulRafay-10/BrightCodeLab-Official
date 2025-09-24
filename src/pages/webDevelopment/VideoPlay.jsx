import { useRef, useState, useEffect } from "react";
import OptimizedVideo from "../../components/OptimizedVideo";

const HoverPlayVideo = ({ videoSrc, className }) => {
  const isGoogleDrive = videoSrc.includes("google.com");
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Explicitly remove controls
    if (videoRef.current) {
      videoRef.current.controls = false;
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.controls = false;
      videoRef.current.play().catch((e) => {
        console.warn("Autoplay failed", e);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className={`${className} relative overflow-hidden rounded-md hover:scale-[1.01] transition-transform duration-300 ease-in-out`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isGoogleDrive ? (
        <iframe
          src={videoSrc}
          className="w-full h-full"
          allow="autoplay"
          allowFullScreen
        />
      ) : (
        <OptimizedVideo
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-all duration-300 pointer-events-none`}
        />
      )}
    </div>
  );
};

export default HoverPlayVideo;
