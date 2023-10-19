import React, { useState, useEffect } from "react";
import { uparrow } from "../../assets/images";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show the "Back to Top" button when the user scrolls down
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className="back-to-top-btn" onClick={scrollToTop}>
          <img src={uparrow} alt="" className="w-20 h-20" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
