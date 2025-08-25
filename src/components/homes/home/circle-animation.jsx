import React from 'react'

function CircleAnimation() {
  return (
    <>
      <div className="twm-home1-banner-section">
        <div className="twm-bnr-right-section ">
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
    </>
  );
}

export default CircleAnimation