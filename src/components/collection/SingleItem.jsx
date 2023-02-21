import React from "react";
//import f1 from "../../images/f1.png";
import { Link } from "react-router-dom";
// axios from "axios";

const SingleItem = () => {

  return (
    <div
      data-sal="slide-up"
      data-sal-delay="150"
      data-sal-duration="800"
      className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12"
    >
      <Link to={`/cat/${""}`} className="rn-collection-inner-one">
        <div className="collection-wrapper">
          <div className="collection-big-thumbnail">
            <img src={
              ""
            } alt="Nft_Profile" />
          </div>

          <div className="collection-deg">
            <h6 className="title">item</h6>
            <span className="items">Items</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleItem;