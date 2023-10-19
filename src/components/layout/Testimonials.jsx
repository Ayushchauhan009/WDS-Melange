import React, { useState, useEffect } from "react";
import {
  dhruvaklogo2,
  kalonlogo,
  comma,
  holiday,
  duvonlogo2,
  kunalRathod,
  costaLogo,
} from "../../assets/images";

import { useMediaQuery } from "react-responsive";
import { useSwipeable } from "react-swipeable";

const Testimonials = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const [reviews, setReviews] = useState([
    {
      id: 1,
      icon: duvonlogo2,
      name: "Khushboo Shah",
      title: "Duvon",
      review:
        "Melange Digital Agency's website development transformed our online presence. They turned our outdated site into a modern, user-friendly platform that perfectly fits our business. Their expertise and dedication are truly commendable.",
      comma: comma,
    },
    {
      id: 2,
      icon: kalonlogo,
      name: "Vidya Pandit",
      title: "Kalon Organics",
      review:
        "Melange Digital Agency's website development elevated our startup's online presence. They created a stunning, functional site that truly represents our brand. Their attention to detail and creativity made a huge difference.",
      comma: comma,
    },
    {
      id: 3,
      icon: costaLogo,
      name: "Nalini Gupta",
      title: "Costa Cruise",
      review:
        "Melange Digital has been a game-changer for our marketing. Their SEO strategies improved our online visibility and engagement. They are a highly skilled, responsive team committed to delivering results.",
      comma: comma,
    },
    {
      id: 4,
      icon: kunalRathod,
      name: "Kunal Rathod",
      title: "Kunal Rathod",
      review:
        "Their SEO and website development services worked wonders for my online consultations. They pushed my site to the top of search results, significantly increasing my traffic and sales. I highly recommend their exceptional services.",
      comma: comma,
    },
  ]);

  const reviewsPerPage = useMediaQuery({ query: "(min-width: 768px)" }) ? 2 : 1;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => nextPage(),
    onSwipedRight: () => previousPage(),
  });

  useEffect(() => {
    const timer = setTimeout(nextPage, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentPage]);

  const nextPage = () => {
    const nextPage = currentPage === totalPages ? 1 : currentPage + 1;
    setCurrentPage(nextPage);
  };

  const previousPage = () => {
    const previousPage = currentPage === 1 ? totalPages : currentPage - 1;
    setCurrentPage(previousPage);
  };

  const getPageReviews = () => {
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    return reviews.slice(startIndex, endIndex);
  };

  return (
    <div id="testimonials" className="relative">
      <div>
        <h2 className="font-bold lg:font-semibold font-nunito  text-2xl md:text-3xl lg:text-5xl text-center px-9 pt-12 md:px-52">
          Our{" "}
          <span className="bg-[#D940ff] px-1 rounded-lg bg-opacity-40">
            Happy Clients
          </span>
        </h2>

        <div
          className="reviews flex flex-col md:flex-row justify-center mx-4 sm:mx-0 min-h-96 sm:min-h-64"
          {...handleSwipe}
        >
          {getPageReviews().map((review) => (
            <div
              key={review.id}
              className="review md:mx-4 bg-white z-20 my-6 px-4 py-8 w-full testimonial rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-56 xl:w-[28rem]"
            >
              <div className="float-right  ">
                <img src={review.comma} alt="" className="w-10 -mt-6 h-8" />
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div
                  className={`flex flex-col sm:flex-row items-start mx-4 md:mx-0 ${
                    reviews.id === 3 ? reviews.icon === "w-10 h-20" : ""
                  } `}
                >
                  <img
                    src={review.icon}
                    alt=""
                    className={`w-auto h-16 -ml-3  md:ml-0 
                      
                    `}
                  />
                  <div className="flex flex-col items-start -ml-3 font-nunito sm:ml-6 mt-0 sm:mt-1 md:items-start">
                    <h3 className="font-bold">{review.name}</h3>
                    <p className="font-semibold  whitespace-nowrap">
                      {review.title}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex ${
                    review.review.length > 100 ? "sm:flex-col" : "sm:flex"
                  }`}
                >
                  {review.review.length <= 100 && (
                    <p className="mt-3 text-[14px] lg:text-[17px] md:font-normal">
                      {review.review}
                    </p>
                  )}
                </div>
              </div>

              {review.review.length > 100 && (
                <div className="mt-3  text-[14px] font-nunito lg:text-[17px] md:font-normal">
                  {review.review}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pagination flex justify-center items-center my-4 lg:my-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`${
                currentPage === index + 1 ? "active" : ""
              } mx-1 rounded-full test-button border-blue-500  text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300`}
              onClick={() => handlePageChange(index + 1)}
            >
              <div className="w-2 h-2 rounded-lg bg-gray-500 active:bg-blue-500 hover:bg-blue-500 "></div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
