import React from "react";

const HeaderModal = () => {
  return (
    <div className="modal-content">
      <div className="modal-header">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div className="modal-body p0">
        <div className="container">
          <div className="row">
            <div className="col-xl-11 m-auto">
              <div className="form-style-one">
                <form>
                  <div className="row controls">
                    <div className="col-sm-6">
                      <div className="input-group-meta form-group mb-25">
                        <label>First Name*</label>
                        <input
                          type="text"
                          placeholder="Rashed"
                          name="name"
                          required="required"
                          data-error="Name is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-sm-6">
                      <div className="input-group-meta form-group mb-25">
                        <label>Last Name*</label>
                        <input
                          type="text"
                          placeholder="Kabir"
                          name="Lname"
                          required="required"
                        />
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-12">
                      <div className="input-group-meta form-group mb-25 d-flex flex-column">
                        <label>Select Service*</label>
                        <select
                          className="form-select"
                          placeholder="Choose a Service...."
                          name="category"
                          required="required"
                        >
                          <option className="ds" value="">
                            Choose a Service....
                          </option>
                          <option value="Digital Marketing">
                            Digital Marketing
                          </option>
                          <option value="Website Design">Website Design</option>
                          <option value="WordPress">WordPress</option>
                          <option value="Web Analytics">Web Analytics</option>
                          <option value="Web Programming">
                            Web Programming
                          </option>
                          <option value="Infographic Design">
                            Infographic Design
                          </option>
                        </select>
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-12">
                      <div className="input-group-meta form-group mb-40">
                        <label>Email*</label>
                        <input
                          type="email"
                          placeholder="rshdkabir@gmail.com"
                          name="email"
                          required="required"
                        />
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-12">
                      <div className="input-group-meta form-group mb-35">
                        <textarea
                          placeholder="Your message*"
                          name="message"
                          required="required"
                        ></textarea>
                      </div>
                    </div>
                    {/* End .col */}

                    <div className="col-12">
                      <button className="theme-btn-one ripple-btn">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <!-- /.form-style-one --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    //  {/* <!-- /.modal-content --> */}
  );
};

export default HeaderModal;
