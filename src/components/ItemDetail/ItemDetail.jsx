import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <div className="d-flex justify-content-between">
        <h3>{item.name}</h3>
        <h3 className="c-red">${item.price}</h3>
      </div>

      <div className="d-flex mt-3">
        <img src={item.src} alt="Imagen del producto en detalle" />
        <div>
          <p className="item-description">{item.description}</p>
          <div className="buttons-details justify-content-between d-flex">
            <ItemCount stock={item.stock} initial={item.initial} />
            <button className="btn btn-danger">Add to cart</button>
          </div>
          <hr />
          <p className="text-center item-stock">Quedan {item.stock} items disponibles</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
