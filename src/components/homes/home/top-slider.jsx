import Link from "next/link";
import React from "react";
import { useEffect } from "react";
// import { loadScript, publicUrlFor } from "../../../../../globals/constants";
// import JobZImage from "../../../../common/jobz-img";
import CountUp from "react-countup";


function TopSlider() {
  return (
    <div className="tp-hero-pt   p-relative">
      {/*Banner Start*/}
      <div className="twm-home1-banner-section site-bg-gray bg-cover mt-150 container ">
        <div className="row">
          {/*Left Section*/}
          <div className="col-xl-7 col-lg-7 col-md-12">
            <div className="twm-bnr-left-section">
              <div className="twm-bnr-title-large">
                I build beautiful, accessible, and high-performance websites.
              </div>
              <div className="twm-bnr-discription">
                Web Developer with over 15 years of experience crafting dynamic,
                visually engaging, and user-friendly websites. I specialize in
                HTML, CSS, JavaScript, React, and CMS platforms like WordPress
                and Shopify.
              </div>
            </div>
            <div
              className="tp-hero-btn-3 wow tpfadeUp"
              data-wow-duration="1s"
              data-wow-delay=".9s"
            >
              <Link
                className="tp-btn-blue-lg tp-btn-hover alt-color-black"
                href="#"
              >
                <span>Know More</span>
                <b></b>
              </Link>
              <Link
                className="tp-btn-border tp-btn-hover alt-color-black"
                href="#"
              >
                <span>View Projects</span>
                <b></b>
              </Link>
            </div>
          </div>
          {/*right Section*/}
          <div className="col-xl-5 col-lg-5 col-md-12 twm-bnr-right-section">
            <div className="twm-bnr-right-content">
              <div className="twm-img-bg-circle-area">
                <div className="twm-img-bg-circle1 rotate-center">
                  <span />
                </div>
                <div className="twm-img-bg-circle2 rotate-center-reverse">
                  <span />
                </div>
                <div className="twm-img-bg-circle3">
                  <span />
                </div>
              </div>
              <div className="twm-bnr-right-carousel">
                <div className="owl-carousel twm-h1-bnr-carousal">
                  <div className="item">
                    <div className="slide-img">
                      {/* <JobZImage
                        src="images/main-slider/slider1/r-img1.png"
                        alt="#"
                      /> */}
                    </div>
                  </div>
                  <div className="item">
                    <div className="slide-img">
                      <div className="slide-img">
                        {/* <JobZImage
                          src="images/main-slider/slider1/r-img2.png"
                          alt="#"
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*Samll Ring Left*/}
              <div className="twm-small-ring-l slide-top-animation" />
              <div className="twm-small-ring-2 slide-top-animation" />
            </div>
          </div>
        </div>
      </div>
      {/*Banner End*/}
    </div>
  );
}

export default TopSlider;
