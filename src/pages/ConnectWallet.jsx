import React from "react";
import connect from "../images/metamask.png";

const ConnectWallet = () => {
  return (
    <div>
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">
                Make your payment easyer
              </h5>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-list">
                <li className="item">
                  <a href="#">Home</a>
                </li>
                <li className="separator">
                  <i className="feather-chevron-right"></i>
                </li>
                <li className="item current">Make your payment easyer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-connect-area rn-section-gapTop">
        <div className="container">
          <div className="row g mb--50 mb_md--30 mb_sm--30 align-items-center">
            <div
              className="col-lg-6"
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
            >
              <h3 className="connect-title">Connect your wallet</h3>
              <p className="connect-td">
                Connect with one of available wallet providers or create a new
                wallet. <a href="#">What is a wallet?</a>
              </p>
            </div>
            <div
              className="col-lg-6"
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="800"
            >
              <p className="wallet-bootm-disc">
                We do not own your private keys and cannot access your funds
                without your confirmation.
              </p>
            </div>
          </div>
          <div className="row g-5 pb-5">
            <div
              className="col-lg-6"
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="500"
            >
              <div className="connect-thumbnail">
                <div className="left-image">
                  <img src={connect} alt="Nft_Profile" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="row g-5">
                <div
                  className="col-12"
                  data-sal="slide-up"
                  data-sal-delay="450"
                  data-sal-duration="800"
                >
                  <div className="wallet-wrapper">
                    <div className="inner">
                      <div className="icon">
                        <i className="color-red" data-feather="gitlab"></i>
                      </div>
                      <div className="content">
                        <h4 className="title">
                          <a href="#">MetaMask</a>
                        </h4>
                        <p className="description">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aperiam mollitia consectetur nulla quae ducimus
                          molestias? Atque nemo odit tempore quasi perspiciatis
                          vitae hic impedit assumenda harum, expedita aliquid
                          accusamus ducimus.
                        </p>
                      </div>
                    </div>
                    <a className="over-link" href="#"></a>
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

export default ConnectWallet;
