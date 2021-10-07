import * as React from "react";
import "./CheckoutForm.css";
import { useCart } from "../../context/CartContext";
import { getFirestore, fireBase } from "../../firebase";

const CheckoutForm = () => {
  // const [selectCard, setSelectCard] = React.useState(false);
  // const [selectCash, setSelectCash] = React.useState(false);

  // const handleSelect = (variable) => {
  //   if (variable === "card") {
  //     setSelectCard((prevState) => !prevState);
  //     setSelectCash(false);
  //   }
  //   if (variable === "cash") {
  //     setSelectCash((prevState) => !prevState);
  //     setSelectCard(false);
  //   }
  // };
  const [state, setState] = React.useState(false);

  const handleModal = () => {
    setState((prevState) => !prevState);
  };
  const [orderId, setOrderId] = React.useState("")
  const { cart, clear, getTotal } = useCart();
  const [userInfo, setUserInfo] = React.useState({
    fullName: "",
    email: "",
    phone: "",
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
    const orders = db.collection('orders');

    orders.add(buyInfo)
    .then((order) => setOrderId(order.id))
    .catch(err=>console.error(err))
  }

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
      date: fireBase.firestore.Timestamp.now().toDate()
    };
    uploadFirestore(buyInfo)
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    clear();
    handleModal();
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
    <><form onSubmit={onSubmit} className="d-flex flex-column align-items-center">
      <fieldset>
        <legend className="mb-3">Datos personales</legend>
        <hr />
        <div className="d-flex align-items-center">
          <label htmlFor="fullName">Nombres y Apellido:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={onInputBuyer}
            required
          />
        </div>
        <div className="d-flex align-items-center mt-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={onInputBuyer}
            required
          />
        </div>
        <div className="d-flex align-items-center mt-3">
          <label htmlFor="phone">Celular:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={onInputBuyer}
            required
          />
        </div>
      </fieldset>

      {/* <fieldset>
        <legend className="mb-3">Método de pago</legend>
        <hr />
        <div className="d-flex justify-content-around">
          <div className="checkbox">
            <label>Tarjeta de credito/debito:</label>
            <input type="checkbox" onClick={() => handleSelect("card")} disabled={selectCash} />
          </div>
          <div className="checkbox">
            <label>Transferencia bancaria:</label>
            <input type="checkbox" onClick={() => handleSelect("cash")} disabled={selectCard} />
          </div>
        </div>
        {selectCard && <div>Tarjeta formulario</div>}
        {selectCash && <div>Transferencia formulario</div>}
      </fieldset> */}

      <fieldset>
        <legend className="mb-3">Datos de envío</legend>
        <hr />
        <div className="d-flex align-items-center mt-3">
          <label>Nombres y Apellido:</label>
          <input
            type="text"
            name="fullName"
            onChange={onInputShippingInfo}
            required
            style={{ width: "320px" }}
          />
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
          <div
            className="d-flex align-items-center mt-3"
            style={{ marginLeft: "2.3rem" }}
          >
            <label>CP:</label>
            <input
              type="number"
              name="postalCode"
              onChange={onInputShippingInfo}
              required
              style={{ width: "80px" }}
            />
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

      <button
        type="submit"
        className="btn btn-danger mt-3"
        style={{ width: "180px", height: "3rem", fontSize: "1.5rem" }}
      >
        FINALIZAR COMPRA
      </button>
    </form>
    {/* Modal de confirmacion */}
    <div
        style={{backdropFilter: "blur(10px)"}}
        className={state ? "modal fade d-block show" : "modal fade"}
        tabIndex="-1"
      >
        <div className="modal-dialog" style={{borderRadius: ".5rem", width: "400px"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">FELICITACIONES, TU COMPRA FUE EXITOSA!</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleModal}
              />
            </div>
            <div className="modal-body" style={{minHeight: "150px"}}>
              <p>Id de la compra: {orderId}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
