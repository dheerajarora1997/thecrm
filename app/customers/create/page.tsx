"use client";
import { useState } from "react";

export default function CreateCustomer() {
  const customerDetails = {
    firstName: "Name",
    lastName: "Here",
    emailAddress: "email@example.com",
    phonenumber: "+91 999 999 9999",
    address: "XYZ, Street Name, Area",
    city: "City Name",
    state: "State Name",
    zip: "000000",
    aadhar: "",
    pannumber: "",
    gstNumber: "",
    hsnCode: "",
    createdAt: "",
    updatedAt: "",
  };
  const orderDetails = {
    lastOrder: "",
    orderCount: 0,
    totalAmount: 0,
    lastOrderDate: "",
    lastOrderStatus: "",
  }

  const [custDetails, setCustDetails] = useState(customerDetails);
  return (
    <>
      <div className="d-inline-block w-100 position-relative">
        <div className="row">
          <div className="col-12 col-md-3 order-2 order-md-1 mt-3 mb-md-0">
            <div className="bg-quinary bg-opacity-25 border border-primary border-opacity-50 p-3 rounded-3 shadow-sm w-100">
              <div className="d-flex align-items-end mb-3">
                <h3 className="mb-0 pe-1">{custDetails?.firstName}</h3>
                <h5 className="mb-0">{custDetails?.lastName}</h5>
              </div>
              <p className="text-muted mb-1">
                <small className="text-primary text-opacity-50 d-block">
                  E-Mail Address:{" "}
                </small>
                {custDetails?.emailAddress}
              </p>
              <p className="text-muted mb-1">
                <small className="text-primary text-opacity-50 d-block">
                  Phone Number:{" "}
                </small>
                {custDetails?.phonenumber}
              </p>
              <p className="text-muted mb-1">
                <small className="text-primary text-opacity-50 d-block">Address: </small>
                {custDetails?.address}
              </p>
              <p className="text-muted mb-1">
                <small className="text-primary text-opacity-50 d-block">City: </small>
                {custDetails?.city}
              </p>
              <p className="text-muted mb-1">
                <small className="text-primary text-opacity-50 d-block">State: </small>
                {custDetails?.state}
              </p>
              <p className="text-muted mb-1">
                <small className="text-primary text-opacity-50 d-block">Zip Code: </small>
                {custDetails?.zip}
              </p>
              <p
                className={`text-muted mb-1 ${custDetails?.aadhar ? "" : "d-none"}`}
              >
                <small className="text-primary text-opacity-50 d-block">AAdhar: </small>
                {custDetails?.aadhar}
              </p>
              <p
                className={`text-muted mb-1 ${custDetails?.pannumber ? "" : "d-none"}`}
              >
                <small className="text-primary text-opacity-50 d-block">hello: </small>
                {custDetails?.pannumber}
              </p>
              <p
                className={`text-muted mb-1 ${custDetails?.gstNumber ? "" : "d-none"}`}
              >
                <small className="text-primary text-opacity-50 d-block">hello: </small>
                {custDetails?.gstNumber}
              </p>
              <p
                className={`text-muted mb-1 ${custDetails?.hsnCode ? "" : "d-none"}`}
              >
                <small className="text-primary text-opacity-50 d-block">hello: </small>
                {custDetails?.hsnCode}
              </p>
              <p
                className={`text-muted mb-1 ${custDetails?.createdAt ? "" : "d-none"}`}
              >
                <small className="text-primary text-opacity-50 d-block">hello: </small>
                {custDetails?.createdAt}
              </p>
              <p
                className={`text-muted mb-1 ${custDetails?.updatedAt ? "" : "d-none"}`}
              >
                <small className="text-primary text-opacity-50 d-block">hello: </small>
                {custDetails?.updatedAt}
              </p>
              <p
                className={`text-muted mb-1 ${orderDetails?.lastOrder ? "" : "d-none"}`}
              >
                <small className="text-primary text-opacity-50 d-block">hello: </small>
                {orderDetails?.lastOrder}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-9 order-1 order-md-2">
            <form className="pb-5 mb-5">
              <div className="row mb-2">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    onChange={(e) => {
                      setCustDetails({
                        ...custDetails,
                        firstName: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    onChange={(e) => {
                      setCustDetails({
                        ...custDetails,
                        lastName: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
              </div>

              <div className="row mb-2">
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    onChange={(e) => {
                      setCustDetails({
                        ...custDetails,
                        emailAddress: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    onChange={(e) => {
                      setCustDetails({
                        ...custDetails,
                        phonenumber: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="address" className="form-label mb-1">
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  onChange={(e) => {
                    setCustDetails({
                      ...custDetails,
                      address: e.target.value,
                    });
                  }}
                  rows={3}
                  required
                ></textarea>
              </div>

              <div className="row mb-2">
                <div className="col-md-6">
                  <label htmlFor="city" className="form-label mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    onChange={(e) => {
                      setCustDetails({
                        ...custDetails,
                        city: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="state" className="form-label mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    onChange={(e) => {
                      setCustDetails({
                        ...custDetails,
                        state: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="zip" className="form-label mb-1">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    onChange={(e) => {
                      setCustDetails({
                        ...custDetails,
                        zip: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
                <div className="col-sm-12 col-md-6 mb-2">
                  <label htmlFor="aadhar" className="form-label mb-1">
                    Aadhar Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="aadhar"
                    onChange={(e) => {
                      setCustDetails({
                        ...custDetails,
                        aadhar: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
                <div className="col-sm-12 col-md-6 mb-2">
                  <label htmlFor="pannumber" className="form-label mb-1">
                    PAN Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="pannumber"
                    onChange={(e) => {
                      setCustDetails({
                        ...custDetails,
                        pannumber: e.target.value,
                      });
                    }}
                    required
                  />
                </div>
                <div className="col-sm-12 col-md-6 mb-2">
                  <label htmlFor="gstNumber" className="form-label mb-1">
                    GST Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="gstNumber"
                    onChange={(e) => {
                      setCustDetails({
                        ...custDetails,
                        gstNumber: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="col-sm-12 col-md-6 mb-2">
                  <label htmlFor="hsnCode" className="form-label mb-1">
                    HSN Code
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="hsnCode"
                    onChange={(e) => {
                      setCustDetails({
                        ...custDetails,
                        hsnCode: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-primary">
                  Create Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
