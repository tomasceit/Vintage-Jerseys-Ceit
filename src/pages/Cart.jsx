import * as React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { removeItem, clear } = useCart();
  const clearCart = () => {
    clear();
  };
  const removeOneItem = (id) => {
    removeItem(id);
  };
  return (
    <div className="myContainer d-flex flex-column align-items-center text-center">
      <h2>CART</h2>
      <button className="btn btn-danger m-2" style={{width: '180px'}} onClick={clearCart}>Vaciar carrito</button>
      <button className="btn btn-danger m-2" style={{width: '180px'}} onClick={() => removeOneItem(0)}>Remover un item</button>
    </div>
  );
};

export default Cart;
