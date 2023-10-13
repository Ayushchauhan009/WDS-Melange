import React from "react";
import { bgImage } from "../../assets/images";

const Header = () => {
  return (
    <div className="h-[500px]  lg:h-auto px-2 pb-[27.9rem] lg:pb-[42rem] xxll:pb-[52rem] flex flex-col pt-40 items-center headerBg">
      <h1 className="text-center  text-[28px] lg:text-[44px] font-nunito font-semibold text-white">
        We Design Websites That <br />
        Transform Your Online Presence
      </h1>
      <button className="submitBtn mt-5 font-nunito text-[18px] rounded-full px-4 py-2">
        Get Started
      </button>
    </div>
  );
};

export default Header;
