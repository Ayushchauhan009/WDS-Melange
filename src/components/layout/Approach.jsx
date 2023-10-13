import React from "react";

import {
  apIcon1,
  apIcon2,
  apIcon3,
  apIcon4,
  apIcon5,
  apIcon6,
} from "../../assets/images";
import { wave, dots } from "../../assets/decor";

const Approach = () => {
  // Define an array of data for your divs
  const approachData = [
    {
      icon: apIcon1,
      title: "Research & Competition Analysis",
      description:
        "We deep dive into your product/service, target audience, industry and competitors to create a strategic roadmap that aligns perfectly with your business objectives.",
    },
    {
      icon: apIcon2,
      title: "Wireframes",
      description:
        "We design wireframes outlining your website's architecture, page hierarchy, and user journey that is the foundation for your website's design and development.",
    },
    {
      icon: apIcon3,
      title: "UI/UX",
      description:
        "Our design blends aesthetic and practicality, understanding your target audience and business goals and ensuring it integrates seamlessly with your brand identity.",
    },
    {
      icon: apIcon4,
      title: "Content Development",
      description:
        "Our writers create engaging content that stays true to your brand's personality while resonating with your target audience to rank prominently on search engines.",
    },
    {
      icon: apIcon5,
      title: "SEO",
      description:
        "We specialise in SEO, including in-depth keyword research, on-page optimisation, and link building, to boost your website visibility and search engine rankings.",
    },
    {
      icon: apIcon6,
      title: "Automation & Integrations",
      description:
        "Our team performs end-to-end testing and quality assurance checks, certifying its full functionality before your website goes live to create a seamless user journey.",
    },
  ];

  return (
    <div className=" lg:px-24 lg:py-20 p-5  relative">
      <div className="">
        <p class=" text-zinc-900 lg:text-5xl text-[28px] text-center h-auto mb-[50px]  font-semibold font-nunito leading-[48px]">
          Our{" "}
          <span className="bg-[#D940FF] px-2 py-1 bg-opacity-40 rounded-[10px] text-zinc-900  ">
            Approach
          </span>{" "}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-x-[30px] lg:gap-y-[40px] gap-y-[30px] ">
        {approachData.map((data, index) => (
          <div
            key={index}
            className="w-full lg:h-72 px-[30px] py-[25px] flex flex-col justify-center items-start bg-white rounded-[10px] shadow border-b-2 border-blue-600 cursor-pointer hover:border-green-500"
          >
            <img src={data.icon} alt="" className="mx-auto" />
            <div className="mt-[17px] text-center mx-auto text-zinc-900 text-xl font-bold font-nunito leading-normal">
              {data.title}
            </div>
            <div className="mt-3 px-2 text-center text-zinc-900 text-base font-normal font-nunito leading-tight">
              {data.description}
              <br />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[9rem] right-0 lg:block hidden animate-pulse">
        {" "}
        <img src={wave} alt="" />
      </div>
      <div className="absolute bottom-10 left-0 lg:block hidden animate-pulse">
        {" "}
        <img src={dots} alt="" />
      </div>
    </div>
  );
};

export default Approach;
