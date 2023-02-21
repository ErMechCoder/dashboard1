import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
// import Avtar from "../images/icons/boy-avater.png";
// import p7 from "../images/portfolio/portfolio-07.jpg";
// import p1 from "../images/portfolio/portfolio-01.jpg";
import Sun from "../images/Sun";
//import v1 from "../images/vector.svg";
import Vector from "../images/Vector";
// import avtr from "../images/avtr.jpg";
import metamask from "../images/metamask.png";
import { useState } from "react";
//import { useContext } from "react";
//import NftService from "../services/NftService";
//import { glhContext } from "../context/Context";


const Header = () => {
  
  const [active,setActive]=useState(false);
  const [theme,setTheme]=useState(true)
 






  return (
    <div>
      <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
        <div className="container">
          <div className="header-inner">
            <div className="header-left">
              <div className="logo-thumbnail logo-custom-css">
                <Link to="/" className="logo-light">
                  <img src={Logo} alt="nft-logo" />
                </Link>
                <Link to="/" className="logo-dark">
                  <img src={Logo} alt="nft-logo" />
                </Link>
              </div>
              <div className="mainmenu-wrapper">
                <nav id="sideNav" className="mainmenu-nav d-none d-xl-block" style={{width: '500px'}}>
                  <ul className="mainmenu">
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li className="with-megamenu">
                      <Link className="its_new" to="#">
                        Explore
                      </Link>
                      <div className="rn-megamenu">
                        <div className="wrapper">
                          <div className="row row--0">
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <Link to="/create-nft">
                                    Create NFT
                                    <i className="bi bi-file-earmark-plus"></i>
                                  </Link>
                                </li>
                                {/* <li>
                                  <Link to="/our-collection">
                                    Our Collection
                                    <i className="bi bi-collection"></i>
                                  </Link>
                                </li> */}

                                <li>
                                  <Link to="/upcoming-events">
                                    Upcoming Events
                                    <i class="bi bi-calendar2-event"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <Link to="/find-creator">
                                    Find Creators
                                    <i className="bi bi-search"></i>
                                  </Link>
                                </li>
                                {/* <li>
                                  <Link to="/upcoming-events">
                                    Upcoming Events
                                    <i class="bi bi-calendar2-event"></i>
                                  </Link>
                                </li> */}
                              </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <Link
                                    to="/connect-to-wallet"
                                  
                                  >
                                    Connect to Wallet
                                    <i className="bi bi-wallet2"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            {/* <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <Link to="/our-news">
                                    Our News <i className="bi bi-newspaper"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="with-megamenu">
                     <Link Link className="its_new" to="/blog">
                        Blog
                      </Link>
                      <div className="rn-megamenu">
                        <div className="wrapper">
                          <div className="row row--0">
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <Link to="blog">
                                    Blog
                                    <i className="bi bi-file-earmark-plus"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <Link to="/blog-details">
                                    Blog Details
                                    <i className="bi bi-file-earmark-plus"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>

                            <div className="col-lg-3 single-mega-item">
                              <ul className="mega-menu-item">
                                <li>
                                  <Link to="/our-news">
                                    Our News
                                    <i className="bi bi-wallet2"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* <li>
                      <Link to="/shop">Shop</Link>
                    </li> */}
                    <li>
                      <Link to="/creator">Your NFTs</Link>
                    </li>
                    {/* <li>
                      <Link to="/contact">Contact</Link>
                    </li> */}
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/team">Our Team</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header-right" >
              <div className="setting-option header-btn">
                <div className="icon-box">
                  <Link className="btn ctc" to="/call-to-creators">
                    Call to Creators
                  </Link>
                </div>
              </div>
              <div className="setting-option header-btn">
                <div className="icon-box">
                  <Link to="/login" className="btn gets">
                    Get Started
                  </Link>
                </div>
              </div>
              <div className="setting-option rn-icon-list user-account">
                <div className="icon-box">
                  { /*user && (
                   <Link Link to="#">
                      <img src={user?.profilePicture} alt="Images" />
                    </Link>
                  ) */}
                  <div className="rn-dropdown">
                    <div className="rn-inner-top">
                      <h4 className="title">
                        <Link to="#">"name"</Link>
                      </h4>
                    </div>
                    <div className="rn-product-inner">
                      <ul className="product-list">
                        <li className="single-product-list">
                          <div className="thumbnail">
                            <Link to="#">
                              <img src={metamask} alt="Nft Product Images" />
                            </Link>
                          </div>
                          <div className="content">
                            <h6 className="title">
                              <Link to="#">Balance</Link>
                            </h6>
                            <span className="price">500 ETH</span>
                          </div>
                          <div className="button"></div>
                        </li>
                      </ul>
                    </div>
                    <div className="add-fund-button mt--20 pb--20">
                     <Link Link className="btn btn-primary-alta w-100" to="#">
                        Add Your More Funds
                      </Link>
                    </div>
                    <ul className="list-inner">
                      <li>
                        <Link to="creator">My Profile</Link>
                      </li>
                      <li>
                        <Link to="cart">Cart</Link>
                      </li>

                    
                        <li>
                          <Link to="/login">Login</Link>
                        </li>
                      
                        <li>
                          <Link to="#" >
                            Sign Out
                          </Link>
                        </li>
              
                    </ul>
                  </div>
                </div>
              </div>
              <div className="setting-option mobile-menu-bar d-block d-xl-none">
                <div className="hamberger">
                  <button
                    className="hamberger-button"
                    onClick={()=>setActive(!active)}
                  >
                    <i className="feather-menu"></i>
                  </button>
                </div>
              </div>
              <div id="my_switcher" className="setting-option my_switcher">
                <ul>

                  <li  >
                 
                    {
                      <Link data-theme="light" className="setColor light"
                      onClick={()=>setTheme(!theme)}
                    >
                      { theme ?<Sun/>:  <Vector/> }
                    </Link>
                    }
                 </li>
                
                  <li>
                  <Link to="/cart" className="wrapper">
              <i class="fa" style={{ fontSize: "29px" }}>
                &#xf07a;
              </i>
              <span className="cartspan"> {"159"} </span>
            </Link> 
                  </li>
                </ul>
              </div>
            </div>

           
          </div>
        </div>
      </header>

      <div className={`popup-mobile-menu ${active && " active"}`}>
        <div className="inner">
          <div className="header-top">
            <div className="logo logo-custom-css">
             <Link Link className="logo-light" to="#">
                <img src={Logo} alt="nft-logo" />
              </Link>
             <Link Link className="logo-dark" to="#">
                <img src={Logo} alt="nft-logo" />
              </Link>
            </div>
            <div className="close-menu">
              <button
                className="close-button"
                onClick={() => setActive(!active)}
              >
                <i className="feather-x"></i>
              </button>
            </div>
          </div>

          <nav>
            <ul className="mainmenu">
              <li className="has-droupdown">
               <Link Link className="nav-link its_new" to="#">
                  Home
                </Link>
                <ul className="submenu">
                  <li>
                   <Link Link to="#">
                      Home page One <i className="feather-home"></i>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
               <Link Link to="#">About</Link>
              </li>
              <li className="has-droupdown">
               <Link Link className="nav-link its_new" to="#">
                  Explore
                </Link>
                <ul className="submenu">
                  <li>
                   <Link Link to="#">
                      Explore Filter<i className="feather-fast-forward"></i>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="with-megamenu">
               <Link Link className="nav-link its_new" to="#">
                  Pages
                </Link>
                <div className="rn-megamenu">
                  <div className="wrapper">
                    <div className="row row--0">
                      <div className="col-lg-3 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                           <Link Link to="#">
                              Create NFT<i data-feather="file-plus"></i>
                            </Link>
                          </li>
                          <li>
                           <Link Link to="#">
                              Upload Type<i data-feather="layers"></i>
                            </Link>
                          </li>

                          <li>
                           <Link Link to="#">
                              Creators<i data-feather="users"></i>
                            </Link>
                          </li>
                          {/* <li>
                           <Link Link to="#">
                              Our Collection<i data-feather="package"></i>
                            </Link>
                          </li> */}
                          <li>
                           <Link Link to="#">
                              Upcoming Projects<i data-feather="loader"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                           <Link Link to="#">
                              Connect to Wallet <i data-feather="pocket"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                           <Link Link to="#">
                              NFT Ranking<i data-feather="trending-up"></i>
                            </Link>
                          </li>
                          <li>
                           <Link Link to="#">
                              Our News <i data-feather="message-square"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-3 single-mega-item">
                        <ul className="mega-menu-item">
                          <li>
                           <Link Link to="#">
                              Contact <i data-feather="headphones"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
               <Link Link to="#">Blog</Link>
              </li>
              <li>
               <Link Link to="#">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;