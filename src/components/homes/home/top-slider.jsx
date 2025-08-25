import Image from "next/image";
import Link from "next/link";
import React from "react";
import SachinJadhav from "@/assets/img/about/Sachin.png";
function TopSlider() {
  return (
    <div className="tp-hero-pt  p-relative bg-light-blue pt-150">
      {/*Banner Start*/}
      <div className="tp-hero-bg-img">
        <div className="twm-home1-banner-section site-bg-gray bg-cover  container ">
          <div className="row">
            {/*Left Section*/}
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="twm-bnr-left-section">
                <div className="twm-bnr-title-large">
                  I build beautiful, accessible, and high-performance websites.
                </div>
                <div className="twm-bnr-discription">
                  Web Developer with over 15 years of experience crafting
                  dynamic, visually engaging, and user-friendly websites. I
                  specialize in HTML, CSS, JavaScript, React, and CMS platforms
                  like WordPress and Shopify.
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
              <Image src={SachinJadhav} alt="Sachin Jadhav" />
            </div>
          </div>
        </div>
      </div>
      {/*Banner End*/}
    </div>
  );
}

export default TopSlider;
