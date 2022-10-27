import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartProduct } from "../../../redux/features/cart-slice";

const CartItems = () => {
  const cartItemsContent = useSelector(cartProduct);
  return (
    <>
      {cartItemsContent.map((item) => (
        <li className="d-flex align-items-center selected-item" key={item.id}>
          <Link
            to={`/product-details/${item.id}`}
            className="item-img d-flex align-items-center justify-content-center"
          >
            <img src={item.img} alt="product" />
          </Link>
          <div className="item-info">
            <Link to={`/product-details/${item.id}`} className="name">
              {item.title}
            </Link>
            <div className="price">
              ${item.price} <span className="quantity">x {item.quantity}</span>
            </div>
          </div>
          {/* <!-- /.item-info --> */}
        </li>
      ))}
    </>
  );
};

export default CartItems;
