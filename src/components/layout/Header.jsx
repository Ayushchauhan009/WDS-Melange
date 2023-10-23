import React, { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { computer } from "../../assets/images";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const headingRef = useRef(null);
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const [animationPlayed, setAnimationPlayed] = useState(false);

  const scrollToContactUs = () => {
    const contactUsSection = document.querySelector(".contactus");
    if (contactUsSection) {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: contactUsSection,
        onComplete: () => {
          setAnimationPlayed(true);
        },
      });
    }
  };
  useLayoutEffect(() => {
    if (!animationPlayed) {
      const animation = gsap.fromTo(
        headerRef.current,
        {
          scale: 0.5,
        },
        {
          scale: 1,
          duration: 2,
        }
      );

      animation.play(); // Start the animation

      // Cleanup the animation when the component unmounts
      return () => animation.kill();
    }
  }, [animationPlayed]);

  useLayoutEffect(() => {
    if (!animationPlayed) {
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
    }
  }, [animationPlayed]);

  useLayoutEffect(() => {
    if (!animationPlayed) {
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
    }
  }, [animationPlayed]);

  return (
    <div
      ref={headerRef}
      className=" px-2  flex flex-col pt-40 items-center headerBg"
    >
      <h1
        ref={headingRef}
        className="text-center  text-[28px] lg:text-[55px] font-nunito font-bold text-white"
      >
        We Design Websites That <br />
        Transform Your Online Presence
      </h1>
      <button
        type="button"
        ref={buttonRef}
        onClick={() => {
          scrollToContactUs();
          setAnimationPlayed(true);
        }}
        className="submitBtn mt-5 font-nunito text-[18px] rounded-full px-4 py-2"
      >
        Get Started
      </button>
      <img src={computer} alt="computer-image" className="pt-10" />
    </div>
  );
};

export default Header;
