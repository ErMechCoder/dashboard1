import React from "react";
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import { Link } from 'react-router-dom'

const OurNews = () => {
  return (
    <div>
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">Our News</h5>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-list">
                <li className="item">
                 <Link to="#">Home</Link>
                </li>
                <li className="separator">
                  <i className="feather-chevron-right"></i>
                </li>
                <li className="item current">Our News</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-blog-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12"
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
            >
              <div
                className="rn-blog"
                data-toggle="modal"
                data-target="#exampleModalCenters"
              >
                <div className="inner">
                  <div className="thumbnail">
                   <Link to="#">
                      <img src={f1} alt="Personal Portfolio Images" />
                   </Link>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                       <Link to="#">Art</Link>
                      </div>
                      <div className="meta">
                        <span>
                          <i className="feather-clock"></i> 12 Min read
                        </span>
                      </div>
                    </div>
                    <h4 className="title">
                     <Link to="#">
                        Lorem ipsum dolor sit amet consectetur.{" "}
                        <i className="feather-arrow-up-right"></i>
                     </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12"
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="800"
            >
              <div
                className="rn-blog"
                data-toggle="modal"
                data-target="#exampleModalCenters"
              >
                <div className="inner">
                  <div className="thumbnail">
                   <Link to="#">
                      <img src={f2} alt="Personal Portfolio Images" />
                   </Link>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                       <Link to="#">Design</Link>
                      </div>
                      <div className="meta">
                        <span>
                          <i className="feather-clock"></i> 5 min read
                        </span>
                      </div>
                    </div>
                    <h4 className="title">
                     <Link to="#">
                        Lorem ipsum dolor sit amet consectetur.
                        <i className="feather-arrow-up-right"></i>
                     </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12"
              data-sal="slide-up"
              data-sal-delay="250"
              data-sal-duration="800"
            >
              <div
                className="rn-blog"
                data-toggle="modal"
                data-target="#exampleModalCenters"
              >
                <div className="inner">
                  <div className="thumbnail">
                   <Link to="#">
                      <img src={f3} alt="Personal Portfolio Images" />
                   </Link>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                       <Link to="#">3D</Link>
                      </div>
                      <div className="meta">
                        <span>
                          <i className="feather-clock"></i> 10 min read
                        </span>
                      </div>
                    </div>
                    <h4 className="title">
                     <Link to="#">
                        Lorem ipsum dolor sit amet consectetur.
                        <i className="feather-arrow-up-right"></i>
                     </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12"
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-duration="800"
            >
              <div
                className="rn-blog"
                data-toggle="modal"
                data-target="#exampleModalCenters"
              >
                <div className="inner">
                  <div className="thumbnail">
                   <Link to="#">
                      <img src={f1} alt="Personal Portfolio Images" />
                   </Link>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                       <Link to="#">NFT's</Link>
                      </div>
                      <div className="meta">
                        <span>
                          <i className="feather-clock"></i> 1 min read
                        </span>
                      </div>
                    </div>
                    <h4 className="title">
                     <Link to="#">
                        Lorem ipsum dolor sit amet consectetur.
                        <i className="feather-arrow-up-right"></i>
                     </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12"
              data-sal="slide-up"
              data-sal-delay="350"
              data-sal-duration="800"
            >
              <div
                className="rn-blog"
                data-toggle="modal"
                data-target="#exampleModalCenters"
              >
                <div className="inner">
                  <div className="thumbnail">
                   <Link to="#">
                      <img src={f2} alt="Personal Portfolio Images" />
                   </Link>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                       <Link to="#">Digital Art</Link>
                      </div>
                      <div className="meta">
                        <span>
                          <i className="feather-clock"></i> 15 min read
                        </span>
                      </div>
                    </div>
                    <h4 className="title">
                     <Link to="#">
                        Lorem ipsum dolor sit amet consectetur.
                        <i className="feather-arrow-up-right"></i>
                     </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12"
              data-sal="slide-up"
              data-sal-delay="400"
              data-sal-duration="800"
            >
              <div
                className="rn-blog"
                data-toggle="modal"
                data-target="#exampleModalCenters"
              >
                <div className="inner">
                  <div className="thumbnail">
                   <Link to="#">
                      <img src={f3} alt="Personal Portfolio Images" />
                   </Link>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                       <Link to="#">Condolance</Link>
                      </div>
                      <div className="meta">
                        <span>
                          <i className="feather-clock"></i>7 min read
                        </span>
                      </div>
                    </div>
                    <h4 className="title">
                     <Link to="#">
                        Lorem ipsum dolor sit amet consectetur.
                        <i className="feather-arrow-up-right"></i>
                     </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12"
              data-sal="slide-up"
              data-sal-delay="450"
              data-sal-duration="800"
            >
              <div
                className="rn-blog"
                data-toggle="modal"
                data-target="#exampleModalCenters"
              >
                <div className="inner">
                  <div className="thumbnail">
                   <Link to="#">
                      <img src={f1} alt="Personal Portfolio Images" />
                   </Link>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                       <Link to="#">Collection</Link>
                      </div>
                      <div className="meta">
                        <span>
                          <i className="feather-clock"></i> 11 min read
                        </span>
                      </div>
                    </div>
                    <h4 className="title">
                     <Link to="#">
                        Lorem ipsum dolor sit amet consectetur.
                        <i className="feather-arrow-up-right"></i>
                     </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12"
              data-sal="slide-up"
              data-sal-delay="500"
              data-sal-duration="800"
            >
              <div
                className="rn-blog"
                data-toggle="modal"
                data-target="#exampleModalCenters"
              >
                <div className="inner">
                  <div className="thumbnail">
                   <Link to="#">
                      <img src={f2} alt="Personal Portfolio Images" />
                   </Link>
                  </div>
                  <div className="content">
                    <div className="category-info">
                      <div className="category-list">
                       <Link to="#">Digital Assets</Link>
                      </div>
                      <div className="meta">
                        <span>
                          <i className="feather-clock"></i>5 min read
                        </span>
                      </div>
                    </div>
                    <h4 className="title">
                     <Link to="#">
                        Lorem ipsum dolor sit amet consectetur.{" "}
                        <i className="feather-arrow-up-right"></i>
                     </Link>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col-lg-12"
              data-sal="slide-up"
              data-sal-delay="550"
              data-sal-duration="800"
            >
              <nav
                className="pagination-wrapper"
                aria-label="Page navigation example"
              >
                <ul className="pagination">
                  <li className="page-item">
                   <Link className="page-link" to="#">
                      Previous
                   </Link>
                  </li>
                  <li className="page-item">
                   <Link className="page-link active" to="#">
                      1
                   </Link>
                  </li>
                  <li className="page-item">
                   <Link className="page-link" to="#">
                      2
                   </Link>
                  </li>
                  <li className="page-item">
                   <Link className="page-link" to="#">
                      3
                   </Link>
                  </li>
                  <li className="page-item">
                   <Link className="page-link" to="#">
                      Next
                   </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurNews;