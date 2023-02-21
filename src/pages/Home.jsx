import React from "react";
//import f1 from "../images/f1.png";
//import f2 from "../images/f2.png";
//import f3 from "../images/f3.png";
//import g1 from "../images/g1.png";
//import g2 from "../images/g2.png";
//import g3 from "../images/g3.png";
import h2 from "../images/h2.png";
import t1 from "../images/t1.png";
import t2 from "../images/t2.png";
import t3 from "../images/t3.png";
import t4 from "../images/t4.png";
import about from "../images/about.png";
import { Link } from "react-router-dom";

// import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
// import Market from "../artifacts/contracts/Market.sol/Market.json";
// import { ethers } from "ethers";
// import Web3Modal from "web3modal";
 import axios from "axios";
// import { nftmarketaddress } from "../config";
// import { nftaddress } from "../config";
//import Nft from "../components/Nft";
import { Hero } from "../components/Hero";
import { useState } from "react";
//import NftService from "../services/NftService";
//import { glhContext } from "../context/Context";
//import { CircularProgressbar } from "react-circular-progressbar";
import ShopCard from "../components/ShopCard";

//import { useContext, useState } from "react";

const Home = () => {
  const [active, setActive] =useState(false);
  const [loading, setLoading] = React.useState(false);


  const [shopProducts, setShopProducts] = useState([]);
  //const [shopProductsLoading, setShopProductsLoading] = useState(false);
  //const [loadPercent, setLoadPercent] = React.useState(99);


  const fetchProducts = async () => {
    try {
     // setShopProductsLoading(true);
      const response = await axios.get(
        "http://glhapi.ekanatechnologies.in/api/shop/get-all"
      );
      if (response.status === 200) {
        const activeProducts = await response.data.filter(
          (product) => product.status === "Active"
        );
        setShopProducts(activeProducts);
       // setShopProductsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchProducts();
  }, []);



 



  console.log(shopProducts)
   
  return (
    <div>
      {/* <div className="container-fluid">
        <iframe
          src="https://my.matterport.com/show/?m=p8M8Xsgmwhf"
          frameBorder="0"
          width="853"
          height="600"
          allowFullScreen
          allow="xr-spatial-tracking"
        ></iframe>
      </div> */}

      <div className="rn-banner-area">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="slider-style-6 wide-wrapper slick-activation-06 slick-arrow-between">
                <div className="slide bg_image bg_image--19">
                  <div className="banner-read-thumb-lg">
                    <h4>
                      The way to find any <br /> Digital content
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolores expedita beatae exercitationem quasi ullam esse?
                    </p>
                    <div className="button-group">
                      <Link
                        to="/login"
                        className="btn btn-large btn-primary mr--15"
                      >
                        Get Started
                      </Link>
                      <Link
                        to="/createnft"
                        className="btn btn-large btn-primary-alta"
                      >
                        Create
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-5">
          <div className="col-lg-8 align-self-center">
            <div className="h--100">
              <div className="rn-about-card aboutmargin widge-wrapper rbt-sticky-top-adjust">
                <div className="inner">
                  <h2
                    className="title"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    About Us
                    
                  </h2>
                  <p
                    className="about-disc"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    We will exercise best efforts to sell the creator's artwork,
                    although this clause is difficult to enforce. In addition to
                    assurance of certainty we deal exclusively for the artist's
                    interest. Therefore, we want to keep our business dealings
                    with you, the creators, confidential.
                  </p>
                  <Link
                    to="/about"
                    className="btn btn-primary-alta btn-large sal-animate mt--20"
                    data-sal="slide-up"
                    data-sal-duration="800"
                    data-sal-delay="150"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="rn-about-card transparent-bg">
              <div className="inner">
                <img src={about} alt="brand icon" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-live-bidding-area rn-section-gapTop">
        <div className="container">
          <div className="row mb--50">
            <div className="col-lg-12">
              <div className="section-title">
                <h3
                >
                  Featured Art
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
            
                <div className="text-center">
                 
                  <p
                    className="text-white"
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      marginTop: "1rem",
                    }}
                  >
                    Loading...
                  </p>
                </div>
  
                <div className="banner-one-slick slick-activation-03 slick-arrow-style-one rn-slick-dot-style slick-gutter-15 row">
                  nft
                </div>
          
            </div>
          </div>
        </div>
      </div>

      <Hero />

      <div className="rn-new-items rn-section-gapTop">
        <div className="container">
          <div className="row mb--50 align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <h3
                className="title mb--0"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Newest Items
              </h3>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
              <div
                className="view-more-btn text-start text-sm-end"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <a className="btn-transparent" href="#">
                  VIEW ALL<i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div className="">
              <div className="col-lg-12">
                 
                  <div className="banner-one-slick slick-activation-03 slick-arrow-style-one rn-slick-dot-style slick-gutter-15 row">
                    nft
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-top-top-seller-area nice-selector-transparent rn-section-gapTop mt-5">
        <div className="container">
          <div className="row  mb--30">
            <div className="col-12 justify-sm-center d-flex">
              <h3
                className="title"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Top Seller in
              </h3>
            </div>
          </div>
          <div className="row justify-sm-center g-5 top-seller-list-wrapper">
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
            >
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail varified">
                    <a href="#">
                      <img src={t1} alt="Nft_Profile" />
                    </a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Brodband</h6>
                    </a>
                    <span className="count-number">$2500,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
            >
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail">
                    <a href="#">
                      <img src={t2} alt="Nft_Profile" />
                    </a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Ms. Parkline</h6>
                    </a>
                    <span className="count-number">$2300,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
            >
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail">
                    <a href="#">
                      <img src={t3} alt="Nft_Profile" />
                    </a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Methods</h6>
                    </a>
                    <span className="count-number">$2100,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
            >
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail varified">
                    <a href="#">
                      <img src={t4} alt="Nft_Profile" />
                    </a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Jone sone</h6>
                    </a>
                    <span className="count-number">$2000,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
            >
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail">
                    <a href="#">
                      <img src={t1} alt="Nft_Profile" />
                    </a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Siddhart</h6>
                    </a>
                    <span className="count-number">$200,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
            >
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail varified">
                    <a href="#">
                      <img src={t2} alt="Nft_Profile" />
                    </a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Sobuj Mk</h6>
                    </a>
                    <span className="count-number">$2000,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
            >
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail varified">
                    <a href="#">
                      <img src={t3} alt="Nft_Profile" />
                    </a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Trodband</h6>
                    </a>
                    <span className="count-number">$2500,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
            >
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail">
                    <a href="#">
                      <img src={t4} alt="Nft_Profile" />
                    </a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Yash</h6>
                    </a>
                    <span className="count-number">$2500,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
            >
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail">
                    <a href="#">
                      <img src={t1} alt="Nft_Profile" />
                    </a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">YASHKIB</h6>
                    </a>
                    <span className="count-number">$2500,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-5 col-lg-3 col-md-4 col-sm-6 top-seller-list"
            >
              <div className="top-seller-inner-one">
                <div className="top-seller-wrapper">
                  <div className="thumbnail varified">
                    <a href="#">
                      <img src={t2} alt="Nft_Profile" />
                    </a>
                  </div>
                  <div className="top-seller-content">
                    <a href="#">
                      <h6 className="name">Brodband</h6>
                    </a>
                    <span className="count-number">$2500,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-product-area rn-section-gapTop py-5">
        <div className="container">
          <div className="row mb--50 align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <h3
                className="title mb--0"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <Link to="/shop">Explore Product</Link>
              </h3>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
              <div
                className="view-more-btn text-start text-sm-end"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <button
                  className="discover-filter-button discover-filter-activation btn btn-primary"
                  onClick={() => setActive(!active)}
                >
                  Filter<i className="feather-filter"></i>
                </button>
              </div>
            </div>
          </div>

          <div 
            className={`default-exp-wrapper default-exp-expand ${
              active && " filActive"
            }`}
          >
            <div className="inner">
              <div className="filter-select-option">
                <label className="filter-leble">LIKES</label>
                <select>
                  <option data-display="Most liked">Most liked</option>
                  <option value="1">Least liked</option>
                </select>
              </div>

              <div className="filter-select-option">
                <label className="filter-leble">Category</label>
                <select>
                  <option data-display="Category">Category</option>
                  <option value="1">Art</option>
                  <option value="1">Photograph</option>
                  <option value="2">Metaverses</option>
                  <option value="4">Potato</option>
                  <option value="4">Photos</option>
                </select>
              </div>

              <div className="filter-select-option">
                <label className="filter-leble">Collections</label>
                <select>
                  <option data-display="Collections">Collections</option>
                  <option value="1">BoredApeYachtClub</option>
                  <option value="2">MutantApeYachtClub</option>
                  <option value="4">Art Blocks Factory</option>
                </select>
              </div>

              <div className="filter-select-option">
                <label className="filter-leble">Sale type</label>
                <select>
                  <option data-display="Sale type">Sale type</option>
                  <option value="1">Fixed price</option>
                  <option value="2">Timed auction</option>
                  <option value="4">Not for sale</option>
                  <option value="4">Open for offers</option>
                </select>
              </div>

              <div className="filter-select-option">
                <label className="filter-leble">Price Range</label>
                <div className="price_filter s-filter clear">
                  <form action="#" method="GET">
                    <div id="slider-range"></div>
                    <div className="slider__range--output">
                      <div className="price__output--wrap">
                        <div className="price--output">
                          <span>Price :</span>
                          <input type="text" id="amount" />
                        </div>
                        <div className="price--filter">
                          <a className="btn btn-primary btn-small" href="#">
                            Filter
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-5">
            {
              shopProducts
            
                .map((product) => (
                  <ShopCard
                    key={product._id}
                    product={product}
                    fetchProducts={fetchProducts}
                  />
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;