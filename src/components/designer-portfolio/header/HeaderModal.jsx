import React, { useEffect, useState } from "react";
import Select from "react-select";

const options = [
   { value: "Digital Marketing", label: "Digital Marketing" },
   { value: "Website Design", label: "Website Design" },
   { value: "WordPress", label: "WordPress" },
   { value: "Web Analytics", label: "Web Analytics" },
   { value: "Web Programming", label: "Web Programming" },
   { value: "Infographic Design", label: "Infographic Design" },
];

const customStyles = {
  container: (provided, state) => ({
      ...provided,
      border: "2px solid #339999",
      borderRadius: 10
   }),
};
const HeaderModal = () => {
   const [selectedOption, setSelectedOption] = useState(null);
   useEffect(() => {
      console.log(document.querySelector(".reSelect"));
      // document.querySelector(".reSelect").style.border = "2px solid #339999"
      // document.querySelector(".reSelect").style.borderRadius = "10px"
      // document.querySelector(".reSel__control").classList.add("form-control")
   }, []);

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
                                    <input type="text" placeholder="Rashed" name="name" required="required" data-error="Name is required." />
                                    <div className="help-block with-errors"></div>
                                 </div>
                              </div>

                              <div className="col-sm-6">
                                 <div className="input-group-meta form-group mb-25">
                                    <label>Last Name*</label>
                                    <input type="text" placeholder="Kabir" name="Lname" required="required" />
                                 </div>
                              </div>

                              <div className="col-12">
                                 <div className="input-group-meta form-group mb-25">
                                    <label>Email*</label>
                                    <input type="email" placeholder="rshdkabir@gmail.com" name="email" required="required" />
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className="input-group-meta form-group mb-25 d-flex flex-column">
                                    <label>Select Service*</label>
                                    <Select
                                       classNamePrefix="reSel"
                                       styles={customStyles}
                                       theme={(theme) => ({
                                          ...theme,
                                          borderRadius: 10,

                                          spacing: {
                                             controlHeight: 6,
                                             baseUnit: 6,
                                             menuGutter: 1,
                                          },
                                          colors: {
                                             primary25: "#ccc",
                                             primary75: "#fff",
                                             primary50: "#339999",
                                             danger: "#339999",
                                             neutral0: "#fff",
                                             neutral20: "#339999",
                                             neutral30: "#339999",
                                          },
                                       })}
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
                                 <div className="input-group-meta form-group mb-25">
                                    <textarea placeholder="Your message*" name="message" required="required"></textarea>
                                 </div>
                              </div>

                              <div className="col-12">
                                 <button className="theme-btn-one ripple-btn">Send Message</button>
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
