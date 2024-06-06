import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Add scroll event listener to show/hide the button
    const handleScroll = () => {
      const threshold = 300; // Adjust this threshold as needed
      if (window.scrollY > threshold) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
    title="Go to top"
      aria-label="Goto Top"
      className={`fixed bottom-6 left-8 flex justify-center items-center text-sm cursor-pointer opacity-0 transition duration-300 ${
        showButton ? "opacity-100" : ""
      } hover:text-lime-500`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default GoToTopButton;
