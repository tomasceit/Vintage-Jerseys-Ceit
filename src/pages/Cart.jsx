import * as React from "react";
import { useCart } from "../context/CartContext";
import CartList from "../components/CartList/CartList";

const Cart = () => {
  const { clear, cart } = useCart();
  const clearCart = () => {
    clear();
  };

  return (
    <div className="myContainer d-flex flex-column">
      <div className="d-flex align-items-center justify-content-between mb-1">
        <h2>CART</h2>
        {cart.length !== 0 && (
          <button className="btn" style={{ width: "180px", height: '3rem', fontSize: '1.5rem' }} onClick={clearCart}>
            Vaciar carrito
          </button>
        )}
      </div>
      <CartList />
    </div>
  );
};

export default Cart;
