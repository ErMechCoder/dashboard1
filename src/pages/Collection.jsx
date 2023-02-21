import React from "react";
import { Link } from "react-router-dom";
import SingleItem from "../components/collection/SingleItem";
//import axios from "axios";
//import { TransactionContext } from "../context/Transactions";
import Pagination from "../components/pagination/Pagination";


const Collection = () => {
 

  return (
    <div>
      <div className="rn-breadcrumb-inner ptb--30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <h5 className="title text-center text-md-start">
                Our Collection
              </h5>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-list">
                <li className="item">
                  <Link to="#">Home</Link>
                </li>
                <li className="separator">
                  <i className="feather-chevron-right"></i>
                </li>
                <li className="item current">Collection</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-collection-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5 mb-5">
          
          <SingleItem />
                
               
         
          </div>
          <Pagination/>
          
        </div>
      </div>
    </div>
  );
};

export default Collection;
