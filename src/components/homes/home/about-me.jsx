import Link from 'next/link';
import React from 'react'

function AboutMe() {
  return (
    <>
      <div className="tp-feature__area tp-feature__pt-pb pt-50 pb-50 p-relative">
        <div className="container">
          <div className="tp-feature__bg tp-feature__pt-pb ">
            <div className="row justify-content-center">
              <div
                className="col-xl-6 wow tpfadeUpp"
                data-wow-duration=".9s"
                data-wow-delay=".2s"
              >
                <div className="tp-feature__section-box  mb-55 tp-title-anim">
                  <p></p>
                </div>
              </div>
              <div
                className="col-xl-6 wow tpfadeUpp"
                data-wow-duration=".9s"
                data-wow-delay=".2s"
              >
                <div className="tp-feature__section-box mb-55 tp-title-anim">
                  <h5 className="tp-section-subtitle-4 pb-10">About Me</h5>
                  <h2 className="tp-section-title">
                    Designing with Purpose, Developing with Passion
                  </h2>

                  <p>
                    I'm a passionate UI/UX Developer with a strong eye for
                    detail and a deep love for creating seamless digital
                    experiences. My expertise spans a diverse range of
                    technologies, including HTML, CSS, JavaScript, React, and
                    SASS, as well as platforms like WordPress, Shopify, Ghost,
                    and OpenCart.
                  </p>
                  <p>
                    With a solid background in both design and development, I
                    bridge the gap between aesthetics and functionality. I’m
                    highly proficient with tools like Photoshop and Figma, and I
                    thrive on transforming concepts into fully responsive,
                    user-centered designs.
                  </p>
                  <h6>
                    Driven by innovation and always tuned into emerging trends,
                    I’m committed to delivering modern web solutions that are
                    not just visually appealing, but also purposeful and
                    user-friendly.
                  </h6>

                  <Link
                    className="tp-btn-blue-lg tp-btn-hover alt-color-black mt-30"
                    href="../assets/img/SachinJadhavWebDeveloper.pdf"
                  >
                    <span>
                      Download Resume <i className="fal fa-download ml-5"></i>{" "}
                    </span>
                    <b></b>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe