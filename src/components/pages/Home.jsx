import React, { useState, useEffect } from "react";

import {
  Navbar,
  Header,
  Section1,
  Testimonials,
  Contact,
  Footer,
  Approach,
  ChooseUS,
  WorkWith,
  Industries,
  OurWork,
  AnimatedCursor,
  BackToTop,
  PreLoader,
} from "../layout";

import { StarsCanvas } from "../canvas";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="">
      {loading ? (
        <PreLoader />
      ) : (
        <div className="content">
          <AnimatedCursor />
          <Navbar />
          <div className="relative z-0">
            <Header />
            <StarsCanvas />
          </div>
          <Section1 />
          <Approach />
          <OurWork />
          <ChooseUS />
          <WorkWith />
          <Industries />
          <BackToTop />
          <Testimonials />
          <div className="contactus">
            <Contact />
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
