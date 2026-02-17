import { useState, useEffect } from "react";

export const TypewriterText = ({
  text,
  speed = 90,
  deleteSpeed = 50,
  pauseTime = 2000,
  loop = true,
  className = "",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && currentIndex < text.length) {
      // Typing
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentIndex === text.length && loop) {
      // Finished typing, pause before deleting
      setIsPaused(true);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText.length === 0) {
      // Finished deleting, start typing again
      setIsDeleting(false);
      setCurrentIndex(0);
    }
  }, [
    currentIndex,
    displayedText,
    isDeleting,
    isPaused,
    text,
    speed,
    deleteSpeed,
    pauseTime,
    loop,
  ]);

  return (
    <span
      className={`bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ${className}`}
    >
      {displayedText}
      <span className="animate-pulse text-blue-400">|</span>
    </span>
  );
};
