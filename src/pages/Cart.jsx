import * as React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import CartList from "../components/CartList/CartList";
import LoadingIcon from '../components/LoadingIcon/LoadingIcon'

const Cart = () => {
  const { clear, cart } = useCart();
  const clearCart = () => {
    clear();
  };
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  if (loading) {
    return <LoadingIcon />
  } else {
    return (
      <div className="myContainer d-flex flex-column">
        <div className="d-flex align-items-center justify-content-between mb-1">
          <h2>CARRITO DE COMPRAS</h2>
          {cart.length !== 0 && (
            <button className="btn btn-clear" onClick={clearCart}>
              Vaciar carrito
            </button>
          )}
        </div>
        <hr />

        <CartList />

        {cart.length !== 0 && <div className="d-flex justify-content-end" style={{ padding: "0rem 1rem" }}>
          <Link to="/checkout">
            <button className="btn btn-danger m-2 my-btn">
              Finalizar compra
            </button>
          </Link>
        </div>}
      </div>
    );
  }
};

export default Cart;
