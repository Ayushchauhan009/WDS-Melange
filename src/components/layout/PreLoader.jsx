import React, { useState, useEffect } from "react";
// import "./MelangeDigitalPreloader.css";

const PreLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the duration as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`preloader ${isLoading ? "loading" : ""}`}>
      <div className="logo  mb-3">Welcome to Melange Digital</div>
      <div className="loading-animation">
        <div className={`spinner ${isLoading ? "rotating" : ""}`}></div>
        <div className={`line ${isLoading ? "stretching" : ""}`}></div>
      </div>
    </div>
  );
};

export default PreLoader;
