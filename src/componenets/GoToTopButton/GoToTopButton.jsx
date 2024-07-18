import React, { useState, useEffect, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = useCallback(() => {
    const threshold = 300; // Adjust this threshold as needed
    setShowButton(window.scrollY > threshold);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <button
      title="Go to top"
      aria-label="Go to Top"
      className={`fixed bottom-8 left-8 text-sm cursor-pointer transition-opacity duration-300 ${
        showButton ? "opacity-100" : "opacity-0"
      } hover:text-lime-500`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default GoToTopButton;
