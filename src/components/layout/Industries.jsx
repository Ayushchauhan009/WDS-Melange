import React, { useState, useEffect, useRef } from "react";
import {
  ind1,
  ind2,
  ind3,
  ind4,
  ind5,
  ind6,
  ind7,
  ind8,
} from "../../assets/images";

const images = [ind1, ind2, ind3, ind4, ind5, ind6, ind7, ind8];

const Industries = () => {
  const scrollRef = useRef(null);
  const firstImageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const handleScroll = () => {
            if (scrollRef.current) {
              const newScrollAmount = window.scrollY * 0.2;
              scrollRef.current.scrollLeft = newScrollAmount;
            }
          };
          window.addEventListener("scroll", handleScroll);

          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  return (
    <div className="lg:pt-20 px-5 bg-[#f8f8f8] py-10">
      <div className="">
        <p className="text-zinc-900 lg:text-5xl text-[28px] text-center h-auto lg:mb-[50px] mb-[30px] font-bold lg:font-semibold font-nunito leading-[48px]">
          Industries{" "}
          <span className="bg-[#D940FF] px-2 py-1 bg-opacity-40 rounded-[10px] text-zinc-900">
            {" "}
            We Serve{" "}
          </span>
        </p>
      </div>

      <div
        className="grid grid-cols-8 overflow-x-auto gap-x-4 ind-scroll"
        ref={scrollRef}
      >
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Industries;
