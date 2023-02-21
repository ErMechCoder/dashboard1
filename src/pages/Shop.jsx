import React from "react";

import ShopFilters from "../components/ShopFilters";
import ShopCard from "../components/ShopCard";
//import axios from "axios";
//import { TransactionContext } from "../context/Transactions";
//import { CircularProgressbar } from 'react-circular-progressbar';


const Shop = () => {
  

  // React.useEffect(() => {
  //   if(shopProductsLoading){
  //    setInterval(() => {
  //       if(loadPercent<100){
  //         setLoadPercent( loadPercent + 1);
  //       }
  //     }, 100);
  //   }
  //   else{
  //     setLoadPercent(0);
    
  //   }
  // }, [shopProductsLoading]);
  


  return (
    <div className="rn-product-area rn-section-gapTop py-5">
      <div className="container">
        <div className="row mb--50 align-items-center">
          <div className="col-12 text-center">
            <h3
              className="title mb--0"
              data-sal-delay="150"
              data-sal="slide-up"
              data-sal-duration="800"
            >
              Explore Product
            </h3>
          </div>
        </div>
{/* The shop Cards are here */}
       <ShopFilters/>
        <div className="row g-5">
         
         <h3>shop details</h3>
         <ShopCard/>
        </div>
      </div>
    </div>
  );
};

export default Shop;