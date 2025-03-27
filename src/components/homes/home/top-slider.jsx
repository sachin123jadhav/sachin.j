import React from "react";
import { useEffect } from "react";
// import { loadScript, publicUrlFor } from "../../../../../globals/constants";
// import JobZImage from "../../../../common/jobz-img";
import CountUp from "react-countup";


function TopSlider() {
  return (
    <div className="tp-hero-pt   p-relative">
      {/*Banner Start*/}
      <div className="twm-home1-banner-section site-bg-gray bg-cover mt-190">
        <div className="row">
          {/*Left Section*/}
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="twm-bnr-left-section">
              <div className="twm-bnr-title-small">
                We Have <span className="site-text-primary">208,000+</span> Live
                Jobs
              </div>
              <div className="twm-bnr-title-large">
                Find the <span className="site-text-primary">job</span> that
                fits your life
              </div>
              <div className="twm-bnr-discription">
                Type your keyword, then click search to find your perfect job.
              </div>
              <div className="twm-bnr-search-bar">
                <form>
                  <div className="row">
                    {/*Title*/}
                    <div className="form-group col-xl-3 col-lg-6 col-md-6">
                      <label>What</label>
                      <select
                        className="wt-search-bar-select selectpicker"
                        data-live-search="true"
                        title=""
                        id="j-Job_Title"
                        data-bv-field="size"
                      >
                        <option disabled value="">
                          Select Category
                        </option>
                        <option>Job Title</option>
                        <option>Web Designer</option>
                        <option>Developer</option>
                        <option>Acountant</option>
                      </select>
                    </div>
                    {/*All Category*/}
                    <div className="form-group col-xl-3 col-lg-6 col-md-6">
                      <label>Type</label>
                      <select
                        className="wt-search-bar-select selectpicker"
                        data-live-search="true"
                        title=""
                        id="j-All_Category"
                        data-bv-field="size"
                      >
                        <option disabled value="">
                          Select Category
                        </option>
                        <option>All Category</option>
                        <option>Web Designer</option>
                        <option>Developer</option>
                        <option>Acountant</option>
                      </select>
                    </div>
                    {/*Location*/}
                    <div className="form-group col-xl-3 col-lg-6 col-md-6">
                      <label>Location</label>
                      <div className="twm-inputicon-box">
                        <input
                          name="username"
                          type="text"
                          required
                          className="form-control"
                          placeholder="Search..."
                        />
                        <i className="twm-input-icon fas fa-map-marker-alt" />
                      </div>
                    </div>
                    {/*Find job btn*/}
                    <div className="form-group col-xl-3 col-lg-6 col-md-6">
                      <button type="button" className="site-button">
                        Find Job
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/*right Section*/}
          <div className="col-xl-6 col-lg-6 col-md-12 twm-bnr-right-section">
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
                <div className="twm-bnr-blocks-position-wrap">
                  {/*icon-block-1*/}
                  <div className="twm-bnr-blocks twm-bnr-blocks-position-1">
                    <div className="twm-icon">
                      {/* <JobZImage
                        src="images/main-slider/slider1/icon-1.png"
                        alt=""
                      /> */}
                    </div>
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-sky">
                        <span className="counter">
                          <CountUp end={12} duration={10} />
                        </span>
                        K+
                      </div>
                      <p className="icon-content-info">Companies Jobs</p>
                    </div>
                  </div>
                  {/*icon-block-2*/}
                  <div className="twm-bnr-blocks twm-bnr-blocks-position-2">
                    <div className="twm-icon">
                      {/* <JobZImage
                        src="images/main-slider/slider1/icon-2.png"
                        alt=""
                      /> */}
                    </div>
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-pink">
                        <span className="counter">
                          <CountUp end={98} duration={10} />
                        </span>{" "}
                        +
                      </div>
                      <p className="icon-content-info">Job For Countries </p>
                    </div>
                  </div>
                  {/*icon-block-3*/}
                  <div className="twm-bnr-blocks-3 twm-bnr-blocks-position-3">
                    <div className="twm-pics">
                      <span>
                        {/* <JobZImage
                          src="images/main-slider/slider1/user/u-1.jpg"
                          alt=""
                        /> */}
                      </span>
                      <span>
                        {/* <JobZImage
                          src="images/main-slider/slider1/user/u-2.jpg"
                          alt=""
                        /> */}
                      </span>
                      <span>
                        {/* <JobZImage
                          src="images/main-slider/slider1/user/u-3.jpg"
                          alt=""
                        /> */}
                      </span>
                      <span>
                        {/* <JobZImage
                          src="images/main-slider/slider1/user/u-4.jpg"
                          alt=""
                        /> */}
                      </span>
                      <span>
                        {/* <JobZImage
                          src="images/main-slider/slider1/user/u-5.jpg"
                          alt=""
                        /> */}
                      </span>
                      <span>
                        {/* <JobZImage
                          src="images/main-slider/slider1/user/u-6.jpg"
                          alt=""
                        /> */}
                      </span>
                    </div>
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-green">
                        <span className="counter">
                          <CountUp end={3} duration={10} />
                        </span>
                        K+
                      </div>
                      <p className="icon-content-info">Jobs Done</p>
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
        <div className="twm-gradient-text">Jobs</div>
      </div>
      {/*Banner End*/}
    </div>
  );
}

export default TopSlider;
