import React, { useState, useRef, useEffect } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  imgClassName = '',
  placeholder = '/images/placeholder.jpg',
  imgStyle,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Backward compatibility: if a style is passed on the component and no imgStyle provided,
  // use it for the inner <img>. Keep container style if provided.
  const { style: containerStyle, ...restProps } = props || {};
  const effectiveImgStyle = imgStyle !== undefined ? imgStyle : containerStyle;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={containerStyle} {...restProps}>
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
          style={effectiveImgStyle}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default OptimizedImage;
