import React, { useState } from "react";

const Signup = (props) => {
   const [password, setPassword] = useState(false);
   const passwordHandler = () => setPassword(!password);

   const [confirmPassword, setConfirmPassword] = useState(false);
   const confirmPasswordHandler = () => setConfirmPassword(!confirmPassword);

   return (
      <div className="user-data-form mb-80 lg-mb-50">
         <form className="">
            <div className="row">
               <div className="col-12">
                  <div className="input-group-meta mb-30">
                     <label>Name*</label>
                     <input type="text" placeholder="Hasan Kibria" required />
                  </div>
               </div>

               <div className="col-12">
                  <div className="input-group-meta mb-30">
                     <label>Email*</label>
                     <input type="email" placeholder="ibthemes21@gmail.com" required />
                  </div>
               </div>

               <div className="col-12">
                  <div className="input-group-meta mb-25">
                     <label>Password*</label>
                     <input type={password ? " text" : "password"} placeholder="Enter Password" className="pass_log_id" required />
                     <span className="placeholder_icon">
                        <span className={password ? " eye-slash" : "passVicon"} onClick={passwordHandler}>
                           <img src={require("../../../assets/images/icon/icon_67.svg").default} alt="icon" />
                        </span>
                     </span>
                  </div>
               </div>

               <div className="col-12">
                  <div className="input-group-meta mb-25">
                     <label>Confirm Password*</label>
                     <input type={confirmPassword ? "text" : "password"} placeholder="Enter Password" className="pass_log_id" required />
                     <span className="placeholder_icon">
                        <span className={confirmPassword ? "eye-slash" : "passVicon"} onClick={confirmPasswordHandler}>
                           <img src={require("../../../assets/images/icon/icon_67.svg").default} alt="icon" />
                        </span>
                     </span>
                  </div>
               </div>

               <div className="col-12">
                  <div className="agreement-checkbox  text-end">
                     <a href="javascript:void(0)">Forget Password?</a>
                  </div>
               </div>
               <div className="col-12">
                  <button className="theme-btn-nine w-100 mt-50 mb-50">{props.textIn.idText}</button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default Signup;
