import React from "react";
import { Link } from "react-router-dom";
//import axios from "axios";
// import Web3Modal from "web3modal";
// import { ethers } from "ethers";
// import { nftaddress, nftmarketaddress } from "../config";
// import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
// import Market from '../artifacts/contracts/Market.sol/Market.json'
//import { toast, ToastContainer } from "react-toastify";
//import { TransactionContext } from "../context/Transactions";
//import { pinFileToIPFS } from "../pinata";
//import { glhContext } from "../context/Context";

const CreateNft = () => {
  
  return (
    <div>
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">
                Crete a New File
              </h5>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-list">
                <li className="item">
                  <Link to="index.html">Home</Link>
                </li>
                <li className="separator">
                  <i className="feather-chevron-right"></i>
                </li>
                <li className="item current">Crete a New File</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="create-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
              <div className="upload-area">
                <div className="upload-formate mb--30">
                  <h6 className="title">Upload file</h6>
                  <p className="formate">Drag or choose your file to upload</p>
                </div>

                <div className="brows-file-wrapper">
                  <input
                    name="file"
                    id="file"
                    type="file"
                    className="inputfile"
                    data-multiple-caption=" files selected"
               
                    multiple
                  />

                  <label htmlFor="file" title="No File Choosen">
                    <i className="feather-upload"></i>
                    <span className="text-center">Choose a File</span>
                    <p className="text-center mt--10">
                      PNG, GIF, WEBP, MP4 or MP3. <br /> Max 1Gb.
                    </p>
                  </label>
                </div>
               
                
              </div>

              {/* <div className="mt--100 mt_sm--30 mt_md--30 d-none d-lg-block">
                <h5> Note: </h5>
                <span>
                  {" "}
                  Service fee : <strong>2.5%</strong>{" "}
                </span>{" "}
              </div> */}
            </div>

            <div className="col-lg-7">
              <div className="form-wrapper-one">
                <form className="row" action="#">
                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="name" className="form-label">
                        Product Name
                      </label>
                      <input
                        id="name"
                        placeholder="Asset Name"
                        
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="Discription" className="form-label">
                        Description
                      </label>
                      <textarea
                        id="Discription"
                        rows="3"
                        placeholder="After purchasing the product you can get item..."
                       
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="input-box pb--20">
                      <label htmlFor="dollerValue" className="form-label">
                        Item Price in MATIC (MAT)
                      </label>
                      <input
                        id="dollerValue"
                        placeholder="Input the price in MAT"
                        
                      />
                    </div>
                  </div>

                  <div className="col-md-6 ">
                    <div className="input-box pb--20">
                      <label htmlFor="Propertie" className="form-label">
                        Category
                      </label>
                      <input
                        id="Propertie"
                        placeholder="e. g. `Propertie`"
                       />
                    </div>
                  </div>

                  <div className="col-md-6 my-2">
                    <div className="input-box pb--20">
                      <label htmlFor="dollerValue" className="form-label">
                        Asset Height (in cm)
                      </label>
                      <input
                        id="dollerValue"
                        placeholder="Enter the height in cm"
                        
                      />
                    </div>
                  </div>

                  <div className="col-md-6 my-2">
                    <div className="input-box pb--20">
                      <label htmlFor="Propertie" className="form-label">
                        Width (in cm)
                      </label>
                      <input
                        id="Propertie"
                        placeholder="Enter the width in cm"
                        
                      />
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-4 "></div>
                </form>
                <div className="col-md-12 col-xl-12 mt_lg--15 mt_md--15 mt_sm--15">
                  <div className="input-box">
                    <button
                      className="btn btn-primary btn-large w-100"
                     
                    >
                      Submit Item
                    </button>
                  </div>
                </div>
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

export default CreateNft;