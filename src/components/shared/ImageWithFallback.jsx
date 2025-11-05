import React from "react";

/**
 * ImageWithFallback - A reusable image component with fallback handling
 *
 * @param {string} src - Primary image source path
 * @param {string} fallback - Fallback image path (defaults to /assets/placeholder.jpg)
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - Additional CSS classes
 * @param {object} ...props - Other img element props
 */
export default function ImageWithFallback({
  src,
  fallback = "/assets/placeholder.jpg",
  alt = "",
  className = "",
  ...props
}) {
  const [imgSrc, setImgSrc] = React.useState(src);
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    setImgSrc(src);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError && imgSrc !== fallback) {
      setHasError(true);
      setImgSrc(fallback);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}
