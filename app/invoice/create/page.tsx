"use client";

import { useEffect, useState } from "react";
import "../../styles/components/_invoiceDesign.scss";

export default function createInvoice() {
  const initialProduct = {
    productName: "",
    amount: 0,
    quantity: 0,
  };
  const initialCustomerDetails = {
    name: "",
    email: "",
    phone: "",
    address: "",
    aadharNumber: "",
    panNumber: "",
  };
  const [products, setProducts] = useState([
    {
      ...initialProduct,
    },
  ]);
  const intialInvoiceDetails = {
    paymentMethod: "",
    products: products,
    additionalFields: [],
    invoiceDate: formatDate(new Date()),
    invoiceId: `INV_${Math.floor(Math.random() * 1000000)}`,
    subTotal: 0,
    taxPercentage: 3,
    makingCharge: 0,
    makingChangesPercentage: 10,
    discountAmount: 0,
    taxAmount: 0,
    totalAmount: 0,
  };

  const [invoiceDate, setInvoiceDate] = useState(
    `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`
  );

  const [cudtomerDetails, setCustomerDetails] = useState(
    initialCustomerDetails
  );
  const [invoiceDetails, setInvoiceDetails] = useState({
    ...intialInvoiceDetails,
  });

  useEffect(() => {
    const subTotal = products.reduce((acc, product) => {
      return acc + product.amount * product.quantity;
    }, 0);
    setInvoiceDetails((prev) => ({
      ...prev,
      products: products,
      subTotal: subTotal,
      totalAmount:
        subTotal +
        (subTotal * invoiceDetails?.taxPercentage) / 100 -
        invoiceDetails?.discountAmount,
      taxAmount: (subTotal * invoiceDetails?.taxPercentage) / 100,
    }));
  }, [products, invoiceDetails?.discountAmount]);

  function formatDate(invoiceDate: Date) {
    const options = {
      year: "numeric" as const,
      month: "long" as const,
      day: "numeric" as const,
      hour: "2-digit" as const,
      minute: "2-digit" as const,
    };
    return invoiceDate.toLocaleDateString("en-US", options);
  }

  console.log(products, "products updated");

  return (
    <div className="d-inline-block w-100 mt-3">
      <div className="row">
        <div className="col-12 col-md-7 ms-auto">
          <h4 className="">Preview</h4>
          <div className="position-relative invoiceDesign">
            <div className="invoice-wrapper" id="invoiceToPrint">
              <section className="invoice-header">
                <div className="logo-section">
                  <div className="invoice-heading2">Tanishq</div>
                  <p>We deliver your problems</p>
                </div>
                <div className="invoice-title">
                  <div className="invoice-heading1">INVOICE</div>
                </div>
              </section>

              <section className="invoice-info">
                <div className="left-info">
                  <div className="invoice-heading4">INVOICE TO</div>
                  <div className="invoice-heading3">
                    {cudtomerDetails?.name}
                  </div>
                  <p>{cudtomerDetails?.address}</p>
                  <p>Contact Person</p>
                  <p>Phone: {cudtomerDetails?.phone}</p>
                  <p>Email: {cudtomerDetails?.email}</p>
                </div>
                <div className="right-info">
                  <p>
                    Invoice No: <strong>{invoiceDetails?.invoiceId}</strong>
                  </p>
                  <p>
                    Invoice Date: <strong>{invoiceDetails?.invoiceDate}</strong>
                  </p>
                  <p>Payment Method</p>
                  <p>Account ID: 8765 4321 2345 6789</p>
                  <p>Account Name: Kazuma Jean</p>
                </div>
              </section>

              <section className="invoice-table">
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.length &&
                      products?.map((product, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product?.productName}</td>
                            <td>₹{product?.amount}</td>
                            <td>{product?.quantity}</td>
                            <td>₹{product?.amount * product?.quantity}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </section>

              <section className="invoice-summary">
                <div className="left-summary">
                  {/* <div className="invoice-heading3">Total Due</div>
                  <div className="invoice-heading2">$100 USD</div>
                  <p>Late charge for 10 days</p> */}
                </div>
                <div className="right-summary">
                  <p>
                    Sub Total:{" "}
                    <strong>₹ {invoiceDetails?.subTotal.toFixed(2)}</strong>
                  </p>
                  <p>
                    Tax ({invoiceDetails?.taxPercentage}%):{" "}
                    <strong>
                      ₹
                      {(
                        (invoiceDetails?.subTotal *
                          invoiceDetails?.taxPercentage) /
                        100
                      ).toFixed(2)}
                    </strong>
                  </p>
                  <p>
                    Discount :{" "}
                    <strong>
                      ₹ {(invoiceDetails?.discountAmount).toFixed(2)}
                    </strong>
                  </p>
                  <p className="fs-5">
                    <strong>TOTAL: ₹</strong>
                    <strong>{invoiceDetails?.totalAmount.toFixed(2)}</strong>
                  </p>
                </div>
              </section>

              <section className="invoice-terms">
                <div className="invoice-heading3">Terms & Conditions</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </section>

              <section className="invoice-footer">
                <div className="contact-info">
                  <p>📞 (+62) 812 1234 1234 | (+62) 812 5678 5678</p>
                  <p>🏠 123 Lungmen, Kazu Jakarta, Indonesia</p>
                  <p>✉️ mailq@admin.com | admin@mail.com</p>
                </div>
                <div className="signature">
                  <p>_____________________</p>
                  <div className="invoice-heading4">Kazuma Jean</div>
                  <p>HR Director</p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5">
          <h3 className="">Create Invoice</h3>
          <form className="mt-4">
            <div className="row">
              <div className="form-group col-sm-12 col-md-6 mb-2">
                <label htmlFor="invoiceId" className="form-label fw-bold mb-1">
                  Invoice Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="invoiceId"
                  required
                  disabled
                  value={invoiceDetails?.invoiceId}
                />
              </div>
              <div className="form-group col-sm-12 col-md-6 mb-2">
                <label htmlFor="date" className="form-label fw-bold mb-1">
                  Date
                </label>
                <input
                  type="text"
                  value={invoiceDate}
                  className="form-control"
                  id="date"
                  required
                  disabled
                />
              </div>
              <div className="form-group col-sm-12 col-md-3 mb-2">
                <label htmlFor="customerId" className="form-label fw-bold mb-1">
                  Customer Id
                </label>
                <select className="form-select" id="customerId" required>
                  <option value="">Select Customer Id</option>
                </select>
              </div>
              <div className="form-group col-sm-12 col-md-5 mb-2">
                <label
                  htmlFor="customerName"
                  className="form-label fw-bold mb-1"
                >
                  Customer Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerName"
                  value={cudtomerDetails.name}
                  onChange={(e) => {
                    const newCustomerDetails = { ...cudtomerDetails };
                    newCustomerDetails.name = e.target.value;
                    setCustomerDetails(newCustomerDetails);
                  }}
                  required
                />
              </div>
              <div className="form-group col-sm-12 col-md-4 mb-2">
                <label htmlFor="number" className="form-label fw-bold mb-1">
                  Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  value={cudtomerDetails.phone}
                  onChange={(e) => {
                    const newCustomerDetails = { ...cudtomerDetails };
                    newCustomerDetails.phone = e.target.value;
                    setCustomerDetails(newCustomerDetails);
                  }}
                />
              </div>
              <div className="form-group col-sm-12 col-md-12 mb-2">
                <label htmlFor="email" className="form-label fw-bold mb-1">
                  E-mail
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={cudtomerDetails.email}
                  onChange={(e) => {
                    const newCustomerDetails = { ...cudtomerDetails };
                    newCustomerDetails.email = e.target.value;
                    setCustomerDetails(newCustomerDetails);
                  }}
                />
              </div>
              <div className="form-group col-sm-12 col-md-12 mb-2">
                <label htmlFor="address" className="form-label fw-bold mb-1">
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  value={cudtomerDetails.address}
                  onChange={(e) => {
                    const newCustomerDetails = { ...cudtomerDetails };
                    newCustomerDetails.address = e.target.value;
                    setCustomerDetails(newCustomerDetails);
                  }}
                />
              </div>
              <div className="form-group col-sm-12 col-md-6 mb-2">
                <label htmlFor="aadhar" className="form-label fw-bold mb-1">
                  Aadhar Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="aadhar"
                  value={cudtomerDetails.aadharNumber}
                  onChange={(e) => {
                    const newCustomerDetails = { ...cudtomerDetails };
                    newCustomerDetails.aadharNumber = e.target.value;
                    setCustomerDetails(newCustomerDetails);
                  }}
                />
              </div>
              <div className="form-group col-sm-12 col-md-6 mb-2">
                <label htmlFor="panNumber" className="form-label fw-bold mb-1">
                  Pan Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="panNumber"
                  value={cudtomerDetails.panNumber}
                  onChange={(e) => {
                    const newCustomerDetails = { ...cudtomerDetails };
                    newCustomerDetails.panNumber = e.target.value;
                    setCustomerDetails(newCustomerDetails);
                  }}
                />
              </div>
              <div className="bg-quinary bg-opacity-50 pt-2 rounded my-3 col-12">
                <div className="row align-items-end pe-0 mb-2">
                  <div className="form-group col-sm-12 col-md-6">
                    <label
                      htmlFor={`productName`}
                      className="form-label fw-bold mb-1"
                    >
                      Product Name
                    </label>
                  </div>
                  <div className="form-group col-sm-12 col-md-2">
                    <label
                      htmlFor={`productQuantity`}
                      className="form-label fw-bold mb-1"
                    >
                      Quantity
                    </label>
                  </div>
                  <div className="form-group col-sm-12 col-md-3">
                    <label htmlFor="amount" className="form-label fw-bold mb-1">
                      Amount
                    </label>
                  </div>
                </div>
                {products.map((product, i) => (
                  <div
                    className={`row align-items-center pe-0 mb-2 ${i > 0 ? "border-bottom" : ""}`}
                    key={i}
                  >
                    <div className="form-group col-sm-12 col-md-6 mb-2">
                      <input
                        type="text"
                        className="form-control"
                        id={`productName-${i}`}
                        value={product.productName}
                        placeholder="Product Name"
                        onChange={(e) => {
                          const newProducts = [...products];
                          newProducts[i].productName = e.target.value;
                          setProducts(newProducts);
                        }}
                        required
                      />
                    </div>
                    <div className="form-group col-sm-12 col-md-2 mb-2">
                      <select
                        className="form-select"
                        id={`productQuantity-${i}`}
                        onChange={(e) => {
                          const newProducts = [...products];
                          newProducts[i].quantity = Number(e.target.value);
                          setProducts(newProducts);
                        }}
                        value={product.quantity}
                        required
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                      </select>
                    </div>
                    <div className="form-group col-sm-12 col-md-3 mb-2">
                      <input
                        type="number"
                        className="form-control"
                        id="amount"
                        value={product.amount}
                        onChange={(e) => {
                          const newProducts = [...products];
                          newProducts[i].amount = Number(e.target.value);
                          setProducts(newProducts);
                        }}
                        required
                      />
                    </div>
                    <div className="col-sm-12 col-md-1 mb-2 p-0">
                      {products.length - 1 === i ? (
                        <button
                          className="btn btn-primary rounded-circle d-flex justify-content-center align-items-center"
                          type="button"
                          onClick={() => {
                            const newProducts = [...products];
                            newProducts.push(initialProduct);
                            setProducts(newProducts);
                          }}
                          style={{ width: 30, height: 30 }}
                        >
                          +
                        </button>
                      ) : (
                        <button
                          className="btn btn-danger rounded-circle d-flex justify-content-center align-items-center"
                          type="button"
                          onClick={() => {
                            const newProducts = [...products];
                            newProducts.splice(i, 1);
                            setProducts(newProducts);
                          }}
                          style={{ width: 30, height: 30 }}
                        >
                          x
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="form-group col-sm-12 col-md-6 mb-2">
                <label
                  htmlFor="paymentMode"
                  className="form-label fw-bold mb-1"
                >
                  Payment Mode
                </label>
                <select className="form-select" id="paymentMode" required>
                  <option value="">Select Payment Mode</option>
                  <option value="cash">Cash</option>
                  <option value="cheque">Cheque</option>
                  <option value="upi">UPI</option>
                  <option value="netbanking">Net Banking</option>
                  <option value="creditcard">Credit Card</option>
                </select>
              </div>
              <div className="col-12"></div>
              <div className="form-group col-sm-12 col-md-4 mb-2">
                <label
                  htmlFor="discountAmount"
                  className="form-label fw-bold mb-1"
                >
                  Discount Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="discountAmount"
                  value={invoiceDetails?.discountAmount}
                  onChange={(e) => {
                    let val = e.target.value;
                    setInvoiceDetails((prev) => ({
                      ...prev,
                      discountAmount: Number(val),
                    }));
                  }}
                />
              </div>
              <div className="col-12"></div>
              <div className="form-group col-sm-12 col-md-4 mb-2">
                <label htmlFor="subTotal" className="form-label fw-bold mb-1">
                  Sub Total Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="subTotal"
                  value={invoiceDetails?.subTotal}
                  readOnly
                  required
                />
              </div>
              <div className="form-group col-sm-12 col-md-3 mb-2">
                <label
                  htmlFor="taxPercentage"
                  className="form-label fw-bold mb-1"
                >
                  Tax Percentage
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="taxPercentage"
                  value={invoiceDetails?.taxPercentage}
                  readOnly
                  required
                />
              </div>
              <div className="form-group col-sm-12 col-md-5 mb-2">
                <label
                  htmlFor="totalamount"
                  className="form-label fw-bold mb-1"
                >
                  Total Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="totalamount"
                  value={invoiceDetails?.totalAmount}
                  readOnly
                  required
                />
              </div>
              <hr className="w-100 my-2" />
              <div className="form-group col-sm-12 col-md-6 mb-2">
                <label
                  htmlFor="additinalField"
                  className="form-label fw-bold mb-1"
                >
                  Aditional Dynamic Fields
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="additinalField"
                  required
                />
              </div>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary mt-3">
                Create Invoice
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
