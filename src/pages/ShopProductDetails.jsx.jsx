import React from "react";
//import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";

import g1 from "../images/g1.png";
import g2 from "../images/g2.png";
// import eth from "../images/eth.jpeg";
// import btc from "../images/btc.jpg";
// import shib from "../images/shib.jpg";
import card from "../images/cardano.jpg";
import tron from "../images/tron.jpg";
import t1 from "../images/t1.png";
import t2 from "../images/t2.png";
import t3 from "../images/t3.png";
import t4 from "../images/t4.png";
//import axios from "axios";
//import { TransactionContext } from "../context/Transactions";
//import { glhContext } from "../context/Context";
//import { useContext } from "react";


const ProductDetail = () => {
 
  return (
    <div>
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">
                Product Details
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
                <li className="item current">Product Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="product-details-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="product-tab-wrapper rbt-sticky-top-adjust">
                <div className="pd-tab-inner">
                  <div
                    className="tab-content rn-pd-content"
                    id="v-pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="rn-pd-thumbnail">
                        k
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div className="rn-pd-thumbnail">
                        <img
                          src={""}
                          alt="Nft_Profile"
                        />
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <div className="rn-pd-thumbnail">
                        <img
                          src={""}
                          alt="Nft_Profile"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
              <div className="rn-pd-content-area">
                <div className="pd-title-area">
                  <h4 className="title">
                    m l
                  </h4>
                  <div className="pd-react-area">
                    <div className="count">
                      <div className="share-btn share-btn-activation dropdown">
                        <button
                          className="icon"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <svg
                            viewBox="0 0 14 4"
                            fill="none"
                            width="16"
                            height="16"
                            className="sc-bdnxRM sc-hKFxyN hOiKLt"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </button>

                        <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                          <button
                            type="button"
                            className="btn-setting-text share-text"
                            data-bs-toggle="modal"
                            data-bs-target="#shareModal"
                          >
                            Share
                          </button>
                          <button
                            type="button"
                            className="btn-setting-text report-text"
                            data-bs-toggle="modal"
                            data-bs-target="#reportModal"
                          >
                            Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <h6 className="title-name">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, ut.
                </h6> */}
                <div className="catagory-collection">
                  <div className="catagory">
                    <span>
                      Art Type : <span className="color-body"></span>
                    </span>
                    <div className="top-seller-inner-one">
                      <div className="top-seller-wrapper">
                        {/* <div className="thumbnail">
                          <a href="#">
                            <img src={product.fileURL&& product.fileURL[0]} alt="Nft_Profile" />
                          </a>
                        </div> */}
                        <div className="top-seller-content">
                          <a href="#">
                            <h6 className="name">
                              lknl
                            </h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="collection">
                    <span>Price</span>
                    <div className="top-seller-inner-one">
                      <div className="top-seller-wrapper">
                        {/* <div className="thumbnail">
                          <a href="#">
                            <img src={product.fileURL&& product.fileURL[0]} alt="Nft_Profile" />
                          </a>
                        </div> */}
                        <div className="top-seller-content">
                          <a href="#">
                            <h6 className="name">
                             4664
                            </h6>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rn-bid-details">
                  <div className="tab-wrapper-one">
                    <nav className="tab-button-one">
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className="nav-link"
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="false"
                        >
                          Uploaded By
                        </button>
                        <button
                          className="nav-link active"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="true"
                        >
                          Details
                        </button>
                        <button
                          className="nav-link"
                          id="nav-contact-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-contact"
                          type="button"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Sale History
                        </button>
                      </div>
                    </nav>
                    <div
                      className="tab-content rn-bid-content"
                      id="nav-tabContent"
                    >
                      <div
                        className="tab-pane fade"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <div className="top-seller-inner-one">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img
                                  src={""}
                                  alt="Nft_Profile"
                                />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                <a href="#">{""}</a>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="top-seller-inner-one">
                          <div className="top-seller-wrapper">
                            <div className="text-primary">
                              <a href="#">
                                <p>Email:</p>
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                <a href="#">a@gmail.com</a>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="top-seller-inner-one">
                          <div className="top-seller-wrapper">
                            <div className="text-primary">
                              <a href="#">
                                <p>Created At</p>
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                <a href="#">, f,;d </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="top-seller-inner-one">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img src={card} alt="Nft_Profile" />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                <a href="#">234 Cardano</a>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="top-seller-inner-one">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img src={tron} alt="Nft_Profile" />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                <a href="#">34534 TRX</a>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        <div className="rn-pd-bd-wrapper mt--20">
                          <div className="top-seller-inner-one">
                            <p className="disc">
                             ljbsdfklgn
                            </p>
                            <h6 className="name-title">Artist:</h6>
                            <div className="top-seller-wrapper">
                              <div className="thumbnail">
                                <a href="" target="_blank">
                                  <img
                                    src=""
                                    alt="Nft_Profile"
                                  />
                                </a>
                              </div>
                              <div className="top-seller-content">
                                <a href="#">
                                  <h6 className="name">sdvml </h6>
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="rn-pd-sm-property-wrapper">
                            <h6 className="pd-property-title">Property</h6>
                            <div className="property-wrapper">
                              <div className="pd-property-inner">
                                <span className="color-body type">HEIGHT</span>
                                <span className="color-white value">
                                  516cm
                                </span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">WIDTH</span>
                                <span className="color-white value">
                                551 cm
                                </span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">LIKES</span>
                                <span className="color-white value">
                                 54654
                                </span>
                              </div>
                              {/*

                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  ASTARDNESS
                                </span>
                                <span className="color-white value">
                                  BASTARD
                                </span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  BAD HABIT(S)
                                </span>
                                <span className="color-white value">PIPE</span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">BID</span>
                                <span className="color-white value">
                                  BPEYti
                                </span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  ASTRAGENAKAR
                                </span>
                                <span className="color-white value">
                                  BASTARD
                                </span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">CITY</span>
                                <span className="color-white value">TOKYO</span>
                              </div> */}
                            </div>
                          </div>

                          <div className="rn-pd-sm-property-wrapper">
                            <h6 className="pd-property-title">Catagory</h6>
                            <div className="catagory-wrapper">
                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  art type
                                </span>
                                <span className="color-white value">
                                 sdml2
                                </span>
                              </div>

                              {/* <div className="pd-property-inner">
                                <span className="color-body type">
                                  SOMALIAN
                                </span>
                                <span className="color-white value">
                                  TRIBUTE
                                </span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">TUNA</span>
                                <span className="color-white value">PIPE</span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">BID</span>
                                <span className="color-white value">
                                  BPEYti
                                </span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  ASTRAGENAKAR
                                </span>
                                <span className="color-white value">
                                  BASTARD
                                </span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">CITY</span>
                                <span className="color-white value">TOKYO</span>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                      >
                        <div className="top-seller-inner-one mt--20">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img src={t2} alt="Nft_Profile" />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                2.3 ETH by<a href="#">Lorem Ipsum</a>
                              </span>
                              <span className="count-number">1 hours ago</span>
                            </div>
                          </div>
                        </div>

                        <div className="top-seller-inner-one mt--20">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img src={t1} alt="Nft_Profile" />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                45235435 SHIB by<a href="#">Sari Tri</a>
                              </span>
                              <span className="count-number">3 hours ago</span>
                            </div>
                          </div>
                        </div>

                        <div className="top-seller-inner-one mt--20">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img src={t3} alt="Nft_Profile" />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                .54 BTC by<a href="#">Levi Howze</a>
                              </span>
                              <span className="count-number">4 hours ago</span>
                            </div>
                          </div>
                        </div>

                        <div className="top-seller-inner-one mt--20">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                              <a href="#">
                                <img src={t4} alt="Nft_Profile" />
                              </a>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                1231 TRX by<a href="#">Allen Waltker</a>
                              </span>
                              <span className="count-number">5 hours ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="place-bet-area">
                
                     
                
                      <button
                        className="btn ctcs"
                    
                      >
                        Add to cart
                      </button>
                    
                  </div>
                  <div className="place-bet-area">
                    <Link className="btn btn-primary-alta mt--30" to="/cart">
                      Go to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-new-items rn-section-gapTop">
        <div className="container pb-5">
          <div className="row mb--30 align-items-center">
            <div className="col-12">
              <h3
                className="title mb--0"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Related Item
              </h3>
            </div>
          </div>
          <div className="row g-5">
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
            >
              <div className="product-style-one no-overlay">
                <div className="card-thumbnail">
                  <a href="#">
                    <img src={g1} alt="NFT_portfolio" />
                  </a>
                </div>
                <div className="product-share-wrapper">
                  <div className="profile-share"></div>
                  <div className="share-btn share-btn-activation dropdown">
                    <button
                      className="icon"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        viewBox="0 0 14 4"
                        fill="none"
                        width="16"
                        height="16"
                        className="sc-bdnxRM sc-hKFxyN hOiKLt"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>

                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                      <button
                        type="button"
                        className="btn-setting-text share-text"
                        data-bs-toggle="modal"
                        data-bs-target="#shareModal"
                      >
                        Share
                      </button>
                      <button
                        type="button"
                        className="btn-setting-text report-text"
                        data-bs-toggle="modal"
                        data-bs-target="#reportModal"
                      >
                        Report
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#">
                  <span className="product-name">Preatent</span>
                </a>
                <span className="latest-bid">Highest bid 1/20</span>
                <div className="bid-react-area">
                  <div className="last-bid">0.244wETH</div>
                  <div className="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      className="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span className="number">322</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="800"
              className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
            >
              <div className="product-style-one no-overlay">
                <div className="card-thumbnail">
                  <a href="#">
                    <img src={g2} alt="NFT_portfolio" />
                  </a>
                </div>
                <div className="product-share-wrapper">
                  <div className="profile-share"></div>
                  <div className="share-btn share-btn-activation dropdown">
                    <button
                      className="icon"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        viewBox="0 0 14 4"
                        fill="none"
                        width="16"
                        height="16"
                        className="sc-bdnxRM sc-hKFxyN hOiKLt"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>

                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                      <button
                        type="button"
                        className="btn-setting-text share-text"
                        data-bs-toggle="modal"
                        data-bs-target="#shareModal"
                      >
                        Share
                      </button>
                      <button
                        type="button"
                        className="btn-setting-text report-text"
                        data-bs-toggle="modal"
                        data-bs-target="#reportModal"
                      >
                        Report
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#">
                  <span className="product-name">Diamond Dog</span>
                </a>
                <span className="latest-bid">Highest bid 5/11</span>
                <div className="bid-react-area">
                  <div className="last-bid">0.892wETH</div>
                  <div className="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      className="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span className="number">420</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-delay="350"
              data-sal-duration="800"
              className="col-5 col-lg-4 col-md-6 col-sm-6 col-12"
            >
              <div className="product-style-one no-overlay">
                <div className="card-thumbnail">
                  <a href="#">
                    <img src={g1} alt="NFT_portfolio" />
                  </a>
                </div>
                <div className="product-share-wrapper">
                  <div className="profile-share"></div>
                  <div className="share-btn share-btn-activation dropdown">
                    <button
                      className="icon"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <svg
                        viewBox="0 0 14 4"
                        fill="none"
                        width="16"
                        height="16"
                        className="sc-bdnxRM sc-hKFxyN hOiKLt"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>

                    <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                      <button
                        type="button"
                        className="btn-setting-text share-text"
                        data-bs-toggle="modal"
                        data-bs-target="#shareModal"
                      >
                        Share
                      </button>
                      <button
                        type="button"
                        className="btn-setting-text report-text"
                        data-bs-toggle="modal"
                        data-bs-target="#reportModal"
                      >
                        Report
                      </button>
                    </div>
                  </div>
                </div>
                <a href="#">
                  <span className="product-name">mAtal8</span>
                </a>
                <span className="latest-bid">Highest bid 6/50</span>
                <div className="bid-react-area">
                  <div className="last-bid">0.244wETH</div>
                  <div className="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width="16"
                      height="16"
                      className="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      ></path>
                    </svg>
                    <span className="number">205</span>
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

export default ProductDetail;