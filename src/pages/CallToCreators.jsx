//import axios from "axios";
//import React, { useContext } from "react";
//import { toast } from "react-toastify";
//import { pinFileToIPFS } from "../pinata";
//import { TransactionContext } from "../context/Transactions";
//import { glhContext } from "../context/Context";
import { Link } from "react-router-dom";


const CallToCreators = () => {
 
  


  return (
    <div>
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">
                Call To Creators
              </h5>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-list">
                <li className="item">
                  <a href="/">Home</a>
                </li>
                <li className="separator">
                  <i className="feather-chevron-right"></i>
                </li>
                <li className="item current">Call to creators</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="create-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5 d-flex justify-content-center">
            <div className="col-lg-8">
              <div className="form-wrapper-one">
                <form className="row" action="#">
                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="name" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="e. g. `example@example.com`"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label className="form-label">Artist Name *</label>
                      <input
                        id="Royality"
                        placeholder=" Enter Artist name"
                        type="text"
                       
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="Royality" className="form-label">
                        Artist Alias (If applicable)
                      </label>
                      <input
                        type="text"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label className="form-label">Phone Number *</label>
                      <input
                        placeholder="e. g. `+91-987-654-3210`"
                        type="text"
                       
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="Royality" className="form-label">
                        Name of the work you are submitting: *
                      </label>
                      <input
                        type="text"
                        placeholder="Art one"
                        
                
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-box  pb--20">
                      <label htmlFor="Royality" className="form-label">
                        Art Medium *
                      </label>
                      <div className="form-check col-md-6">
                        <select
                          class="form-check-input py-3"
                         
                
                        >
                          <option selected value=''>Open this select menu</option>
                          
                         
                        </select>
                      </div>

                      {/* <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios1"
                          value="Painting"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              artType: e.target.value,
                              
                            })
                          }
                        />
                        <label className="form-check-label" for="exampleRadios1">
                          Painting
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios2"
                          value="Drawing"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              artType:  e.target.value,
                            
                            })
                          }
                        />
                        <label className="form-check-label" for="exampleRadios2">
                          Drawing
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios3"
                          value="Collage"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              artType:  e.target.value,
                            
                            })
                          }
                        />
                        <label className="form-check-label" for="exampleRadios3">
                          Collage
                        </label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios4"
                          value="Sculpture"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              artType:  e.target.value,
                            })
                          }
                        />
                        <label className="form-check-label" for="exampleRadios4">
                          Sculpture
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios5"
                          value="photography"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              artType: e.target.value,
                            })
                          }
                        />
                        <label className="form-check-label" for="exampleRadios5">
                          PhotoGraphy
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="exampleRadios"
                          id="exampleRadios6"
                          value="other"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              artType:e.target.value,     
                            })
                          }
                        />
                        <label class="form-check-label" for="exampleRadios6">
                          Other
                        </label>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-box pb--20">
                      <label htmlFor="Royality" className="form-label">
                        Art Height *
                      </label>
                      <input
                        type="number"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-box pb--20">
                      <label htmlFor="Royality" className="form-label">
                        Art Width *
                      </label>
                      <input
                        type="number"
                        
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="Royality" className="form-label">
                        Retail price of the 1st work you are submitting: *
                      </label>
                      <input
                        type="text"
                        
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="upload-area">
                      <div className="upload-formate mb--30">
                        <h6 className="title">Upload Your Work *</h6>
                        <p className="formate">
                          Drag or choose your file to upload
                        </p>
                      </div>

                      <div className="brows-file-wrapper">
                        <input
                          type="file"
                          className="inputfile"
                          data-multiple-caption=" files selected"
                          multiple
                        
                        />

                        <label htmlFor="file" title="No File Choosen">
                          <i className="feather-upload"></i>
                          <span className="text-center">Choose a File</span>
                          <p className="text-center mt--10">
                            JPG, JPEG, PNG,MP3,MP4 GIF, WEBP. <br /> Max 5Mb.
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex">
                
                      <div className="mb-5 mx-2 d-flex flex-column">
                        
                          <img
                         
                            alt="upload"
                            style={{ height: "200px", objectFit: "contain" }}
                          />
                      
                   
                          <video
                            src={""}
                            controls
                            style={{ height: "200px", objectFit: "contain" }}
                          />
                  
                        
                          <audio
                            src={""}
                            controls
                            style={{ height: "200px", objectFit: "contain" }}
                          />
                       
                        <button
                          className=" btn btn-danger btn-sm mt-2 mb-2 "
                          // onClick={() => removeFile(index)}
                         // onClick={() => setFileURLs([])}
                        >
                          <i className="feather-x"></i>
                        </button>
                      </div>
               
                  </div>

                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="Royality" className="form-label">
                        Artist Biography *
                      </label>
                      <textarea
                        placeholder=" Add Artist Biography"
                        name="artistBioText"
                     
                        
                      
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="upload-area">
                      <div className="upload-formate mb--30">
                        <h6 className="title">Artist Biography Upload</h6>
                        <p className="formate">
                          Drag or choose your file to upload
                        </p>
                      </div>

                      <div className="brows-file-wrapper">
                        <input
                          name="file"
                          id="file"
                          type="file"
                          className="inputfile"
                        
                        
                    
                        />

                        <label htmlFor="file" title="No File Choosen">
                          <i className="feather-upload"></i>
                          <span className="text-center">Choose a File</span>
                          <p className="text-center mt--10">
                            JPG, JPEG, PNG, GIF, WEBP. <br /> Max 5Mb.
                          </p>
                        </label>
                      </div>
                 
                        <div className="mb-5 mx-2 d-flex flex-column align-items-center justify-content-center">
                          <img
                            
                            alt="kjdb"
                            style={{
                              height: "200px",
                              width: "200px",
                              objectFit: "contain",
                            }}
                          />
                        </div>
                   
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="Royality" className="form-label">
                        I am interested in participating in upcoming GLH
                        Galleries NFT Collections *
                      </label>

                      <div className="input-box rn-check-box">
                        <input
                          className="rn-check-box-input"
                          type="checkbox"
                          checked
                        />
                        <label
                          className="rn-check-box-label"
                          htmlFor="putonsale"
                        >
                          Yes
                        </label>
                      </div>

                      <div className="input-box pb--20 rn-check-box">
                        <input className="rn-check-box-input" type="checkbox" />
                        <label
                          className="rn-check-box-label"
                          htmlFor="instantsaleprice"
                        >
                          No
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="Royality" className="form-label">
                        GLH Galleries would like permission to use images and
                        videos of your artwork in our promotional efforts. Our
                        goal is to bring awareness to the artist in our space.
                        We will not be altering the art in any form. Our sole
                        channels for the content will be via social media posts,
                        our website and press outreach. We will credit the
                        artist on anything that features their work. This
                        agreement does not guarantee that we will use your work,
                        we are making sure we have your permission in the case
                        that we do. I give GLH Galleries permission to use my
                        works in this manner. *
                      </label>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox1"
                          value="option1"
                          checked
                        />
                        <label class="form-check-label" for="inlineCheckbox1">
                          Yes
                        </label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="inlineCheckbox2"
                          value="option2"
                        />
                        <label class="form-check-label" for="inlineCheckbox2">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12 col-xl-12 mt_lg--15 mt_md--15 mt_sm--15">
                    <div className="input-box"></div>
                  </div>
                </form>
                <button
                  className="btn btn-primary "
                  type="button"
              
                >
                  Submit
                </button>
              </div>
            </div>

            <div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
              <h5> Note: </h5>
              <span>
                {" "}
                Service fee : <strong>2.5%</strong>{" "}
              </span>{" "}
              <br />
              <span>
                {" "}
                You will receive : <strong>25.00 ETH $50,000</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToCreators;
