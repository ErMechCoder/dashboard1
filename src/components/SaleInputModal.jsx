import React from "react";
//import NftService from "../services/NftService";
//import { useNavigate } from "react-router-dom";

const SaleInputModal = () => {
  
  return (
    <>
      <div
        className={`modal fade ${"show" }`}
        style={{ display: "block", paddingRight: "16px" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex flex-column">
              <h5 className="modal-title text-secondary">
                Add Price for nft.name
              </h5>
              <small className="text-danger">Please edit the price only</small>
            </div>
            <div className="form-wrapper-one">
              <form className="row">
                <img src="" alt="" />
                <div className="col-md-12">
                  <div className="input-box pb--20">
                    <label htmlFor="name" className="form-label text-primary">
                      Asset Title
                    </label>
                    <input
                      id="name"
                      placeholder="Asset Name"
                   
                    />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="input-box pb--20">
                    <label
                      htmlFor="Discription"
                      className="form-label text-primary"
                    >
                      Description
                    </label>
                    <textarea
                      id="Discription"
                      rows="3"
                      placeholder="After purchasing the product you can get item..."
                      value=""
                    ></textarea>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="input-box pb--20">
                    <label
                      htmlFor="dollerValue"
                      className="form-label text-primary"
                    >
                      Price MATIC
                    </label>
                    <input
                      id="dollerValue"
                      placeholder="Price in MATIC ( wei)"
                      value="5400"
                     
                    />
                  </div>
                </div>

                {/* <div className="col-md-4">
                    <div className="input-box pb--20">
                      <label htmlFor="Size" className="form-label">
                        Size
                      </label>
                      <input id="Size" placeholder="e. g. `Size`" />
                    </div>
                  </div> */}

                <div className="col-md-4">
                  <div className="input-box pb--20">
                    <label
                      htmlFor="Propertie"
                      className="form-label text-primary"
                    >
                      Category
                    </label>
                    <input
                      id="Propertie"
                      placeholder="e. g. `Propertie`"
                      value=""
                    />
                  </div>
                </div>

                {/* <div className="col-md-12">
                    <div className="input-box pb--20">
                      <label htmlFor="Royality" className="form-label text-primary">
                        Creator
                      </label>
                      <input id="Royality" placeholder="owner`" value={nft.creator} />
                    </div>
                  </div>  */}

                <div className="col-md-4 col-sm-4"></div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
          
              >
                Create Sale
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleInputModal;