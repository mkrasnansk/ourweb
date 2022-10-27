import React from "react";
import { Link } from "react-router-dom";

const CartFooter = () => {
  const cartFooterContent = [
    { id: 1, name: "View Cart", routeLink: "/cart" },
    { id: 2, name: "Checkout", routeLink: "/checkout" },
  ];
  return (
    <ul className="style-none button-group">
      {cartFooterContent.map((item) => (
        <li key={item.id}>
          <Link to={item.routeLink} className="view-cart">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CartFooter;
