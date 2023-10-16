import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const Header = () => {
  const headingRef = useRef(null);
  const headerRef = useRef(null);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      headerRef.current,
      {
        scale: 1.5,
      },
      {
        scale: 1,
        duration: 2,
      }
    );

    animation.play(); // Start the animation

    // Cleanup the animation when the component unmounts
    return () => animation.kill();
  }, []);

  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      headingRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 1.5,
      }
    );

    animation.play(); // Start the animation

    // Cleanup the animation when the component unmounts
    return () => animation.kill();
  }, []);
  useLayoutEffect(() => {
    const animation = gsap.fromTo(
      buttonRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 2.5,
      }
    );

    animation.play(); // Start the animation

    // Cleanup the animation when the component unmounts
    return () => animation.kill();
  }, []);

  return (
    <div
      ref={headerRef}
      className="h-[500px]  lg:h-auto px-2 pb-[27.9rem] lg:pb-[42rem] xxll:pb-[52rem] 2xl:pb-[45rem] flex flex-col pt-40 items-center headerBg"
    >
      <h1
        ref={headingRef}
        className="text-center  text-[28px] lg:text-[44px] font-nunito font-semibold text-white"
      >
        We Design Websites That <br />
        Transform Your Online Presence
      </h1>
      <button
        ref={buttonRef}
        className="submitBtn mt-5 font-nunito text-[18px] rounded-full px-4 py-2"
      >
        Get Started
      </button>
    </div>
  );
};

export default Header;
