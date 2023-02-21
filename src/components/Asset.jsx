
import React from "react";
//import { TransactionContext } from "../context/Transactions";
//import NftService from "../services/NftService";

const Asset = () => {
  // const { createSale } = React.useContext(TransactionContext);
  return (
    <div
      data-sal="slide-up"
      data-sal-delay="550"
      data-sal-duration="800"
      className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 mb-5"
    >
      <div className="rn-collection-inner-one">
        <div className="collection-wrapper">
          <div className="collection-big-thumbnail">
            <h1>kjabkjbdkjb</h1>
          </div>
          <div className="collection-deg">
            <h6 className="title">name</h6>
            <div className="items">
              {/* <span>{item.price}  MATIC</span> */}
           
                <button className="btn btn-primary" disabled>
                  Listed on Sale
                </button>
          
                <button className="btn btn-primary" >
                  Create Sale
                </button>
       
            </div>
          </div>
          <div className="collection-deg">
            <span>5000 MATIC</span>
            <span>category</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Asset;