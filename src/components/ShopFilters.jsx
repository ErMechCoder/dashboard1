//import axios from "axios";
import React from "react";
//import { TransactionContext } from "../context/Transactions";
//import { Range, getTrackBackground} from 'react-range'
//import { useContext } from "react";

//import { glhContext } from "../context/Context";

const ShopFilters = () => {
 


  return (
    <div className="default-exp-wrapper ">
      <form action="#" method="GET" onSubmit="">
        <div className="inner fil-inner row ">
          

          <div className="filter-select-option">
            <label className="filter-leble">Category</label>
            <select name="artType" >
              <option   value={'all'} selected="" >All</option>
              <option value="art">Art</option>
              <option value="Painting" >Painting</option>
              <option value="drawing">Drawing</option>
              <option value="collage">Collage</option>
              <option value="sculpture">Sculpture</option>
              <option value="photography">PhotoGraphy</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div
            className="filter-select-option "
            name="likes"
           
          >
            {/* <label className="filter-leble" >Popularity </label>
            <select name="likes" onChange={handleChange}>
              <option value={1}>all</option>
              <option value={2}>Popular</option>
            </select> */}

<label className="filter-leble" >Art Type </label>
            <select name="fileType" >
              <option value='all' selected>All</option>
              <option value='image/gif'>GIFs</option>
              <option value='image'>Image Arts</option>
              <option value='audio'>Audio Arts</option>
              <option value='video'>Video Arts</option>
            </select>
          </div>

          {/* <div className="filter-select-option">
            <label className="filter-leble">Price</label>
            <select name="price" onChange={handlePriceChange}>

            <option value="all" defaultChecked>  all  </option>
              <option value="low" >  $0 -10  </option>
              <option value="medium">$11-$20</option>
              <option value="high">High</option>

            </select>
          </div> */}



          <div className="filter-select-option">
            <label className="filter-leble">Sort By</label>
            <select name="sortBy" >
              <option value="all" selected=""> All  </option>
              <option value="likes">Popular</option>
              <option value="price">Budget</option>
              <option value="date">Latest</option>
            </select>
          </div>

          <div className="filter-select-option">
            <label className="filter-leble">Price Range</label>
            <div className="price_filter s-filter clear">
              <div id="slider-range"></div>
              <div className="slider__range--output">
                <div className="price__output--wrap">
                  <div className="price--output">
                    <span>Price :</span>
                    <input type="text" id="amount" />
                  </div>
                  <div className="price--filter">
                    <button type="submit" className="btn btn-primary btn-small"  >
                      Submit
                    </button>
                    </div>
                  <div className="price--filter">
                    <button type="button" className="btn btn-primary btn-small" >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ShopFilters;