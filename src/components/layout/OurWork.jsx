import React, { useState, useRef, useEffect } from "react";
import { work1, work2, work3, work4, work5, work6 } from "../../assets/images";

const OurWork = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 1], // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInViewport(true);
        } else {
          setIsInViewport(false);
        }
      });
    }, options);

    const container = containerRef.current;
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);
  const ourWork = [
    {
      icon: work1,
      title: "Dhruvak",
      description: "EdTech",
    },
    {
      icon: work2,
      title: "Kalon",
      description: "D2C",
    },
    {
      icon: work3,
      title: "Costa Cruises",
      description: "Travel",
    },
    {
      icon: work4,
      title: "Duvon",
      description: "D2C",
    },
    {
      icon: work5,
      title: "Proportunity",
      description: "Real Estate",
    },
    {
      icon: work6,
      title: "Kunal Rathod",
      description: "Healthcare",
    },
  ];
  return (
    <div
      className="lg:px-24 lg:py-20 py-10 bg-work -z-20 px-5 relative"
      ref={containerRef}
    >
      {isInViewport && (
        <p className="text-white font-extrabold font-nunito text-[300px] -z-10 fixed bottom-10 right-60">
          Work
        </p>
      )}
      <div className="">
        <p class=" text-white lg:text-5xl text-[28px] text-center h-auto mb-[50px]  font-semibold font-nunito leading-[48px]">
          Our{" "}
          <span className="bg-[#D940FF] px-2 py-1 bg-opacity-40 rounded-[10px] text-white  whitespace-nowrap">
            Work
          </span>{" "}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 w-full  grid-cols-1 gap-[50px]">
        {ourWork.map((data, index) => (
          <div key={index} className="hover-scale relative2">
            <p className="absolute z-50 hidden left-0 top-[0%] pt-56 right-0 bottom-[75px] text-[42px] font-bold bg-black  text-center2  text-white bg-opacity-80">
              {data.title}
            </p>
            <img src={data.icon} alt="" className="w-full" />
            <p class="text-blue-600 lg:text-[32px] text-2xl font-bold font-nunito leading-snug">
              {data.title}
            </p>
            <p class="text-white lg:text-2xl   text-lg font-normal font-nunito leading-normal">
              {data.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
