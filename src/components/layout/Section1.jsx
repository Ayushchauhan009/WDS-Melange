import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";
import { wd, con, ui, seO4 } from "../../assets/images";

const Section1 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger the animation only once
  });

  const helpRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        helpRef.current,
        {
          opacity: 0,
          x: 200,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          delay: 1.5,
        }
      );
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`font-nunito flex flex-col lg:flex-row px-6 lg:px-28 py-10 items-center lg:space-x-10`}
    >
      <div className="font-semibold">
        <h2 className="text-[28px] text-center lg:text-left mb-4 lg:mb-0 lg:text-[38px]">
          How <br className="hidden lg:block" /> We Can{" "}
          <span className="bg-[#D940ff] rounded-lg px-1 bg-opacity-40">
            {" "}
            Help You
          </span>
        </h2>
        <p className="mt-8 hidden lg:block">
          We fuel your brand's success through a powerful brand strategy,
          delivering seamless e-commerce, eye-catching design, data-driven
          performance, and SEO magic.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-xl p-6 text-center lg:text-left bg-white shadow-lg">
          <img src={wd} alt="" className="mx-auto lg:mx-0" />
          <h3 className="py-3 text-[20px] font-bold">Website Development</h3>
          <p>
            We design websites for an exceptional user experience. From
            wireframes to in-depth analytics, we ensure your business is seen,
            clicked, and embraced by your target audience.
          </p>
        </div>
        <div className="rounded-xl p-6 text-center lg:text-left bg-white shadow-lg">
          <img src={con} alt="" className="mx-auto lg:mx-0" />
          <h3 className="py-3 text-[20px] font-bold">Content</h3>
          <p>
            We take a deep dive into competition benchmarking, keyword research,
            and SEO-friendly strategies to curate content that not only engages
            but also converts.
          </p>
        </div>
        <div className="rounded-xl p-6 text-center lg:text-left bg-white shadow-lg">
          <img src={ui} alt="" className="mx-auto lg:mx-0" />
          <h3 className="py-3 text-[20px] font-bold">UI/UX</h3>
          <p>
            We elevate your websites with captivating visuals, a unified visual
            language, and a 'Mobile First' design approach, ensuring a seamless
            responsiveness on all devices.
          </p>
        </div>
        <div className="rounded-xl p-6 text-center lg:text-left bg-white shadow-lg">
          <img src={seO4} alt="" className="mx-auto lg:mx-0" />
          <h3 className="py-3 text-[20px] font-bold">SEO</h3>
          <p>
            Our proficiency in diverse SEO methods will elevate your website's
            organic traffic, visibility, and search engine rankings to new
            heights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
