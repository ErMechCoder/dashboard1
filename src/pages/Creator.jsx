import React from "react";
import UserNfts from "../components/UserNfts";
// import { nftmarketaddress, nftaddress } from "../config";
// import Market from "../artifacts/contracts/Market.sol/Market.json";
// import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
// import { ethers } from "ethers";
// import axios from "axios";
//import { useContext } from "react";
// import { TransactionContext } from "../context/Transactions";
import Asset from "../components/Asset";
//import axios from "axios";
import AssetPagination from "../components/AssetPagination";
import { Link } from "react-router-dom";
//import NftService from "../services/NftService";
//import { glhContext } from "../context/Context";
// import Web3Modal from 'web3modal'

const Creator = () => {
  // const {
  //   soldNfts,
  //   resellOwnedItem,
  //   onSaleNfts,
  //   fetchOnSaleNfts,
  //   loadNFTs,
  //   purchasedNfts,
  //   currentAccount,
  // } = useContext(TransactionContext);

 
  return (
    <div>
      <div className="rn-author-bg-area bg_image--9 bg_image ptb--150">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>

      <div className="rn-author-area mb--30 mt_dec--120">
        <div className="container">
          <div className="row padding-tb-50 align-items-center d-flex">
            <div className="col-lg-12">
              <div className="author-wrapper">
                <div className="author-inner">
                  <div className="user-thumbnail">
                    <img src={""} alt="" />
                  </div>
                  <div className="rn-author-info-content">
                    <h4 className="title">
                      currentAccount 
                    </h4>
                    <p>user</p>

                    <div className="follow-area">
                      <div className="follow followers">
                        <span>
                         
                      <Link Linkto="#" className="color-body">
                            Total Arts
                          </Link>
                        </span>
                      </div>
                      <div className="follow following">
                        <span>
                         45{" "}
                      <Link Linkto="#" className="color-body">
                            On Sale
                          </Link>
                        </span>
                      </div>
                    </div>
                    <div className="author-button-area">
                      <span className="btn at-follw follow-button">
                        <i className="bi bi-person-plus"></i>&nbsp; Follow
                      </span>
                      <span
                        className="btn at-follw share-button"
                        data-bs-toggle="modal"
                        data-bs-target="#shareModal"
                      >
                        <i className="bi bi-share"></i>
                      </span>

                      <div className="count at-follw">
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
                              className="btn-setting-text report-text"
                              data-bs-toggle="modal"
                              data-bs-target="#reportModal"
                            >
                              Report
                            </button>
                            <button
                              type="button"
                              className="btn-setting-text report-text"
                            >
                              Claim Owenership
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-authore-profile-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
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
                      On Sale
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
                      Purchased
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
                      // onClick={fetchCreatedAssets}
                    >
                      Created
                    </button>

                    <button
                      className="nav-link"
                      id="nav-liked-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-liked"
                      type="button"
                      role="tab"
                      aria-controls="nav-liked"
                      aria-selected="false"
                    >
                   <Link Link
                       to=""
                        target=""
                      >
                        Transactions
                      </Link>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="tab-content rn-bid-content" id="nav-tabContent">
            <div
              className="tab-pane row g-5 d-flex fade"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
               kb 
            </div>
            <div
              className="tab-pane row g-5 d-flex fade show active"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              bljbjbkjbk
              
            </div>
            <div
              className="tab-pane row g-5 d-flex fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
           
                  <Asset
                    
                  />
          
              <AssetPagination />
            </div>
            <div
              className="tab-pane row g-5 d-flex fade"
              id="nav-liked"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              
                  <UserNfts />
               
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creator;