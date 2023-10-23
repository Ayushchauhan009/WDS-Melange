import React, { useState, useEffect, useRef } from "react";
import { mainLogo } from "../../assets/images";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

gsap.registerPlugin(ScrollToPlugin);

const scrollToContactUsByNav = () => {
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

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div
      className={`fixed  z-50 w-full ${
        hasShadow ? "shadow-md  navbar-bg" : "bg-transparent"
      } transition-colors`}
    >
      <div className="flex justify-between  items-center px-4 md:px-12 lg:px-24 h-[4.5rem] sm:h-[5rem] font-nunito">
        <div
          style={{
            width: "176px",
            height: "50px",
            overflow: "hidden",
          }}
        >
          <div to="/">
            <img
              src={mainLogo}
              alt="Logo"
              className="w-[100%] md:w-auto z-0 h-[100%]  md:h-12 "
            />
          </div>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <RiCloseLine
                className="hamburger-icon w-10 h-8"
                style={{ color: "white" }}
              />
            ) : (
              <RiMenu3Line
                className="hamburger-icon w-10 h-8"
                style={{ color: "white" }}
              />
            )}
          </button>
        </div>
        <div
          className={`hidden  sm:flex font-extrabold text-[17px]  ${
            isMenuOpen ? "hidden " : ""
          }`}
        >
          <div className="navbar-contact shadow-lg rounded-2xl cursor-pointer bg-[#1A1A1A] font-medium text-[17px] text-[#fff] hidden sm:block">
            <div>
              <button type="button" onClick={scrollToContactUsByNav}>
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="submit-bg pt-20 z-50 -mt-[73px]  flex flex-col items-start  pl-4 hover:multiverse-text pb-20 justify-between h-[40%] font-medium">
            <div className="navbar-link cursor-pointer">
              <div
                activeClassName="active-link"
                exact
                className="nav-link text-[25px] "
                onClick={closeMenu}
              >
                <button type="button" onClick={scrollToContactUsByNav}>
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
