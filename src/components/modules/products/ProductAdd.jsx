import React from "react";
import "./ProductAdd.css";
import { useState } from "react";
import Header from "../dashboard/farmer/layout/Header";

const ProductAdd = () => {
  const [products, setProducts] = useState({
    productName: {
      haserror: false,
      errormessage: "",
      value: "wheat",
      style: "",
    },
    productDescription: {
      haserror: false,
      errormessage: "",
      value: "wheat",
      style: "",
    },
    productCategory: {
      haserror: false,
      errormessage: "",
      value: "grains",
      style: "",
    },
    productQty: {
      haserror: false,
      errormessage: "",
      value: 10,
      style: "",
    },
    productUnit: {
      haserror: false,
      errormessage: "",
      value: "tonne",
      style: "",
    },
    unitPrice: {
      haserror: false,
      errormessage: "",
      value: 20,
      style: "",
    },
    isAvailable: {
      haserror: false,
      errormessage: "",
      value: false,
      style: "",
    },
  });

  const ValidationsRules = {
    nameValidation: function (e) {
      if (e.target.value.trim() == "") {
        return true;
      }
      return false;
    },
  };

  console.log("formdata===>", products);
  return (
    <React.Fragment>
      <Header />
      <div className="container mt-5 add-product-form">
        <div className="card shadow">
          <div className="card-header bg-agriculture text-white">
            <h4 className="mb-0">Add New Product</h4>
          </div>
          <div className="card-body">
            {/* Error Division Start */}
            <div className="alert alert-danger">
              {products.productName.errormessage}
            </div>
            {/* Error Division End */}

            <form>
              {/* Product Name */}
              <div className="mb-3">
                <label className="form-label">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter product name"
                  style={{
                    border: products.productName.haserror
                      ? products.productName.style
                      : "",
                  }}
                  value={products.productName.value}
                  onChange={(e) => {
                    setProducts((prevState) => {
                      return {
                        ...prevState,
                        productName: {
                          value: e.target.value,
                          hasError: ValidationsRules.nameValidation(e),
                          errorMessage: "Name is Required",
                          style: "2px solid red",
                        },
                      };
                    });
                  }}
                />
                <span style={{ color: "red", fontWeight: "bold" }}>
                  {products.productName.hasError
                    ? products.productName.errorMessage
                    : ""}
                </span>
              </div>

              {/* Description */}
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Enter description"
                  value={products.productDescription}
                  onChange={(e) => {
                    setProducts((prevState) => {
                      return {
                        ...prevState,
                        productDescription: e.target.value,
                      };
                    });
                  }}
                ></textarea>
              </div>

              {/* Category */}
              <div className="mb-3">
                <label className="form-label">Category</label>
                <select
                  className="form-select"
                  value={products.productCategory}
                  onChange={(e) => {
                    setProducts((prevState) => {
                      return { ...prevState, productCategory: e.target.value };
                    });
                  }}
                >
                  <option>-- Select Category --</option>
                  <option>beverages</option>
                  <option>crops</option>
                  <option>grains</option>
                  <option>cereals</option>
                  <option>fruits</option>
                  <option>vegetables</option>
                  <option>other</option>
                </select>
              </div>

              {/* Quantity + Unit + Price */}
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">Quantity</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="e.g. 10"
                    value={products.productQty}
                    onChange={(e) => {
                      setProducts((prevState) => {
                        return { ...prevState, productQty: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Quantity Unit</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="e.g. kg"
                    value={products.productUnit}
                    onChange={(e) => {
                      setProducts((prevState) => {
                        return { ...prevState, productUnit: e.target.value };
                      });
                    }}
                  />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Unit Price</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="e.g. 50"
                    value={products.unitPrice}
                    onChange={(e) => {
                      setProducts((prevState) => {
                        return { ...prevState, unitPrice: e.target.value };
                      });
                    }}
                  />
                </div>
              </div>

              {/* Availability */}
              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="isAvailableSwitch"
                  value={products.isAvailable}
                  checked={products.isAvailable}
                  onChange={(e) => {
                    setProducts((prevState) => {
                      return { ...prevState, isAvailable: e.target.checked };
                    });
                  }}
                />
                <label className="form-check-label" htmlFor="isAvailableSwitch">
                  Available for Sale
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-agriculture">
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductAdd;
