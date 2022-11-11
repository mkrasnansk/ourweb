import React, { useState } from "react";
import { SelectCotactForm } from "../../startup-agency/SelectCotactForm";

const HeaderModal = () => {
   const [name, setName] = useState("");
   const [url, setUrl] = useState("www.owee.sk");
   const [message, setMessage] = useState("");
   console.log(url);
   // "http://localhost:4000/mail"
   // "http://backend.eba-r22udgp5.us-east-2.elasticbeanstalk.com/mail",
   const handleSubmitForm = (e) => {
      e.preventDefault();
      console.log(name);
      console.log(url);
      const optionPost = {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ name: name, url: url }),
      };
      fetch("https://enode.eba-9py6dikp.us-east-1.elasticbeanstalk.com/mail", optionPost)
         .then((res) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            console.log(res);
            return res.json();
         })
         .catch((err) => console.log("hovno ", err.message));
      console.log("o");
      console.log("ok");
      setName("");
      setMessage("Email send successfully");
   };
   return (
      <div className="modal-content">
         <div className="modal-header bg-primary text-white">
            <div className="row align-items-center w-100">
               <div className="col">Contact Form</div>
               <div className="col-auto ">
                  <div>{message ? message : null}</div>
               </div>
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
                        <form onSubmit={handleSubmitForm}>
                           <div className="row controls">
                              <div className="col-sm-6">
                                 <div className="input-group-meta form-group mb-25">
                                    <label>First Name*</label>
                                    <input type="text" placeholder="First Name" name="name" onChange={(e) => setName(e.target.value)} data-error="Name is required." />
                                    <div className="help-block with-errors"></div>
                                 </div>
                              </div>

                              <div className="col-sm-6">
                                 <div className="input-group-meta form-group mb-25">
                                    <label>Last Name*</label>
                                    <input type="text" placeholder="Last Name" name="Lname" />
                                 </div>
                              </div>

                              <div className="col-12">
                                 <div className="input-group-meta form-group mb-25">
                                    <label>Email*</label>
                                    <input type="email" placeholder="owe@owe.com" name="email" />
                                 </div>
                              </div>
                              <div className="col-12">
                                 <SelectCotactForm />
                              </div>
                              <div className="col-12">
                                 <label>Message</label>
                                 <div className="input-group-meta form-group mb-25 ">
                                    <textarea className="form-control rounded-0 border-primary" rows={5} placeholder="Your message*" name="message"></textarea>
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
