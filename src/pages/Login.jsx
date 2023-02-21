import React from "react";
import { Link } from "react-router-dom";
import google from "../images/icons/google.png";
import facebook from "../images/icons/facebook.png";
//import axios from "axios";
//import { useNavigate } from "react-router-dom";
//import { TransactionContext } from "../context/Transactions";
//import { useContext } from "react";
//import { toast } from "react-toastify";
//import { glhContext } from "../context/Context";

const Login = () => {
  

  return (
    <div>
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">Login</h5>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-list">
                <li className="item">
                  <Link to="#">Home</Link>
                </li>
                <li className="separator">
                  <i className="feather-chevron-right"></i>
                </li>
                <li className="item current">Login</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="login-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div className=" offset-2 col-lg-4 col-md-6 ml_md--0 ml_sm--0 col-sm-12">
              <div className="form-wrapper-one">
                <h4>Login</h4>
                <form >
                  <div className="mb-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="exampleInputEmail1"
                      name="email"
                     
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="exampleInputPassword1"
                      name="password"
                      
                    />
                  </div>
                  <div className="mb-5 rn-check-box">
                    <input
                      type="checkbox"
                      className="rn-check-box-input"
                      id="exampleCheck1"

                      defaultChecked
                    />
                    <label
                      className="rn-check-box-label"
                      htmlFor="exampleCheck1"
                    
                    >
                      Remember me later
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary mr--15">
                    Log In
                  </button>
                  <Link to="/signup" className="btn btn-primary-alta">
                    Sign Up
                  </Link>
                  <div className="mt-5">
                    <Link to="/forget-password" className="pt-5">
                      Forget Password?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="social-share-media form-wrapper-one">
                <h6>Another way to log in</h6>
                <p>
                  {" "}
                  Login with your social media account to easily connect with
                  friends and the world around you.
                </p>
                <button className="another-login login-facebook">
                  {" "}
                  <img className="small-image" src={google} alt="" />{" "}
                  <span>Log in with Google</span>
                </button>
                <button className="another-login login-facebook">
                  {" "}
                  <img className="small-image" src={facebook} alt="" />{" "}
                  <span>Log in with Facebook</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;