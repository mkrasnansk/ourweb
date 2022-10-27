import React from "react";

const CommentBox = ({ className = "" }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onClick={handleSubmit} className="mt-50 lg-mt-30">
        <div className="input-wrapper mb-25">
          <label>Name*</label>
          <input type="text" placeholder="Rashed Kabir" />
        </div>
        {/* <!-- /.input-wrapper --> */}
        <div className="input-wrapper mb-40">
          <label>Email*</label>
          <input type="email" placeholder="rshdkabir@gmail.com" />
        </div>
        {/* <!-- /.input-wrapper --> */}
        <div className="input-wrapper mb-30">
          <textarea placeholder="Your Comment"></textarea>
        </div>
        {/* <!-- /.input-wrapper --> */}
        <button className={`theme-btn-one ripple-btn ${className}`}>
          Post Comment
        </button>
      </form>
    </>
  );
};

export default CommentBox;
