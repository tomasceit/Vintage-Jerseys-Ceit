import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";
import * as React from 'react'
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  
  
  const [counter, setCounter] = React.useState(0);

  const confirmQty = (counterNumber) => {
    setCounter(counterNumber)
  }

  return (
    <div className="myContainer item-detail">
      <div className="d-flex justify-content-between">
        <h3>{item.name}</h3>
        <h3 className="c-red">${Number(item.price).toFixed(2)}</h3>
      </div>

      <div className="d-flex mt-3">
        <img src={item.src} alt="Imagen del producto en detalle" />
        <div className="myContainer">
          <p className="item-description">{item.description}</p>
          {item.stock === 0 
          ? <div className="d-flex justify-content-center"><button className="btn btn-danger end-shopping" disabled> SIN STOCK</button></div>
          
          : counter !== 0 
          ? (<div className="d-flex justify-content-center">
              <Link to={`/cart`}>
                <button className="btn btn-danger end-shopping">
                  Terminar mi compra
                </button>
              </Link>
            </div>)
          : <ItemCount item={item} confirm={confirmQty} />}
          <hr />
          <p className="item-stock">Quedan {item.stock} items disponibles</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
