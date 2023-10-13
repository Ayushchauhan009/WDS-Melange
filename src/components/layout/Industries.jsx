import React, { useState, useEffect, useRef } from 'react'
import { ind1, ind2, ind3, ind4, ind5, ind6, ind7, ind8 } from '../../assets/images'

const Industries = () => {
    const scrollRef = useRef(null);
    const firstImageRef = useRef(null);
    const [allowScrolling, setAllowScrolling] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAllowScrolling(true);
                }
            },
            {
                threshold: 0.5, // Observe when 50% of the element is in the viewport
            }
        );

        if (scrollRef.current) {
            observer.observe(scrollRef.current);
        }

        return () => {
            if (scrollRef.current) {
                observer.unobserve(scrollRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (allowScrolling) {
            const handleScroll = () => {
                if (scrollRef.current) {
                    const newScrollAmount = window.scrollY * .2;
                    scrollRef.current.scrollLeft = newScrollAmount;
                }

            };

            window.addEventListener("scroll", handleScroll);

            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }
    }, [allowScrolling]);

    return (
        <div className='lg:pt-20 px-5 py-10 '>
            <div className="">
                <p className="text-zinc-900 lg:text-5xl text-[28px] text-center h-auto lg:mb-[50px] mb-[30px] font-semibold font-nunito leading-[48px]">Industries <span className='bg-[#D940FF] px-2 py-1 bg-opacity-40 rounded-[10px] text-zinc-900'> We Serve </span> </p>
            </div>

            <div className="grid lg:grid-cols-8 grid-cols-2  overflow-y-auto gap-x-4 ind-scroll  " ref={scrollRef}>
                <img ref={firstImageRef} src={ind1} alt="" />
                <img src={ind2} alt="" />
                <img src={ind3} alt="" />
                <img src={ind4} alt="" />
                <img src={ind5} alt="" />
                <img src={ind6} alt="" />
                <img src={ind7} alt="" />
                <img src={ind8} alt="" />
            </div>

            <div className="lg:hidden grid grid-cols-2 gap-x-4 gap-y-[30px]">
                <img src={ind1} alt="" />
                <img src={ind2} alt="" />
                <img src={ind3} alt="" />
                <img src={ind4} alt="" />
                <img src={ind5} alt="" />
                <img src={ind6} alt="" />
                <img src={ind7} alt="" />
                <img src={ind8} alt="" />
            </div>
        </div>
    )
}

export default Industries