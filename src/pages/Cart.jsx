import React from "react";
import { Link } from "react-router-dom";
//import { TransactionContext } from "../context/Transactions";
//import { useContext } from "react";

const Cart = () => {
 // const {cart,setCart,removeFromCart,totalPrice,setTotalPrice} = useContext(TransactionContext);
    // const [totalPrice, setTotalPrice] = React.useState(0);
    // const [cart, setCart] = React.useState([]);
  //console.log(cart);


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
              Cart
            </h3>
          </div>
        </div>

        <section class="h-100 h-custom" style={{ backgroundColor: "#eee;" }}>
          <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
              <div class="col">
                <div class="card" style={{ backgroundColor: "#252232" }}>
                  <div class="card-body p-4">
                    <div class="row form-wrapper-one">
                      <div class="col-lg-7">
                        <h5 class="mb-3">
                          <a href="#!">
                            <i class="fas fa-long-arrow-alt-left me-2"></i>
                            Continue shopping
                          </a>
                        </h5>
                        <hr />

                        <div class="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <p class="mb-1">Shopping cart</p>
                            <p class="mb-0">You have  'Items':'Item'in your cart</p>
                          </div>
                          <div>
                            <p class="mb-0">
                              <span class="text-muted">Sort by:</span> price{" "}
                              <i class="fas fa-angle-down mt-1"></i>
                            </p>
                          </div>
                        </div>

                       
                        

                        <div
                          className="card my-4 mb-lg-0"
                          style={{ backgroundColor: "#2f2b3e" }}
                        >
                          <div class="card-body">
                            <div class="d-flex justify-content-between">
                              <div class="d-flex flex-row align-items-center">
                                <div>
                                
                                      <img
                                    src={""}
                                    class="img-fluid rounded-3"
                                    alt="Shopping item"
                                    style={{ width: "65px" }}
                                  />
                                    
                                  <video
                                    src={""}
                                    autoPlay
                                    class="img-fluid rounded-3"
                                    alt="Shopping item"
                                    style={{ width: "65px",height:"65px" }}
                                  />
                                    
                                  
                                 
                                   
                                      <audio controls >
                                      <source src="" />
                                    </audio>
                                
                                   
                                </div>
                                <div class="ms-3">
                                  <h5>product name</h5>
                                  <p class="small mb-0">51, by: no</p>
                                </div>
                              </div>
                              <div class="d-flex flex-row align-items-center">
                                <div style={{ width: " 50px" }} className='d-flex align-items-center justify-content-center'>
                                <i class="bi bi-dash" >m</i>
                                <div className="cart_counter">
                                  <h5 class="fw-normal mb-0">item</h5>

                                </div>
                                <i class="bi bi-plus" >m</i>
                                                             
                                </div>
                                <div style={{ width: " 80px" }}>
                                  <h5 class="mb-0">${500*125/100}</h5>
                                </div>
                                <button style={{ color: "#cecece",border:'none' ,width:'50px'}} >
                                  <i class="fas fa-trash-alt"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                   

                      </div>
                   
                    
                      <div class="col-lg-5">
                        <div
                          class="card text-white rounded-3 mt-5 "
                          style={{ backgroundColor: "#2f2b3e" }}
                        >
                          <div class="card-body ">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                              <h5 class="mb-0">Payment details</h5>
                            </div>

                            <form class="mt-4">
                              <div class="form-outline form-white mb-4">
                                <label class="form-label" for="typeName">
                                  Delivery Type
                                </label>
                                <select style={{ padding: "10px" }}>
                                  <option>Standerd Delivery (Free)</option>
                                  <option>Express Delivery($5)</option>
                                </select>
                              </div>
                            </form>

                            <div class="d-flex justify-content-between">
                              <p class="mb-2">Subtotal</p>
                              <p class="mb-2">50</p>
                            </div>

                            <div class="d-flex justify-content-between">
                              <p class="mb-2">Shipping</p>
                              <p class="mb-2">${20.00}</p>
                            </div>

                            <div class="d-flex justify-content-between mb-4">
                              <p class="mb-2">Total(Incl. taxes)</p>
                              <p class="mb-2">mm</p>
                            </div>
                            <div className="text-center">
                              <button type="button" class="btn gets ">
                                <div class="d-flex justify-content-between align-items-center ">
                                  <Link to='/checkout'>
                                    Checkout{" "}
                                    <i class="fas fa-long-arrow-alt-right ms-2"></i>
                                  </Link>
                                </div>
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
        </section>
      </div>
    </div>
  )

}

export default Cart;