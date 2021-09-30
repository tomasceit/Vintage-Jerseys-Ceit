import "./CartWidget.css";
import { useCart } from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity, cart } = useCart();
  const cartQuantity = getQuantity();

  return (
    <button className="shopping-cart-logo">
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart" width="36" height="36" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
      {cart.length !== 0 && <p>( {cartQuantity} )</p>}
    </button>
  );
};

export default CartWidget;
