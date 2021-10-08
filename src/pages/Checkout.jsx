import * as React from "react";
import { useCart } from "../context/CartContext";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import CartListModal from "../components/CartListModal/CartListModal";

const Checkout = () => {
  const { cart } = useCart();
  const [state, setState] = React.useState(false)

  return (
    <div className="myContainer">
      <div className="d-flex align-items-center justify-content-between mb-1">
        <h2>CHECKOUT</h2>
        {cart.length !== 0 && (
          <button className="btn btn-clear btn-show" onClick={() => setState(prevState => !prevState)}>
            Ver carrito
          </button>
        )}
      </div>
      <CartListModal estado={state} />
      <hr />
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
