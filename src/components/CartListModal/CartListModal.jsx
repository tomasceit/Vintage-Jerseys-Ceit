import "./CartListModal.css";
import * as React from "react";
import CartList from "../CartList/CartList";

const CartListModal = ({ estado }) => {
  const [state, setState] = React.useState(true);
  React.useEffect(() => {
    state === estado ? setState(prevState => !prevState) : setState(estado)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [estado])

  return (
    <div id="cart-list-modal" className={state ? "modal fade d-block show" : "modal fade"} tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">CARRITO DE COMPRAS</h5>
            <button type="button" className="btn-close" onClick={() => setState(prevState => !prevState)} />
          </div>
          <div className="modal-body">
            <CartList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListModal;
