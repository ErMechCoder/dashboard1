import React from "react";
import Logo from "../images/logo.png";

const ForgetPassword = () => {
  return (
    <div>
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">
                Forget Password?
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
                <li className="item current">Forget Password?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="forget-password-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div className="offset-4 col-lg-4">
              <div className="form-wrapper-one">
                <div className="logo-thumbnail logo-custom-css mb--50">
                  <a className="logo-light" href="#">
                    <img src={Logo} alt="nft-logo" />
                  </a>
                  <a className="logo-dark" href="#">
                    <img src={Logo} alt="nft-logo" />
                  </a>
                </div>

                <div className="mb-5">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="exampleInputEmail1"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="checkbox"
                    className="rn-check-box-input"
                    id="exampleCheck1"
                  />
                  <label className="rn-check-box-label" htmlFor="exampleCheck1">
                    I agree to the <a href="#">privacy policy</a>{" "}
                  </label>
                </div>

                <div className="mb-5">
                  <button className="btn btn-large btn-primary">Send</button>
                </div>

                <span className="mt--20 notice">
                  Note: We will send a password to your email
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;