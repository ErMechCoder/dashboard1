import React from "react";
//import { TransactionContext } from "../context/Transactions";
import { Link } from "react-router-dom";


const Checkout = () => {

 

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
              CheckOut
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
                          <Link to="#!">Shipping details</Link>
                        </h5>
                        <hr />

                        <form class="mt-4">
                          <div class="form-outline form-white mb-4">
                            <input
                              type="text"
                             name="name"
                            
                              placeholder="Customer's Name"
                            />
                            <label class="form-label" for="typeName">
                              Customer Name
                            </label>
                          </div>

                          <div class="row mb-4">
                            <div class="col-md-6">
                              <div class="form-outline form-white">
                                <input
                                  type="text"
                                
                                  placeholder="Enter your email"
                                  name="email"
                                  
                                 
                                />
                                <label class="form-label" for="typeExp">
                                  Email Address
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-outline form-white">
                                <input
                                  type="text"                               
                                  placeholder="Enter your mobile number"
                                  name="phone"
                                                                 
                                />
                                <label class="form-label" for="typeText">
                                  Mobile Number
                                </label>
                              </div>
                            </div>
                          </div>

                          <p>Shipping address</p>
                          <div class="form-outline form-white mb-4">
                            <input
                              type="text"                            
                              placeholder="Enter your house no."
                              name="address"
                              
                            />
                            <label class="form-label" for="typeText">
                              House No.
                            </label>
                          </div>
                          <div class="form-outline form-white mb-4">
                            <input
                              type="text"
                              placeholder="Enter your street address"
                              name="address"
                            
                            
                            />
                            <label class="form-label" for="typeText">
                              Street
                            </label>
                          </div>
                          <div class="row mb-4">
                            <div class="col-md-6">
                              <div class="form-outline form-white">
                                <input
                                  type="text"
                                  placeholder="Enter your city"
                                  name="city"
                                 
                                />
                                <label class="form-label" for="typeExp">
                                  City
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-outline form-white">
                                <input
                                  type="text"
                                  placeholder="Enter your state"
                                  name="state"
                               
                                />
                                <label class="form-label" for="typeText">
                                  State
                                </label>
                              </div>
                            </div>
                          </div>
                          <div class="row mb-4">
                            <div class="col-md-6">
                              <div class="form-outline form-white">
                                <input
                                  type="text"
                                  placeholder="Enter your country"
                                  name="country"
                                 
                                />
                                <label class="form-label" for="typeExp">
                                  Country
                                </label>
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="form-outline form-white">
                                <input
                                  type="text"
                                  placeholder="Enter your pin code"
                                  name="zip"
                                 
                                />
                                <label class="form-label" for="typeText">
                                  Pin Code
                                </label>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="col-lg-5 mt-5">
                        <div
                          class="card text-white rounded-3"
                          style={{ backgroundColor: "#2f2b3e" }}
                        >
                          <div class="card-body">
                            <div class="d-flex justify-content-between align-items-center mb-4">
                              <h5 class="mb-0">Card details</h5>
                            </div>

                            <p class="small mb-2">Card type</p>
                            <Link to="#!" type="submit" class="text-white">
                              <i class="fab fa-cc-mastercard fa-2x me-2"></i>
                            </Link>
                            <Link to="#!" type="submit" class="text-white">
                              <i class="fab fa-cc-visa fa-2x me-2"></i>
                            </Link>
                            <Link to="#" type="submit" class="text-white">
                              <i class="fab fa-cc-amex fa-2x me-2"></i>
                            </Link>
                            <Link to="#" type="submit" class="text-white">
                              <i class="fab fa-cc-paypal fa-2x"></i>
                            </Link>

                            {/* <form class="mt-4">
                              <div class="form-outline form-white mb-4">
                                <input
                                  type="text"
                                  id="typeName"
                                  siez="17"
                                  placeholder="Cardholder's Name"
                                />
                                <label class="form-label" for="typeName">
                                  Cardholder's Name
                                </label>
                              </div>

                              <div class="form-outline form-white mb-4">
                                <input
                                  type="text"
                                  id="typeText"
                                  class=""
                                  siez="17"
                                  placeholder="1234 5678 9012 3457"
                                  minlength="19"
                                  maxlength="19"
                                />
                                <label class="form-label" for="typeText">
                                  Card Number
                                </label>
                              </div>

                              <div class="row mb-4">
                                <div class="col-md-6">
                                  <div class="form-outline form-white">
                                    <input
                                      type="text"
                                      id="typeExp"
                                      placeholder="MM/YYYY"
                                      size="7"
                                      minlength="7"
                                      maxlength="7"
                                    />
                                    <label class="form-label" for="typeExp">
                                      Expiration
                                    </label>
                                  </div>
                                </div>
                                <div class="col-md-6">
                                  <div class="form-outline form-white">
                                    <input
                                      type="password"
                                      id="typeText"
                                      placeholder="&#9679;&#9679;&#9679;"
                                      size="1"
                                      minlength="3"
                                      maxlength="3"
                                    />
                                    <label class="form-label" for="typeText">
                                      Cvv
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </form> */}

                            <hr class="my-4" />

                            <div class="d-flex justify-content-between">
                              <p class="mb-2">Subtotal</p>
                              <p class="mb-2">${1580 *125/100}</p>
                            </div>

                            <div class="d-flex justify-content-between">
                              <p class="mb-2">Shipping</p>
                              <p class="mb-2">$20.00</p>
                            </div>

                            <div class="d-flex justify-content-between mb-4">
                              <p class="mb-2">Total(Incl. taxes)</p>
                              <p class="mb-2">${(500*125/100 )+20}</p>
                            </div>
                            <div className="text-center">
                              <button type="button" class="btn gets">
                                <div class="d-flex justify-content-between ">
                                  <span>
                                    Pay Now{" "}
                                    <i class="fas fa-long-arrow-alt-right ms-2"></i>
                                  </span>
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
  );
};

export default Checkout;