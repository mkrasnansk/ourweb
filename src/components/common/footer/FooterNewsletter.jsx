import React from "react";

const FooterNewsletter = () => {
   const handleSubmit = (event) => {
      event.preventDefault();
   };

   return (
      <div className="newsletter">
         <h5 className="title">Newslettert</h5>
         <p>
            If you want to know all the <span> news </span>about us.
         </p>

         <form onClick={handleSubmit}>
            <input type="email" placeholder="Enter your email" />
            <button className="ripple-btn">Sign Up</button>
         </form>
         {/* End form */}

         <div className="info">We only send interesting and relevant emails.</div>
      </div>
   );
};

export default FooterNewsletter;
