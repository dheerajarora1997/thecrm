export default function CreateCustomer() {
  const customerDetails = {
    firstName: '',
    LastName: '',
    
  }
  return (
    <>
      <div className="d-inline-block w-100 mt-3">
        <div className="row">
          <div className="col-12 col-md-3 d-none d-md-flex">
            <div className="bg-quinary bg-opacity-25 border border-primary border-opacity-50 p-3 rounded-3 shadow-sm w-100">
              <h3></h3>

            </div>
          </div>
          <div className="col-12 col-md-9">
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <textarea
                  className="form-control"
                  id="address"
                  rows={3}
                  required
                ></textarea>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    required
                  />
                </div>
                <div className="col-md-2">
                  <label htmlFor="zip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="zip"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary">
                Create Customer
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
