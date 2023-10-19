import React from "react";
import { int1, int2, int3, int4, line } from "../../assets/images";
import { triBlue, triPurple } from "../../assets/decor";

const ChooseUS = () => {
  return (
    <div className="lg:px-48 lg:py-20 py-10 px-5 font-nunito relative">
      <div className="">
        <p class=" text-zinc-900 lg:text-5xl text-[28px] text-center h-auto lg:mb-[50px] mb-[10px]  font-bold lg:font-semibold font-nunito leading-[48px]">
          Why{" "}
          <span className="bg-[#D940FF] px-2 py-1 bg-opacity-40 rounded-[10px] text-zinc-900  ">
            Choose Us?
          </span>{" "}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-8 lg:gap-y-0 gap-y-6">
        <div className="lg:border-gray-300  lg:border-r lg:border-b lg:h-[300px] flex flex-col justify-center items-center font-nunito  lg:mt-0 mt-8">
          <img src={int1} alt="" className="-ml-4 animate-pulse" />
          <div className="text-zinc-900 lg:text-2xl  text-xl font-bold leading-[28.80px] lg:mt-3 mt-2">
            Proven Track Record
          </div>
          <div className=" h-[62px] lg:w-[80%] text-center text-zinc-900 lg:text-xl text-base lg:font-normal font-semibold lg:leading-[30px] mt-2">
            Our track records demonstrate remarkable results for businesses in
            diverse industries consistently.
          </div>
          <div className=" mt-[30px] lg:hidden block">
            <img src={line} alt="" />
          </div>
        </div>

        <div className="lg:border-gray-300 lg:border-l lg:border-b lg:h-[300px] flex flex-col justify-center items-center font-nunito lg:px-4">
          <img src={int2} alt="" className="animate-pulse" />
          <div className="text-zinc-900 lg:text-2xl text-xl font-bold leading-[28.80px] lg:mt-3 mt-2">
            Client Success Stories
          </div>
          <div className="h-[62px] lg:w-[90%] text-center text-zinc-900 lg:text-xl text-base lg:font-normal font-semibold lg:leading-[30px] mt-2">
            Our clients' words are the narratives of our success, elucidating
            their experiences and triumphs with our services
          </div>
          <div className=" mt-[30px] lg:hidden block">
            <img src={line} alt="" />
          </div>
        </div>

        <div className="lg:border-gray-300  lg:border-t lg:border-r  lg:h-[300px] flex flex-col justify-center items-center font-nunito">
          <img src={int3} alt="" className="animate-pulse" />
          <div className="text-zinc-900 lg:text-2xl text-xl font-bold leading-[28.80px] lg:mt-3 mt-2">
            Dedicated Team
          </div>
          <div className="h-[62px] lg:w-[80%] text-center text-zinc-900 lg:text-xl text-base lg:font-normal font-semibold lg:leading-[30px] mt-2">
            With a team of seasoned designers, developers, and SEO specialists,
            we are dedicated to your success story.
          </div>
          <div className=" mt-[30px] lg:hidden block">
            <img src={line} alt="" />
          </div>
        </div>

        <div className="lg:border-gray-300 lg:border-t lg:border-l lg:h-[300px] flex flex-col justify-center items-center font-nunito lg:mt-0 mt-4">
          <img src={int4} alt="" className="animate-pulse" />
          <div className="text-zinc-900 lg:text-2xl text-xl font-bold leading-[28.80px] lg:mt-3 mt-2">
            Tailored Solutions
          </div>
          <div className="h-[62px] w-[85%] text-center text-zinc-900 lg:text-xl text-base lg:font-normal font-semibold lg:leading-[30px] mt-2">
            We tailor our services to align perfectly with your goals, ensuring
            your success is unparalleled.
          </div>
          <div className=" mt-[30px] hidden ">
            <img src={line} alt="" />
          </div>
        </div>
      </div>
      <div className=" lg:block hidden absolute top-[15%] left-[15%] animate-pulse">
        <img src={triBlue} alt="" />
      </div>
      <div className=" lg:block hidden absolute bottom-[15%] right-[10%] animate-pulse">
        <img src={triPurple} alt="" />
      </div>
    </div>
  );
};

export default ChooseUS;
