import React from "react";
import s1 from "../images/icons/shape-1.png";
import s5 from "../images/icons/shape-5.png";
import s6 from "../images/icons/shape-6.png";
import s7 from "../images/icons/shape-7.png";
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <div className="rn-service-area rn-section-gapTop">
      <div className="container">
        <div className="row">
          <div className="col-12 mb--50">
            <h3
              className="title"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              Create and sell your NFTs
            </h3>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="rn-service-one color-shape-7"
            >
              <div className="inner">
                <div className="icon">
                  <img src={s7} alt="Shape" />
                </div>
                <div className="subtitle">Step-01</div>
                <div className="content">
                  <h4 className="title">
                   <Link to="#">Set up your wallet</Link>
                  </h4>
                  <p className="description">
                    To make your transactions smooth in Blockchain Technology ,
                    We use Metamask Wallet.
                  </p>
                 <Link className="read-more-button" to="#">
                    <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
             <Link className="over-link" to="#"></Link>
            </div>
          </div>

          <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="800"
              className="rn-service-one color-shape-1"
            >
              <div className="inner">
                <div className="icon">
                  <img src={s1} alt="Shape" />
                </div>
                <div className="subtitle">Step-02</div>
                <div className="content">
                  <h4 className="title">
                   <Link to="#">Create your collection</Link>
                  </h4>
                  <p className="description">
                    Every Moment is valuable. Start today! I want every
                    freestyle and cleaning your kitchen recording of how you
                    express your culture. Why? Because I want you to be
                    compensated for your excellent dedication to your craft.
                  </p>
                 <Link className="read-more-button" to="#">
                    <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
             <Link className="over-link" to="#"></Link>
            </div>
          </div>

          <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div
              data-sal="slide-up"
              data-sal-delay="250"
              data-sal-duration="800"
              className="rn-service-one color-shape-5"
            >
              <div className="inner">
                <div className="icon">
                  <img src={s5} alt="Shape" />
                </div>
                <div className="subtitle">Step-03</div>
                <div className="content">
                  <h4 className="title">
                   <Link to="#">Add your NFT's</Link>
                  </h4>
                  <p className="description">
                    Go to create NFT section and create/ mint your NFT.
                  </p>
                 <Link className="read-more-button" to="#">
                    <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
             <Link className="over-link" to="#"></Link>
            </div>
          </div>

          <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-12">
            <div
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
              className="rn-service-one color-shape-6"
            >
              <div className="inner">
                <div className="icon">
                  <img src={s6} alt="Shape" />
                </div>
                <div className="subtitle">Step-04</div>
                <div className="content">
                  <h4 className="title">
                   <Link to="#">Sell Your NFT's</Link>
                  </h4>
                  <p className="description">
                    Navigate to Your NFTs section and put your NFT/NFTs for sale
                    on GLH Marketplace.
                  </p>
                 <Link className="read-more-button" to="#">
                    <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
             <Link className="over-link" to="#"></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};