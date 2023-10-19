import React, { useState, useEffect } from "react";
import {
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  closePopupButton,
  kunalrathod,
  kalon,
  duvon,
  dhruvak,
  costacruises,
  proportunity,
} from "../../assets/images";

const OurWork = () => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null); // To track the selected work item
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("our-work-section");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        // Adjust the thresholds for mobile and laptop screens
        let mobileViewportStart,
          mobileViewportEnd,
          laptopViewportStart,
          laptopViewportEnd;

        // Define the viewport conditions for mobile screens
        if (window.innerWidth <= 768) {
          mobileViewportStart = viewportHeight - 750; // Adjust as needed
          mobileViewportEnd = viewportHeight - 3000; // Adjust as needed
        } else if (window.innerWidth >= 1600) {
          laptopViewportStart = viewportHeight - 800; // Adjust as needed
          laptopViewportEnd = viewportHeight - 2650;
        } else {
          // Define the viewport conditions for laptop screens
          laptopViewportStart = viewportHeight - 600; // Adjust as needed
          laptopViewportEnd = viewportHeight - 2350; // Adjust as needed
        }

        if (window.innerWidth <= 768) {
          setIsInViewport(
            sectionTop < mobileViewportStart && sectionTop > mobileViewportEnd
          );
        } else {
          setIsInViewport(
            sectionTop < laptopViewportStart && sectionTop > laptopViewportEnd
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ourWork = [
    {
      icon: work1,
      title: "Dhruvak",
      description: "EdTech",
      popUpdescription:
        "Dhruvak Academy stands out as a dynamic online learning platform primarily focused on imparting a high-quality experiential education to its students with a distinct emphasis on crucial vital life skills and values as part of the curriculum.Several objectives were set forth for this campaign, the primary of which included fostering brand recognition, instilling trust among parents, and driving increased subscriptions through the company's website. Dhruvak Academy is dedicated to its value. Dhruvak is dedicated to becoming a trusted platform in education and providing students with the positive aims and tools they need to excel in their academic and personal lives to ensure they are well-prepared for the challenges of the future.",
      image: dhruvak,
    },
    {
      icon: work2,
      title: "Kalon",
      description: "D2C",
      popUpdescription:
        "Founded in 2016, Kalon is a prominent nutraceutical brand. It was established to craft premium organic honey and different products infused with honey. Kalon is recognized for its excellence as a distinguished nutraceutical brand.A well-established presence in the modern trade gourmet emporiums spanning across India, Kalon set out on an ambitious journey with its well-rooted presence in the modern trade gourmet emporiums. Investing in researching and developing innovative products ensures the brand and its offering remain of the highest quality till now.Kalon's first and foremost goal is to expand its horizons and create a unique, distinct brand identity, both domestically and globally, by developing a strong brand identity.",
      image: kalon,
    },
    {
      icon: work3,
      title: "Costa Cruises",
      description: "Travel",
      popUpdescription:
        "Costa Cruises, a globally recognized cruise liner, embarked on a mission to boost bookings for the upcoming November to December season in India.Their strategic focus was centered around the grand unveiling of the magnificent cruise ship, Costa Serena, dedicated to domestic sailings. Through a comprehensive marketing strategy, engaging social media campaigns, and strategic partnerships with travel agencies, Costa Cruises aspired not just to create buzz but also to witness a substantial flow in reservations.By offering exclusive promotions and ensuring passengers' safety and comfort, the brand positioned itself as the top choice for travellers seeking a truly remarkable voyage during the November-December season in India.",
      image: costacruises,
    },
    {
      icon: work4,
      title: "Duvon",
      description: "D2C",
      popUpdescription:
        "Disney Duvon, a cherished kid's personal care brand, enhances its brand identity by infusing them with beloved Disney & Marvel characters, bringing magic and delight to daily routines.The overarching goal was to launch the brand successfully on prominent e-commerce platforms and create a user-friendly and visually captivating D2C website that would appeal to the audience.Not only capturing the hearts of young consumers, the brand's multidimensional approach was meticulously crafted to increase sales significantly, creating lasting moments of joy and wellbeing in children's daily lives while also bolstering the brand's digital presence and market reach, creating lasting moments happiness and fun in children's daily lives.",
      image: duvon,
    },
    {
      icon: work5,
      title: "Proportunity",
      description: "Real Estate",
      popUpdescription:
        "Proportunity is at the forefront of the real estate industry's evolution, committed to a revolutionary transformation. The brand's symbol of innovation brings exceptional expertise, deep insights, and steadfast professionalism to every interaction.Proportunity's overarching goal is to firmly establish its brand as the most trusted realtor dedicated to guiding individuals toward financial prosperity through intelligent and strategic investments. The brand's goal was to make opportunities meet its expertise and make dreams become reality.With an unwavering commitment to excellence, Proportunity serves as a reliable partner in wealth-building, harnessing the power of real estate to secure a brighter and more prosperous future.",
      image: proportunity,
    },
    {
      icon: work6,
      title: "Kunal Rathod",
      description: "Healthcare",
      popUpdescription:
        "Dr. Kunal Rathod, an esteemed Gynaecologist and Obstetrician Specialist, has set his sights on creating a robust digital presence in London, UK.His mission is to connect with a broader audience, particularly those in need of expert care for complex benign gynaecological conditions. Recognizing the evolving healthcare landscape, Dr. Rathod understands the importance of an online footprint.Through this digital space, he aims to provide tailored guidance, support, and world-class medical expertise to individuals facing intricate gynaecological challenges, ensuring they receive the best possible care, regardless of geographical constraints. Dr. Rathod's dedication to improving patient's lives shines brightly in this digital age.",
      image: kunalrathod,
    },
  ];

  // Function to open the popup when a work item is clicked
  const openPopup = (workItem) => {
    setSelectedWork(workItem);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setSelectedWork(null);
  };

  return (
    <div
      className="relative"
      style={{
        backgroundColor: isInViewport ? "#000" : "#f8f8f8",
        transition: "background-color 0.5s ease-in-out", // Add a transition effect
      }}
    >
      {isInViewport && (
        <div
          className={`fixed bottom-[-200px] lg:bottom-10 work-text-slide text-[130px] lg:text-[400px] h-screen right-7 lg:right-40 text-${
            isInViewport ? "white" : "black"
          } font-semibold font-nunito opacity-60`}
          style={{
            transform: "rotateZ(0deg) rotateX(0deg) rotateY(0deg)",
            transformOrigin: "center center",
            zIndex: 0,
          }}
        >
          Work
        </div>
      )}

      <div id="our-work-section" className="lg:py-20 py-10">
        <p
          className={`text-${
            isInViewport ? "white" : "black"
          } lg:text-5xl text-[28px] text-center h-auto lg:mb-[20px] font-bold lg:font-semibold font-nunito leading-[48px]`}
        >
          Our{" "}
          <span
            className={`bg-[#D940FF] px-2 py-1 bg-opacity-40 rounded-[10px] text-${
              isInViewport ? "white" : "black"
            } whitespace-nowrap`}
          >
            Work
          </span>{" "}
        </p>
        <div className="grid lg:grid-cols-2 w-full px-5 lg:px-28 pt-10 grid-cols-1 gap-[50px]">
          {ourWork.map((data, index) => (
            <div
              key={index}
              className="hover-scale relative2"
              onClick={() => openPopup(data)}
            >
              <p
                className={`absolute z-50 hidden left-0 top-[0%] pt-32 lg:pt-56 right-0 bottom-[26px] lg:bottom-[75px] text-[42px] font-bold text-center2 bg-black text-[#f8f8f8] bg-opacity-80`}
              >
                {data.title}
              </p>
              <img src={data.icon} alt="" className="w-full" />
              <p
                className={`text-blue-600 lg:text-[32px] text-2xl font-bold font-nunito leading-snug text-${
                  isInViewport ? "white" : "black"
                }`}
              >
                {data.title}
              </p>
              <p
                className={`text-${
                  isInViewport ? "white" : "black"
                } lg:text-2xl text-lg font-normal font-nunito leading-normal`}
              >
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {selectedWork && (
        <div className="parentPopup">
          <div className={`popup mx-5  lg:mx-28 font-nunito  `}>
            <div className="flex flex-col pt-10 lg:pt-0 lg:flex-row relative ">
              <button className="close-button" onClick={closePopup}>
                <img src={closePopupButton} alt="" />
              </button>
              <img
                src={selectedWork.icon}
                alt={selectedWork.title}
                className="w-96 h-auto lg:w-80 lg:h-80"
              />
              <div className="mt-5 lg:mt-0 lg:ml-5 lg:mr-20">
                <p className="text-[24px] font-semibold multiverse-text">
                  {selectedWork.title}
                </p>
                <p className="text-[16px]">{selectedWork.popUpdescription}</p>
              </div>
            </div>
            <img src={selectedWork.image} alt="" className="mt-6" />
          </div>
        </div>
      )}
    </div>
  );
};

export default OurWork;
