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
          <Header />
          <Section1 />
          <Approach />
          <OurWork />
          <ChooseUS />
          <WorkWith />
          <Industries />
          <BackToTop />
          <Testimonials />
          <div id="contactus">
            <Contact />
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
