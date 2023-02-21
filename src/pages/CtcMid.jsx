import React from "react";
import { Link } from "react-router-dom";

const CtcMid = () => {
  return (
    <div>
      <div className="rn-about-banner-area rn-section-gapTop">
        <div className="container mb--30">
          <div className="row">
            <div className="col-12">
              <h2
                className="title about-title-m"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="150"
              >
                Current Call to Creators
              </h2>
            </div>
          </div>
        </div>
        <div className="container-fluid about-fluidimg ">
          <div className="row">
            <div className="img-wrapper">
              <div className="bg_image--22 bg_image"></div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="h--100">
                <div className="rn-about-card mt_dec--50 widge-wrapper rbt-sticky-top-adjust">
                  <div className="inner">
                    <h2
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      What
                    </h2>
                    <p
                      className="about-disc"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      Winners will be presented with the opportunity to be highlighted at a physical exhibit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rn-about-card transparent-bg">
                <div className="inner">
                  <h3
                    className="title"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    Who is invited to submit works?
                  </h3>
                  <p
                    className="about-disc mb--0"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    Emerging Artists who have recently completed a college level
                    program study in visual arts. Also, self-taught artists who
                    have yet to be widely shown and who desire an audience with
                    collectors and appreciators of original art.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rn-about-banner-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="h--100">
                <div className="rn-about-card mt_dec--50 widge-wrapper rbt-sticky-top-adjust">
                  <div className="inner">
                    <h2
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      Why
                    </h2>
                    <p
                      className="about-disc"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      We at GLH Galleries aspire to do our part to positively
                      transform the world by providing an exchange of artistic
                      and innovative ideas while providing a platform for
                      emerging artists to be discovered by new as well as
                      established collectors.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="rn-about-card transparent-bg">
                <div className="inner">
                  <h3
                    className="title"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    When
                  </h3>
                  <p
                    className="about-disc mb--0"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    <p>
                      GLH Galleries "Emergent SHE" Exhibition is on Sunday,
                      March 13, 2022 12p - 4p
                    </p>
                    <p>
                      We are accepting art from January 28th,2022 through
                      February 28th, 2022
                    </p>
                    <p>
                      Accepted works will be notified by Friday, March 4, 2022.
                    </p>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="rn-about-banner-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="h--100">
                <div className="rn-about-card mt_dec--50 widge-wrapper rbt-sticky-top-adjust">
                  <div className="inner">
                    <h2
                      className="title"
                      data-sal="slide-up"
                      data-sal-duration="800"
                      data-sal-delay="150"
                    >
                      Where
                    </h2>
                    <storng>
                      <p
                        className="about-disc"
                        data-sal="slide-up"
                        data-sal-duration="800"
                        data-sal-delay="150"
                      >
                        Art Studios{" "}
                      </p>
                      <p>5301 Almeda Road </p>
                      <p>Houston, Texas 77001</p>
                    </storng>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="rn-callto-action rn-section-gapTop">
        <div className="container-fluid about-fluidimg-cta">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="bg_image--6 bg_image bg-image-border"
                data-black-overlay="7"
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className="call-to-action-wrapper">
                      <h3
                        data-sal="slide-up"
                        data-sal-duration="800"
                        data-sal-delay="150"
                      >
                        Call to Creators
                        <br />
                        Discover rare digital art
                      </h3>

                      <div
                        className="callto-action-btn-wrapper"
                        data-sal="slide-up"
                        data-sal-duration="800"
                        data-sal-delay="150"
                      >
                        <Link
                          to="/call-to-creators"
                          className="btn btn-primary btn-large"
                        >
                          Call to creators
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtcMid;