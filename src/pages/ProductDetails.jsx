import React from "react";
import f1 from "../images/f1.png";
import f2 from "../images/f2.png";
import f3 from "../images/f3.png";
import g1 from "../images/g1.png";
import g2 from "../images/g2.png";
import eth from "../images/eth.jpeg";
import btc from "../images/btc.jpg";
import shib from "../images/shib.jpg";
import card from "../images/cardano.jpg";
import tron from "../images/tron.jpg";
import t1 from "../images/t1.png";
import t2 from "../images/t2.png";
import t3 from "../images/t3.png";
import t4 from "../images/t4.png";
import axios from "axios";
import { nftmarketaddress } from "../config";
import { nftaddress } from "../config";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/Market.json";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import NftService from "../services/NftService";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [product, setProduct] = React.useState([]);
  const productId = window.location.pathname.split("/")[2];
  const [currentAccount, setCurrentAccount] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(async () => {
    if (productId) {
      fetchSingleNft(productId);
    }

    const signer = await NftService.connectWallet();
    const ac = await signer.getAddress();
    setCurrentAccount(ac);
  }, [productId]);

  async function fetchSingleNft() {
    const web3Modal = new Web3Modal({
      network: "local",
    });
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const marketContract = new ethers.Contract(
      nftmarketaddress,
      Market.abi,
      signer
    );
    const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider);

    const data = await marketContract.fetchSingleItem(productId);

    const tokenUri = await tokenContract.tokenURI(data.tokenId);
    const meta = await axios.get(tokenUri);
    let price = ethers.utils.formatUnits(data.price.toString(), "ether");

    let item = {
      price,
      itemId: data.itemId.toString(),
      seller: data.seller,
      owner: data.owner,
      creator: data.creator,
      image: meta.data.image,
      name: meta.data.name,
      description: meta.data.desc,
      category: meta.data.category,
      height: meta.data.height,
      width: meta.data.width,
      fileType: meta.data.fileType,
    };
    setProduct(item);
  }

  const handleBuy = async (e) => {
    e.preventDefault();
    await NftService.buyNft(product);
    navigate("/creator");
  };

  return (
    <div>
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">
                Product Details
              </h5>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-list">
                <li className="item">
                <Link to="#">Home </Link>
                </li>
                <li className="separator">
                  <i className="feather-chevron-right"></i>
                </li>
                <li className="item current">Product Details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="product-details-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="product-tab-wrapper rbt-sticky-top-adjust">
                <div className="pd-tab-inner">
                  {/* <div
                    className="nav rn-pd-nav rn-pd-rt-content nav-pills"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="nav-link active"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <span className="rn-pd-sm-thumbnail">
                        <img src={f1} alt="Nft_Profile" />
                      </span>
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                    >
                      <span className="rn-pd-sm-thumbnail">
                        <img src={f2} alt="Nft_Profile" />
                      </span>
                    </button>
                    <button
                      className="nav-link"
                      id="v-pills-messages-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-messages"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-messages"
                      aria-selected="false"
                    >
                      <span className="rn-pd-sm-thumbnail">
                        <img src={f3} alt="Nft_Profile" />
                      </span>
                    </button>
                  </div> */}

                  <div
                    className="tab-content rn-pd-content"
                    id="v-pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="rn-pd-thumbnail">
                        {product?.fileType?.includes("image") ? (
                          <img src={product?.image} alt="Nft_Profile" />
                        ) : (
                          <video width="100%" height="100%" controls autoPlay>
                            <source src={product?.image} type="video/mp4" />
                          </video>
                        )}
                      </div>
                    </div>
                    {/* <div
                      className="tab-pane fade"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div className="rn-pd-thumbnail">
                        <img src={f2} alt="Nft_Profile" />
                      </div>
                    </div> */}
                    <div
                      className="tab-pane fade"
                      id="v-pills-messages"
                      role="tabpanel"
                      aria-labelledby="v-pills-messages-tab"
                    >
                      <div className="rn-pd-thumbnail">
                        <img src={f3} alt="Nft_Profile" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
              <div className="rn-pd-content-area">
                <div className="pd-title-area">
                  <h4 className="title">{product?.name}</h4>
                  <div className="pd-react-area">
                    <div className="count">
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
                            className="btn-setting-text share-text"
                            data-bs-toggle="modal"
                            data-bs-target="#shareModal"
                          >
                            Share
                          </button>
                          <button
                            type="button"
                            className="btn-setting-text report-text"
                            data-bs-toggle="modal"
                            data-bs-target="#reportModal"
                          >
                            Report
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="catagory-collection">
                  <div className="catagory">
                    <span>
                      Creator :{" "}
                      <span className="color-body">{product.creator}</span>
                    </span>
                  </div>
                </div>
                <div className="catagory-collection">
                  <div className="catagory">
                    <span>
                      Price :{" "}
                      <span className="color-body">{product?.price} MATIC</span>
                    </span>
                  </div>
                </div>

                <div className="rn-bid-details">
                  <div className="tab-wrapper-one">
                    <div
                      className="tab-content rn-bid-content"
                      id="nav-tabContent"
                    >
                      <div
                        className="tab-pane fade"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                      >
                        <div className="top-seller-inner-one">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                            <Link to="#">
                                <img src={eth} alt="Nft_Profile" />
                               </Link>
                            </div>
                            <div className="top-seller-content">
                              <span>
                              <Link to="#">{product?.price} MATIC </Link>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                      >
                        <div className="rn-pd-bd-wrapper mt--20">
                          <div className="top-seller-inner-one">
                            <h5 className="">Description :</h5>
                            <p className="disc">{product.description}</p>

                            <h6 className="name-title">Status</h6>
                            <div className="top-seller-wrapper">
                              <div className="thumbnail">
                              <Link to="#">
                                  <img
                                    src="https://image.shutterstock.com/image-vector/sale-icon-260nw-639544576.jpg"
                                    alt="Nft_Profile"
                                  />
                                 </Link>
                              </div>
                              <div className="top-seller-content">
                              <Link to="#">
                                  <h6 className="name">
                                    {product.owner ===
                                    "0x0000000000000000000000000000000000000000"
                                      ? "Open for Sale"
                                      : product.owner}
                                  </h6>
                                 </Link>
                              </div>
                            </div>
                            <h6 className="name-title mt-3">Seller</h6>

                            <div className="top-seller-wrapper">
                              <div className="thumbnail">
                              <Link to="#">
                                  <img src={f3} alt="Nft_Profile" />
                                 </Link>
                              </div>
                              <div className="top-seller-content">
                              <Link to="#">
                                  <h6 className="name">
                                    {product.seller ===
                                    "0x0000000000000000000000000000000000000000"
                                      ? "Not Sold Yet"
                                      : product.seller}
                                  </h6>
                                 </Link>
                              </div>
                            </div>
                          </div>

                          <div className="rn-pd-sm-property-wrapper">
                            <h6 className="pd-property-title">Property</h6>
                            <div className="property-wrapper">
                              <div className="pd-property-inner">
                                <span className="color-body type">
                                  CATEGORY
                                </span>
                                <span className="color-white value">
                                  {product.category}
                                </span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">HEIGHT</span>
                                <span className="color-white value">
                                  {product.height} cm
                                </span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">TYPE</span>
                                <span className="color-white value">APE</span>
                              </div>

                              <div className="pd-property-inner">
                                <span className="color-body type">WIDTH</span>
                                <span className="color-white value">
                                  {product.width} cm
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-contact"
                        role="tabpanel"
                        aria-labelledby="nav-contact-tab"
                      >
                        <div className="top-seller-inner-one mt--20">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                            <Link to="#">
                                <img src={t2} alt="Nft_Profile" />
                               </Link>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                2.3 ETH by <Link to="#">Lorem Ipsum </Link>
                              </span>
                              <span className="count-number">1 hours ago</span>
                            </div>
                          </div>
                        </div>

                        <div className="top-seller-inner-one mt--20">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                            <Link to="#">
                                <img src={t1} alt="Nft_Profile" />
                               </Link>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                45235435 SHIB by <Link to="#">Sari Tri </Link>
                              </span>
                              <span className="count-number">3 hours ago</span>
                            </div>
                          </div>
                        </div>

                        <div className="top-seller-inner-one mt--20">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                            <Link to="#">
                                <img src={t3} alt="Nft_Profile" />
                               </Link>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                .54 BTC by <Link to="#">Levi Howze </Link>
                              </span>
                              <span className="count-number">4 hours ago</span>
                            </div>
                          </div>
                        </div>

                        <div className="top-seller-inner-one mt--20">
                          <div className="top-seller-wrapper">
                            <div className="thumbnail">
                            <Link to="#">
                                <img src={t4} alt="Nft_Profile" />
                               </Link>
                            </div>
                            <div className="top-seller-content">
                              <span>
                                1231 TRX by <Link to="#">Allen Waltker </Link>
                              </span>
                              <span className="count-number">5 hours ago</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {product.seller !== currentAccount && (
                    <div className="place-bet-area">
                      <button
                        className="btn btn-primary-alta mt--30"
                        onClick={handleBuy}
                      >
                        Buy Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;