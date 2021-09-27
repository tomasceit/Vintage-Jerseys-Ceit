import * as React from "react";
import "./ItemCount.css";

const ItemCount = ({ item, addToCart }) => {
  const [counterNumber, setcounterNumber] = React.useState(item.initial);
  const restaItem = () => {
    counterNumber > item.initial && setcounterNumber((prevState) => prevState - 1);
  };
  const sumaItem = () => {
    counterNumber < item.stock && setcounterNumber((prevState) => prevState + 1);
  }; 

  return (
    <div className="buttons-details justify-content-between d-flex">
      <div id="itemCounter" className="d-flex">
        <button type="button" className="operations" onClick={restaItem}>-</button>
        <button type="button">{counterNumber}</button>
        <button type="button" className="operations" onClick={sumaItem}>+</button>
      </div>
      <button className="btn btn-danger" onClick={() => addToCart(counterNumber)}>
        Confirmar cantidad
      </button>
    </div>
  );
};

export default ItemCount;
