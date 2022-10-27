import React from "react";

const SocialShare = () => {
  return (
    <ul className="d-flex share-icon align-items-center style-none pb-20">
      <li>Share:</li>
      <li>
        <a href="#">
          <i className="bi bi-google"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bi bi-twitter"></i>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bi bi-instagram"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialShare;
