import React from "react";
import Logo from "../images/logo.png";
import p1 from "../images/av1.png";
import p2 from "../images/av2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div
        className="rn-popup-modal share-modal-wrapper modal fade"
        id="shareModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i data-feather="x"></i>
        </button>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content share-wrapper">
            <div className="modal-header share-area">
              <h5 className="modal-title">Share this NFT</h5>
            </div>
            <div className="modal-body">
              <ul className="social-share-default">
                <li>
                  <Link to="#">
                    <span className="icon">
                      <i className="bi bi-facebook"></i>
                    </span>
                    <span className="text">facebook</span>
                 </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon">
                      <i className="bi bi-twitter"></i>
                    </span>
                    <span className="text">twitter</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon">
                      <i className="bi bi-linkedin"></i>
                    </span>
                    <span className="text">linkedin</span>
                 </Link>
                </li>
                <li>
                  <Link to="#">
                    <span className="icon">
                      <i className="bi bi-instagram"></i>
                    </span>
                    <span className="text">instagram</span>
                 </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        className="rn-popup-modal report-modal-wrapper modal fade"
        id="reportModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i data-feather="x"></i>
        </button>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content report-content-wrapper">
            <div className="modal-header report-modal-header">
              <h5 className="modal-title">Why are you reporting?</h5>
            </div>
            <div className="modal-body">
              <p>
                Describe why you think this item should be removed from
                marketplace
              </p>
              <div className="report-form-box">
                <h6 className="title">Message</h6>
                <textarea name="message" placeholder="Write issues"></textarea>
                <div className="report-button">
                  <button
                    type="button"
                    className="btn btn-primary mr--10 w-auto"
                  >
                    Report
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary-alta w-auto"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-footer-one rn-section-gap bg-color--1 mt--100 mt_md--80 mt_sm--80">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="widget-content-wrapper">
                <div className="footer-left">
                  <div className="logo-thumbnail logo-custom-css">
                    <Link className="logo-light" to="/">
                      <img src={Logo} alt="nft-logo" />
                    </Link>
                    <Link className="logo-dark" to="/">
                      <img src={Logo} alt="nft-logo" />
                    </Link>
                  </div>
                </div>
                <div className="widget-bottom mt--40 pt--40">
                  <h6 className="title">Get The Latest Updates </h6>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-color--2"
                      placeholder="Your username"
                      aria-label="Recipient's username"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary-alta btn-outline-secondary"
                        type="button"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <div className="newsletter-dsc">
                    <p>Email is safe. We don't spam.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
              <div className="footer-widget widget-quicklink">
                <h6 className="widget-title">Expore</h6>
                <ul className="footer-list-one">
                  <li className="single-list">
                    <Link to="#">Explore Arts</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/our-news">Our News</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/our-collection">Our Collection</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/upcoming-events">Upcoming Events</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/connect-to-wallet">Connect to Wallet</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-widget widget-information">
                <h6 className="widget-title">Information</h6>
                <ul className="footer-list-one">
                  <li className="single-list">
                    <Link to="/contact">Contact US</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/about">About Us</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/contact">Support</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/our-news">News</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-widget">
                <h6 className="widget-title">Recent Sold Out</h6>
                <ul className="footer-recent-post">
                  <li className="recent-post">
                    <div className="thumbnail">
                      <Link to="#">
                        <img src={p1} alt="Product Images" />
                     </Link>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link to="#">#21 The Wonder</Link>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <span className="price">0.244wETH</span>
                    </div>
                  </li>
                  <li className="recent-post">
                    <div className="thumbnail">
                      <Link to="#">
                        <img src={p2} alt="Product Images" />
                     </Link>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link to="#">Diamond Dog</Link>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <span className="price">0.022wETH</span>
                    </div>
                  </li>
                  <li className="recent-post">
                    <div className="thumbnail">
                      <Link to="#">
                        <img src={p2} alt="Product Images" />
                     </Link>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link to="#">Morgan11</Link>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <span className="price">0.892wETH</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copy-right-one ptb--20 bg-color--1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-left">
                <span>© GLH Galleries. All rights reserved.</span>
                <ul className="privacy">
                  <li>
                    <Link to="/terms">Terms</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-right">
                <ul className="social-copyright">
                  <li>
                    <Link to="#">
                      <i className="bi bi-facebook"></i>
                   </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="bi bi-twitter"></i>
                   </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="bi bi-instagram"></i>
                   </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="bi bi-linkedin"></i>
                   </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="bi bi-envelope"></i>
                   </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>

      <div className="rn-progress-parent">
        <svg
          className="rn-back-circle svg-inner"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
  );
};

export default Footer;