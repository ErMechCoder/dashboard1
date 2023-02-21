import React from "react";
//import av1 from "../images/av1.png";
//import av2 from "../images/av2.png";
//import av3 from "../images/av3.png";
//import av4 from "../images/av4.png";
import { Link } from "react-router-dom";
import "../css/team.css";


const OurTeam = () => {
  return (
    <div className="rn-product-area rn-section-gapTop py-5">
      <div className="container">
        <div className="row mb--50 align-items-center">
          <div className="col-12 text-center">
            <h3
              className="title mb--0"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              Our Team
            </h3>
          </div>
        </div>
        <link
          to="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
        />

        <div id="rs-team" class="rs-team fullwidth-team pt-100 pb-70">
          <div class="container">
            <div class="row">
              <div className="col-lg-2"></div>
              <div class="col-lg-4 col-md-6 my-5">
                <div class="team-item  mx-5">
                  <div class="team-img">
                    <img
                      src="https://images.pexels.com/photos/8837775/pexels-photo-8837775.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="team Image"
                    />
                    <div class="normal-text">
                      <h4 class="team-name">Levi Howze</h4>
                      <span class="subtitle">VP of Innovation</span>
                    </div>
                  </div>
                  <div class="team-content">
                    <div class="display-table">
                      <div class="display-table-cell">
                        <div class="share-icons">
                          <div class="border"></div>
                          <ul class="team-social icons-1">
                            <li>
                             <Link style={{  backgroundColor: "green"}} to="#" class="social-icon">
                                <i class="fa fa-facebook"></i>
                            </Link>
                            </li>
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-twitter"></i>
                            </Link>
                            </li>
                          </ul>

                          <ul class="team-social icons-2">
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-skype"></i>
                            </Link>
                            </li>
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-linkedin"></i>
                            </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="team-details">
                          <h4 class="team-name">
                           <Link to="speakers-single.html">Levi Howze  </Link>
                          </h4>
                          <span class="postion">VP of Innovation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 my-5">
                <div class="team-item mx-5 ">
                  <div class="team-img">
                    <img
                      // src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      src="https://images.pexels.com/photos/7682479/pexels-photo-7682479.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="team Image"
                    />
                    <div class="normal-text">
                      <h4 class="team-name">Gma Howze</h4>
                      <span class="subtitle">CEO</span>
                    </div>
                  </div>
                  <div class="team-content">
                    <div class="display-table">
                      <div class="display-table-cell">
                        <div class="share-icons">
                          <div class="border"></div>
                          <ul class="team-social icons-1">
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-facebook"></i>
                            </Link>
                            </li>
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-twitter"></i>
                            </Link>
                            </li>
                          </ul>

                          <ul class="team-social icons-2">
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-skype"></i>
                            </Link>
                            </li>
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-linkedin"></i>
                            </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="team-details">
                          <h4 class="team-name">
                           <Link to="speakers-single.html">GMA HOWZE </Link>
                          </h4>
                          <span class="postion">CEO</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 "></div>
              <div class="col-lg-2"></div>

              <div class="col-lg-4 col-md-6 ">
                <div class="team-item mx-5 my-2 ">
                  <div class="team-img">
                    <img
                      src="https://images.pexels.com/photos/7675014/pexels-photo-7675014.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="team Image"
                    />
                    <div class="normal-text">
                      <h4 class="team-name">Cysion</h4>
                      <span class="subtitle">Project Manager</span>
                    </div>
                  </div>
                  <div class="team-content">
                    <div class="display-table">
                      <div class="display-table-cell">
                        <div class="share-icons">
                          <div class="border"></div>
                          <ul class="team-social icons-1">
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-facebook"></i>
                            </Link>
                            </li>
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-twitter"></i>
                            </Link>
                            </li>
                          </ul>

                          <ul class="team-social icons-2">
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-skype"></i>
                            </Link>
                            </li>
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-linkedin"></i>
                            </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="team-details">
                          <h4 class="team-name">
                           <Link to="speakers-single.html">Cysion </Link>
                          </h4>
                          <span class="postion">Project Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-4"></div> */}
              <div class="col-lg-4 col-md-6">
                <div class="team-item mx-5 my-2">
                  <div class="team-img">
                    <img
                      src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="team Image"
                    />
                    <div class="normal-text">
                      <h4 class="team-name">James Highsmith</h4>
                      <span class="subtitle">Marketing Manager</span>
                    </div>
                  </div>
                  <div class="team-content">
                    <div class="display-table">
                      <div class="display-table-cell">
                        <div class="share-icons">
                          <div class="border"></div>
                          <ul class="team-social icons-1">
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-facebook"></i>
                            </Link>
                            </li>
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-twitter"></i>
                            </Link>
                            </li>
                          </ul>

                          <ul class="team-social icons-2">
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-skype"></i>
                            </Link>
                            </li>
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-linkedin"></i>
                            </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="team-details">
                          <h4 class="team-name">
                           <Link to="speakers-single.html">James Highsmith </Link>
                          </h4>
                          <span class="postion">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div class="col-lg-4 col-md-6">
                <div class="team-item px-5">
                  <div class="team-img">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="team Image"
                    />
                    <div class="normal-text">
                      <h4 class="team-name">Rihana kery</h4>
                      <span class="subtitle">CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div class="team-content">
                    <div class="display-table">
                      <div class="display-table-cell">
                        <div class="share-icons">
                          <div class="border"></div>
                          <ul class="team-social icons-1">
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-facebook"></i>
                            </Link>
                            </li>
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-twitter"></i>
                            </Link>
                            </li>
                          </ul>

                          <ul class="team-social icons-2">
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-skype"></i>
                            </Link>
                            </li>
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-linkedin"></i>
                            </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="team-details">
                          <h4 class="team-name">
                           <Link to="speakers-single.html">Rihana kery </Link>
                          </h4>
                          <span class="postion">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="team-item px-5">
                  <div class="team-img">
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                      alt="team Image"
                    />
                    <div class="normal-text">
                      <h4 class="team-name">Siymon catich</h4>
                      <span class="subtitle">CEO &amp; Founder</span>
                    </div>
                  </div>
                  <div class="team-content">
                    <div class="display-table">
                      <div class="display-table-cell">
                        <div class="share-icons">
                          <div class="border"></div>
                          <ul class="team-social icons-1">
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-facebook"></i>
                            </Link>
                            </li>
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-twitter"></i>
                            </Link>
                            </li>
                          </ul>

                          <ul class="team-social icons-2">
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-skype"></i>
                            </Link>
                            </li>
                            <li>
                             <Link to="#" class="social-icon">
                                <i class="fa fa-linkedin"></i>
                            </Link>
                            </li>
                          </ul>
                        </div>
                        <div class="team-details">
                          <h4 class="team-name">
                           <Link to="speakers-single.html">Siymon catich </Link>
                          </h4>
                          <span class="postion">CEO &amp; Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;