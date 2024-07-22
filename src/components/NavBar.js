import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../utils/cartContext";

function NavBar() {
  const { cart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="leftside">
        <div className="logo">Mobiplace</div>
      </div>
      <div className="rightside">
        <Link to="/">Home🏠</Link>
        <Link to="/products">Products📱</Link>
        <Link to="/contact">Contact📝</Link>
        <div className="cart-icon" onClick={() => setIsCartOpen(!isCartOpen)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">{totalItems}</span>
        </div>
      </div>
      {isCartOpen && (
        <div className="cart-preview">
          <h3>Cart ({totalItems} items)</h3>
          {cart.map((item) => (
            <div key={item.id} className="cart-preview-item">
              <img src={item.picture} alt={item.product_name} width="30" />
              <span>
                {item.product_name} (x{item.quantity})
              </span>
            </div>
          ))}
          <Link
            to="/cart"
            className="view-cart-btn"
            onClick={() => setIsCartOpen(false)}
          >
            View Cart
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavBar;
