import React from "react";
import { useDispatch } from "react-redux";
import { clear_cart } from "../../../../../../redux/features/cart-slice";

const Coupon = () => {
  const dispatch = useDispatch()
  return (
    <div className="coupon-section d-flex flex-column">
      <div className="coupon-form d-lg-flex align-items-center">
        <input type="text" placeholder="Enter your code" />
        <button className="theme-btn-seven md-mt-20 xs-mb-20">
          Apply Coupne
        </button>
      </div>
      {/* <!-- /.coupon-form --> */}
      <div className="mt-auto">
        <button onClick={() => dispatch(clear_cart())} className="theme-btn-seven update-cart-button">
          Clear cart
        </button>
      </div>
    </div>
  );
};

export default Coupon;
