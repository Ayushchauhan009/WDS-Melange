import React from "react";
import {
  workWith1,
  workWith2,
  workWith3,
  workWith4,
} from "../../assets/images";
import { wave } from "../../assets/decor";

const WorkWith = () => {
  return (
    <div className="work-with bg-[#f8f8f8] lg:px-20 lg:py-20 px-5 py-10 relative ">
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="lg:w-[40%]">
          <div class=" text-zinc-900 text-center lg:text-left lg:text-5xl text-[28px] font-semibold font-nunito lg:leading-[57.60px] mb-2 leading-[33.60px]">
            Who we work with
          </div>
          <div class="w text-zinc-900 text-lg text-center lg:text-left font-normal font-nunito leading-normal">
            We understand that each business is different, and we collaborate
            with diverse agencies and businesses, offering customised solutions
            at every stage of their unique journeys.
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[25px] lg:w-[50%] w-full lg:mt-0 mt-6 lg:ml-20">
          <div class=" h-[145px] bg-white rounded-[20px] shadow flex flex-col justify-center items-center">
            <img src={workWith1} alt="" />
            <div class="text-zinc-900 text-xl font-semibold font-nunito leading-relaxed mt-[18px]">
              Start Up Business
            </div>
          </div>
          <div class=" h-[145px] bg-white rounded-[20px] shadow flex flex-col justify-center items-center">
            <img src={workWith2} alt="" />
            <div class="text-zinc-900 text-xl font-semibold font-nunito leading-relaxed mt-[18px]">
              Small & Medium Business
            </div>
          </div>
          <div class=" h-[145px] bg-white rounded-[20px] shadow flex flex-col justify-center items-center">
            <img src={workWith3} alt="" />
            <div class="text-zinc-900 text-xl font-semibold font-nunito leading-relaxed mt-[18px]">
              Enterprise
            </div>
          </div>
          <div class=" h-[145px] bg-white rounded-[20px] shadow flex flex-col justify-center items-center">
            <img src={workWith4} alt="" />
            <div class="text-zinc-900 text-xl font-semibold font-nunito leading-relaxed mt-[18px]">
              Agencies
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2rem] right-0 lg:block hidden animate-pulse">
        {" "}
        <img src={wave} alt="" />
      </div>
      <div className="absolute bottom-[3rem] left-0 lg:block hidden animate-pulse">
        {" "}
        <img src={wave} alt="" />
      </div>
    </div>
  );
};

export default WorkWith;
