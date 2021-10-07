import * as React from "react";
import { useCart } from "../context/CartContext";
import CartList from "../components/CartList/CartList";
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";

const Checkout = () => {
  const { cart } = useCart();
  const [state, setState] = React.useState(false);

  const handleModal = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div className="myContainer">
      <div className="d-flex align-items-center justify-content-between mb-1">
        <h2>CHECKOUT</h2>
        {cart.length !== 0 && (
          <button className="btn btn-clear btn-show" onClick={handleModal}>
            Ver carrito
          </button>
        )}
      </div>
      {/* Modal del carrito */}
      <div
        style={{backdropFilter: "blur(10px)"}}
        className={state ? "modal fade d-block show" : "modal fade"}
        tabIndex="-1"
      >
        <div className="modal-dialog" style={{borderRadius: ".5rem"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">CARRITO DE COMPRAS</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleModal}
              />
            </div>
            <div className="modal-body">
              <CartList />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
