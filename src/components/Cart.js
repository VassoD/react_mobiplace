import React from "react";
import { useCart } from "../utils/cartContext";

const CartItem = ({ item, onRemove, onUpdateQuantity }) => (
  <div className="cart-item">
    <img src={item.picture} alt={item.product_name} width="50" />
    <div className="cart-item-details">
      <h3>{item.product_name}</h3>
      <div className="quantity-control">
        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>
          +
        </button>
      </div>
      <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  </div>
);

const CartSummary = ({ total }) => (
  <div className="cart-summary">
    <h3>Cart Summary</h3>
    <p>Total Items: {total.items}</p>
    <p>Total Price: ${total.price.toFixed(2)}</p>
    <button className="checkout-button">Proceed to Checkout</button>
  </div>
);

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const cartTotal = cart.reduce(
    (total, item) => ({
      items: total.items + item.quantity,
      price: total.price + item.price * item.quantity,
    }),
    { items: 0, price: 0 }
  );

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    } else {
      removeFromCart(id);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your Cart is Empty</h2>
        <p>Add some products to your cart and they will appear here.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeFromCart}
            onUpdateQuantity={handleUpdateQuantity}
          />
        ))}
      </div>
      <CartSummary total={cartTotal} />
    </div>
  );
}

export default Cart;
