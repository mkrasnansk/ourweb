import React, { useState } from "react";
import Select from "react-select";

const options = [
   { value: "Digital Marketing", label: "Digital Marketing" },
   { value: "Website Design", label: "Website Design" },
   { value: "Web Analytics", label: "Web Analytics" },
   { value: "Web Programming", label: "Web Programming" },
   { value: "Infographic Design", label: "Infographic Design" },
   { value: "Price", label: "Price" },
   { value: "Information", label: "Information" },
];

const customStyles = {
   control: (provided, state) => ({
      ...provided,
      border: "1px solid #339999",
      paddingLeft: "1.2rem",
      "&:hover": {
         borderColor: "none",
      },
      "&:select": {
         borderColor: "none",
      },
   }),
   option: (provided, state) => ({
      ...provided,
   }),
   input: (provided, state) => ({
      ...provided,
      color: "transparent",
   }),
   singleValue: (provided, state) => ({
      ...provided,
      color: "dark",
      fontSize: "1rem",
   }),
};
const HeaderModal = () => {
   const [selectedOption, setSelectedOption] = useState({ value: "Information", label: "Information" });

   return (
      <div className="modal-content">
         <div className="modal-header bg-primary text-white">
            <div className="row align-items-center w-100">
               <div className="col">Contact Form</div>
               <div className="col-auto ">
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
            </div>
         </div>
         <div className="modal-body px-0 p-md-2 p-xl-5">
            <div className="container">
               <div className="row">
                  <div className="col-xl-11 m-auto">
                     <div className="user-data-form">
                        <form>
                           <div className="row controls">
                              <div className="col-sm-6">
                                 <div className="input-group-meta form-group mb-25">
                                    <label>First Name*</label>
                                    <input type="text" placeholder="First Name" name="name" required="required" data-error="Name is required." />
                                    <div className="help-block with-errors"></div>
                                 </div>
                              </div>

                              <div className="col-sm-6">
                                 <div className="input-group-meta form-group mb-25">
                                    <label>Last Name*</label>
                                    <input type="text" placeholder="Last Name" name="Lname" required="required" />
                                 </div>
                              </div>

                              <div className="col-12">
                                 <div className="input-group-meta form-group mb-25">
                                    <label>Email*</label>
                                    <input type="email" placeholder="owe@owe.com" name="email" required="required" />
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className="input-group-meta form-group mb-25 d-flex flex-column">
                                    <label>Select Service*</label>
                                    <Select
                                       theme={(theme) => ({
                                          ...theme,
                                          borderRadius: 0,
                                          spacing: {
                                             menuGutter: 1,
                                          },
                                          colors: {
                                             primary: "#339999",
                                             primary50: "#ccc",
                                             primary25: "#ccc",
                                             danger: "#ccc",
                                             dangerLight: "#ccc",
                                             neutral5: "#ccc",
                                             neutral10: "#ccc",
                                             neutral20: "#ccc",
                                             neutral30: "#ccc",
                                             neutral40: "#ccc",
                                             neutral50: "#ccc",
                                             neutral60: "#ccc",
                                             neutral70: "#ccc",
                                             neutral80: "#ccc",
                                             neutral90: "#ccc",

                                             primary75: "#fff",
                                             neutral0: "#fff",
                                          },
                                       })}
                                       classNamePrefix="reSel"
                                       styles={customStyles}
                                       className="reSelect"
                                       defaultValue={selectedOption}
                                       onChange={selectedOption}
                                       options={options}
                                       name="category"
                                       required="required"
                                    />
                                 </div>
                              </div>
                              <div className="col-12">
                                 <label>Message</label>
                                 <div className="input-group-meta form-group mb-25 ">
                                    <textarea className="form-control rounded-0 border-primary" rows={5} placeholder="Your message*" name="message" required="required"></textarea>
                                 </div>
                              </div>

                              <div className="col-12 text-end">
                                 <div className="row align-items-center">
                                    <div className="col d-none d-sm-block">
                                       <img className="img-fluid h-50" src={require("../../../assets/images/svg/logolike.svg").default} alt="brand" />
                                    </div>
                                    <div className="col col-sm-auto">
                                       <div className="d-flex justify-content-end">
                                          <button className="theme-btn-nine ripple-btn text-nowrap w-100">Send Message</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeaderModal;
