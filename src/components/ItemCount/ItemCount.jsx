import * as React from "react";
import "./ItemCount.css";
import { useCart } from "../../context/CartContext";

const ItemCount = ({ item, confirm }) => {

  const { addItem } = useCart();
  const [counterNumber, setcounterNumber] = React.useState(item.initial);
  
  const restaItem = () => counterNumber > item.initial && setcounterNumber((prevState) => prevState - 1);

  const sumaItem = () => counterNumber < item.stock && setcounterNumber((prevState) => prevState + 1); 

  const addToCart = (item, qty) => addItem(item, qty);

  return (
    <div className="buttons-details">
      <div id="itemCounter" className="d-flex">
        <button type="button" className="operations" onClick={restaItem}>-</button>
        <button type="button">{counterNumber}</button>
        <button type="button" className="operations" onClick={sumaItem}>+</button>
      </div>
      <button className="btn btn-danger" onClick={() => {confirm(counterNumber); addToCart(item, counterNumber)}}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
