import * as React from "react";
import "./ItemCount.css";
import { Link } from 'react-router-dom'

const ItemCount = ({ item, stock, initial }) => {
  const [itemNumber, setItemNumber] = React.useState(initial);
  const restaItem = () => {
    itemNumber > initial && setItemNumber((prevState) => prevState - 1);
  };
  const sumaItem = () => {
    itemNumber < stock && setItemNumber((prevState) => prevState + 1);
  };
  const addToCart = (item, qty) => {
    item.quantity = qty;
    console.log(item);
  };
  return (
    <div className="buttons-details justify-content-between d-flex">
      <div id="itemCounter" className="d-flex">
        <button type="button" className="operations" onClick={restaItem}>-</button>
        <button type="button">{itemNumber}</button>
        <button type="button" className="operations" onClick={sumaItem}>+</button>
      </div>
      <Link to={`/cart`}>
        <button className="btn btn-danger" onClick={() => addToCart(item, itemNumber)}>
          Add to cart
        </button>
      </Link>
    </div>
  );
};

export default ItemCount;
