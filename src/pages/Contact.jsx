import React from "react";
import contact from "../images/contact.jpg";

const Contact = () => {
  return (
    <div>
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">
                Contact With Us
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
                <li className="item current">Contact With Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-contact-top-area rn-section-gapTop bg_color--5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-12"
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
            >
              <div className="section-title mb--30 text-center">
                <h2 className="title">Quick Contact Address</h2>
                <p className="description">
                  There are many variations of passages of Lorem Ipsum
                  available, <br /> but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
            >
              <div className="rn-address">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-headphones"
                  >
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                  </svg>
                </div>
                <div className="inner">
                  <h4 className="title">Contact Phone Number</h4>
                  <p>
                    <a href="tel: (713) 485 6808 "> (713) 485 6808 </a>
                  </p>
                  
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="800"
            >
              <div className="rn-address">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="inner">
                  <h4 className="title">Our Email Address</h4>
                  <p>
                    <a href="mailto:gma@glhgalleries.com">
                    gma@glhgalleries.com
                    </a>
                  </p>
                  <p>
                    <a href="mailto:danielle@glhgalleries.com ">
                    danielle@glhgalleries.com 
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 col-sm-6 col-12"
              data-sal="slide-up"
              data-sal-delay="250"
              data-sal-duration="800"
            >
              <div className="rn-address">
                <div className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-map-pin"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="inner">
                  <h4 className="title">Our Location</h4>
                  <p>5301 Almeda Road 

Houston, Texas 77001</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="login-area message-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6"
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
            >
              <div className="connect-thumbnail">
                <div className="left-image">
                  <img src={contact} alt="Nft_Profile" />
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-sal="slide-up"
              data-sal-delay="200"
              data-sal-duration="800"
            >
              <div className="form-wrapper-one registration-area">
                <h3 className="mb--30">Contact Us</h3>
                <form
                  className="rwt-dynamic-form"
                  id="contact-form"
                  method="POST"
                  action="mail.php"
                >
                  <div className="mb-5">
                    <label for="contact-name" className="form-label">
                      Your Name
                    </label>
                    <input name="contact-name" id="contact-name" type="text" />
                  </div>
                  <div className="mb-5">
                    <label for="contact-email" className="form-label">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="contact-email"
                      type="email"
                    />
                  </div>
                  <div className="mb-5">
                    <label for="subject" className="form-label">
                      Subject
                    </label>
                    <input id="subject" name="subject" type="text" />
                  </div>
                  <div className="mb-5">
                    <label for="contact-message" className="form-label">
                      Write Message
                    </label>
                    <textarea
                      name="contact-message"
                      id="contact-message"
                      rows="3"
                    ></textarea>
                  </div>

                  <button
                    name="submit"
                    type="submit"
                    className="btn btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-contact-map-area position-relative rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-12"
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.9282006594394!2d-95.38101368489242!3d29.7218389820008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bf9c181336a7%3A0x1061d034d0ef30e3!2s5301%20Almeda%20Rd%2C%20Houston%2C%20TX%2077004%2C%20USA!5e0!3m2!1sen!2sin!4v1643906240205!5m2!1sen!2sin"
                height="350"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;