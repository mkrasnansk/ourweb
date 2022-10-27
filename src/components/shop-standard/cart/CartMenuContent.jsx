import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useCart from "../../../hooks/use-cart";
import { cartProduct } from "../../../redux/features/cart-slice";
import CartFooter from "./CartFooter";
import CartItems from "./CartItems";

const ShopDropDowon = () => {
  const cartItems = useSelector(cartProduct);
  const { total, quantity } = useCart();
  return (
    <>
      <div className="cart-group-wrapper md-space-fix">
        <button
          className="dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="outside"
          aria-expanded="false"
        >
          <img
            src={require("../../../assets/images/icon/icon_71.svg").default}
            alt="icon"
            className="m-auto"
          />
          <span className="item-count">{quantity}</span>
        </button>
        {/* cart menu button */}

        <div className="dropdown-menu dropdown-menu-end">
          {cartItems.length === 0 && (
            <div className="text-center mt-30">
              <h4>Your cart is empty</h4>
              <Link
                to={"/grid-layout-fullwidth"}
                className="theme-btn-three small"
              >
                Return to shop
                <i className="fas fa-angle-right"></i>
              </Link>
            </div>
          )}

          {cartItems.length > 0 && (
            <ul className="style-none cart-product-list">
              <CartItems />
            </ul>
          )}
          {/* <!-- /.cart-product-list --> */}

          {cartItems.length > 0 && (
            <div className="subtotal d-flex justify-content-between align-items-center">
              <div className="title">Subtotal</div>
              <div className="total-price">${total.toFixed(2)}</div>
            </div>
          )}
          {/* End .subtotal */}

          {cartItems.length > 0 && <CartFooter />}
          {/* End cart & Checkout Info */}
        </div>
      </div>
    </>
  );
};

export default ShopDropDowon;
