import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../../../../components/common/header/sidebar/Sidebar";
import Header from "../../../../components/shop-standard/Header";
import { cartProduct } from "../../../../redux/features/cart-slice";
import CartTotal from "./components/cart/CartTotal";
import Coupon from "./components/cart/Coupon";
import SingleCart from "./components/cart/SingleCart";
import Seo from "../../../../components/common/seo/Seo";

const Cart = () => {
  const cartItems = useSelector(cartProduct);
  return (
    <div className="main-page-wrapper">
      <Seo title="Cart" />
      {/* End Seo Related data */}

      {/* <!-- 
      =============================================
      Sidebar Nav
      ============================================== 
        --> */}
      <Sidebar />

      {/* <!--
        =============================================
        Theme Main Menu
        ==============================================
        --> */}
      <Header />

      {/* <!-- 
        =============================================
        Cart Page
        ============================================== 
        --> */}
      <div className="cart-section pt-250 pb-100 lg-pt-150 sm-pb-50 border-bottom">
        <div className="container">
          {cartItems.length === 0 && (
            <div className="d-flex align-items-center justify-content-center">
              <div>
                <h3>Your cart is empty</h3>
                <Link to="/shop-standard" className="theme-btn-seven mt-25">
                  Return to shop
                </Link>
              </div>
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="cart-list-form">
              <div className="table-responsive">
                <SingleCart />
              </div>
              {/* <!-- /.table-responsive --> */}

              <div className="d-sm-flex justify-content-between cart-footer">
                <Coupon />
                {/* <!-- /.coupon-section --> */}

                <div className="cart-total-section d-flex flex-column sm-pt-40">
                  <CartTotal />
                  {/* <!-- /.cart-total-table --> */}
                  <Link
                    to="/checkout"
                    className="theme-btn-seven checkout-process mt-30"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
              {/* <!-- /.cart-footer --> */}
            </div>
          )}
        </div>
        {/* <!-- /.container --> */}
      </div>
      {/* <!-- /.cart-section --> */}
    </div>
    // End .main-page-wrapper
  );
};

export default Cart;
