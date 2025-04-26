"use client";

import { useState } from "react";
import "../../styles/components/_invoiceDesign.scss";

export default function createInvoice() {
  const initialProduct = {
    productName: "",
    amount: 0,
    quantity: 0,
  };
  const [products, setProducts] = useState([
    {
      ...initialProduct,
    },
  ]);
  return (
    <div className="d-inline-block w-100 mt-3">
      <div className="row">
        <div className="col-12 col-md-6">
          <h3 className="">Create Invoice</h3>
          <form className="mt-4">
            <div className="row">
              <div className="form-group col-sm-12 col-md-6 mb-2">
                <label htmlFor="invoiceId" className="form-label mb-1">
                  Invoice Id
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="invoiceId"
                  required
                  disabled
                  value={"INV-" + Math.floor(Math.random() * 1000000)}
                />
              </div>
              <div className="form-group col-sm-12 col-md-6 mb-2">
                <label htmlFor="date" className="form-label mb-1">
                  Date
                </label>
                <input
                  type="text"
                  value={`${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`}
                  className="form-control"
                  id="date"
                  required
                  disabled
                />
              </div>
              <div className="form-group col-sm-12 col-md-6 mb-2">
                <label htmlFor="customerName" className="form-label mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerName"
                  required
                />
              </div>
              <div className="form-group col-sm-12 col-md-6 mb-2">
                <label htmlFor="number" className="form-label mb-1">
                  Number
                </label>
                <input type="text" className="form-control" id="number" />
              </div>
              <div className="form-group col-sm-12 col-md-12 mb-2">
                <label htmlFor="email" className="form-label mb-1">
                  E-mail
                </label>
                <input type="text" className="form-control" id="email" />
              </div>
              <div className="form-group col-sm-12 col-md-12 mb-2">
                <label htmlFor="address" className="form-label mb-1">
                  Address
                </label>
                <textarea className="form-control" id="address" />
              </div>
              {products.map((product, i) => (
                <div className="row align-items-end" key={i}>
                  {/* <div className="col-sm-1">{i + 1}</div> */}
                  <div className="form-group col-sm-12 col-md-7 mb-2">
                    <label
                      htmlFor={`productName-${i}`}
                      className="form-label mb-1"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id={`productName-${i}`}
                      required
                    />
                  </div>
                  <div className="form-group col-sm-12 col-md-3 mb-2">
                    <label htmlFor="amount" className="form-label mb-1">
                      Amount
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="amount"
                      required
                    />
                  </div>
                  <div className="col-sm-12 col-md-1 mb-3">
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

              <div className="form-group col-sm-12 col-md-6 mb-2">
                <label htmlFor="amount" className="form-label mb-1">
                  Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="amount"
                  required
                />
              </div>
              <hr className="w-100 my-2" />
              <div className="form-group col-sm-12 col-md-6 mb-2">
                <label htmlFor="additinalField" className="form-label mb-1">
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
            <button type="submit" className="btn btn-primary mt-3">
              Create Invoice
            </button>
          </form>
        </div>
        <div className="col-12 col-md-6">
          <h4 className="">Preview</h4>
          <div className="position-relative invoiceDesign">
            <div className="invoice-wrapper" id="invoiceToPrint">
              <section className="invoice-header">
                <div className="logo-section">
                  <h2>Kazume Corporate</h2>
                  <p>We deliver your problems</p>
                </div>
                <div className="invoice-title">
                  <h1>INVOICE</h1>
                </div>
              </section>

              <section className="invoice-info">
                <div className="left-info">
                  <h4>INVOICE TO</h4>
                  <h2>Megumin Ryu</h2>
                  <p>Supervisor, Blacksteel Company</p>
                  <p>Contact Person</p>
                  <p>Phone: (+62) 898 1234 5678</p>
                  <p>Email: megumin_ryu@mail.com</p>
                </div>
                <div className="right-info">
                  <p>
                    Invoice No: <strong>L779012</strong>
                  </p>
                  <p>
                    Invoice Date: <strong>December 26th, 2020</strong>
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
                      <th>Description</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01</td>
                      <td>Logo Design</td>
                      <td>$90</td>
                      <td>1</td>
                      <td>$90</td>
                    </tr>
                    <tr>
                      <td>02</td>
                      <td>Business Invoice Design</td>
                      <td>$30</td>
                      <td>2</td>
                      <td>$60</td>
                    </tr>
                    <tr>
                      <td>03</td>
                      <td>Theme Development</td>
                      <td>$99</td>
                      <td>1</td>
                      <td>$99</td>
                    </tr>
                    <tr>
                      <td>04</td>
                      <td>Business Card Design</td>
                      <td>$30</td>
                      <td>4</td>
                      <td>$120</td>
                    </tr>
                    <tr>
                      <td>05</td>
                      <td>Infographic Presentation</td>
                      <td>$60</td>
                      <td>3</td>
                      <td>$180</td>
                    </tr>
                    <tr>
                      <td>06</td>
                      <td>Consultation Design</td>
                      <td>$10</td>
                      <td>7</td>
                      <td>$70</td>
                    </tr>
                  </tbody>
                </table>
              </section>

              <section className="invoice-summary">
                <div className="left-summary">
                  <h3>Total Due</h3>
                  <h2>$100 USD</h2>
                  <p>Late charge for 10 days</p>
                </div>
                <div className="right-summary">
                  <p>
                    Sub Total: <strong>$619</strong>
                  </p>
                  <p>
                    Tax (5%): <strong>$31</strong>
                  </p>
                  <div className="total">
                    <h3>TOTAL: $649</h3>
                  </div>
                </div>
              </section>

              <section className="invoice-terms">
                <h3>Terms & Conditions</h3>
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
                  <h4>Kazuma Jean</h4>
                  <p>HR Director</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
