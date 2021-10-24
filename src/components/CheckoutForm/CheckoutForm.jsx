import * as React from "react";
import "./CheckoutForm.css";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import { getFirestore, fireBase } from "../../firebase";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";

const CheckoutForm = () => {
  const [state, setState] = React.useState(false);
  const [orderId, setOrderId] = React.useState("");
  const { cart, clear, getTotal } = useCart();
  const { userLogged } = useUser();
  const [userInfo, setUserInfo] = React.useState({
    fullName: userLogged ? userLogged.displayName : '',
    email: userLogged? userLogged.email : '',
    phone: userLogged? userLogged.photoURL : '',
  });
  const [shippingInfo, setShippingInfo] = React.useState({
    fullName: "",
    state: "Buenos Aires",
    street: "",
    homeNumber: 0,
    postalCode: 0,
  });
  const uploadFirestore = (buyInfo) => {
    const db = getFirestore();
    const orders = db.collection("orders");
    orders
      .add(buyInfo)
      .then((order) => setOrderId(order.id))
      .catch((err) => console.error(err));
    cart.forEach((prod) => {
      const product = db.collection("products").doc(prod.itemId);
      product.update({ stock: prod.item.stock - prod.quantity });
    });
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    if (cart.length === 0) {
      console.error(
        "El carrito esta vacío. Agrega productos para continuar la compra."
      );
      return;
    }
    const total = Number(getTotal().toFixed(2));
    const buyInfo = {
      buyer: userInfo,
      items: cart,
      shippingInfo: shippingInfo,
      priceTotal: total,
      date: fireBase.firestore.Timestamp.now().toDate(),
    };
    uploadFirestore(buyInfo);
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    clear();
    setState(true);
  };
  const onInputBuyer = (evt) => {
    setUserInfo((prevState) => {
      return { ...prevState, [evt.target.name]: evt.target.value };
    });
  };
  const onInputShippingInfo = (evt) => {
    setShippingInfo((prevState) => {
      return { ...prevState, [evt.target.name]: evt.target.value };
    });
  };
  return (
    <>
      <form onSubmit={onSubmit} className="d-flex flex-column align-items-center">
        <fieldset>
          <legend className="mb-3">Datos personales</legend>
          <hr />
          <div className="d-flex align-items-center">
            <label htmlFor="fullName">Nombres y Apellido:</label>
            <input type="text" id="fullName" name="fullName" onChange={onInputBuyer} value={userLogged ? userLogged.displayName : null} disabled={userLogged && true} />
          </div>
          <div className="d-flex align-items-center mt-3">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" onChange={onInputBuyer} value={userLogged ? userLogged.email : null} disabled={userLogged && true} required />
          </div>
          <div className="d-flex align-items-center mt-3">
            <label htmlFor="phone">Celular:</label>
            <input type="tel" id="phone" name="phone" onChange={onInputBuyer} value={userLogged ? userLogged.photoURL : null} disabled={userLogged && true} required />
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-3">Datos de envío</legend>
          <hr />
          <div className="d-flex align-items-center mt-3">
            <label>Nombres y Apellido:</label>
            <input type="text" name="fullName" onChange={onInputShippingInfo} required style={{ width: "320px" }} />
          </div>

          <div className="d-flex justify-content-around">
            <div className="d-flex align-items-center mt-3">
              <label>Provincia:</label>
              <select name="state" onChange={onInputShippingInfo}>
                <option defaultValue value="Buenos Aires">Buenos Aires</option>
                <option value="Santa Fe">Santa Fe</option>
                <option value="La Pampa">La Pampa</option>
              </select>
            </div>
            <div className="d-flex align-items-center mt-3" style={{ marginLeft: "2.3rem" }}>
              <label>CP:</label>
              <input type="number" name="postalCode" onChange={onInputShippingInfo} required style={{ width: "80px" }} />
            </div>
          </div>

          <div className="d-flex justify-content-around">
            <div className="d-flex align-items-center mt-3">
              <label>Dirección:</label>
              <input
                type="text"
                name="street"
                onChange={onInputShippingInfo}
                required
                style={{ width: "190px" }}
              />
            </div>
            <div className="d-flex align-items-center mt-3">
              <label>Número:</label>
              <input
                type="number"
                name="homeNumber"
                onChange={onInputShippingInfo}
                required
                style={{ width: "80px" }}
              />
            </div>
          </div>
        </fieldset>
        <button type="submit" className="btn btn-danger my-btn mt-3">
          FINALIZAR COMPRA
        </button>
      </form>
      <ConfirmationModal estado={state} orderId={orderId} />
    </>
  );
};

export default CheckoutForm;
