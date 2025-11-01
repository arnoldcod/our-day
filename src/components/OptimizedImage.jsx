import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

/**
 * OptimizedImage component with lazy loading and placeholder
 * @param {string} src - Image source path
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - CSS classes
 * @param {boolean} priority - Load immediately (for above-the-fold images)
 * @param {string} aspectRatio - Aspect ratio (e.g., "16/9", "4/3")
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  priority = false,
  aspectRatio = 'auto'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return; // Skip intersection observer for priority images

    const currentRef = imgRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [priority]);

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden bg-gray-200 dark:bg-gray-700 ${className}`}
      style={{ aspectRatio }}
    >
      {/* Placeholder with blur effect */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700" />
      )}

      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          decoding="async"
        />
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  priority: PropTypes.bool,
  aspectRatio: PropTypes.string,
};

export default OptimizedImage;
