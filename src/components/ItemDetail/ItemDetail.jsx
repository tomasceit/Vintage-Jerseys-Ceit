import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount.jsx";

const ItemDetail = (props) => {
  return (
    <div id={`itemDetail${props.item.id}`} className="item-detail">
      <div className="d-flex justify-content-between">
        <h3>{props.item.name}</h3>
        <h3 className="c-red">${props.item.price}</h3>
      </div>
      <div className="d-flex mt-3">
        <img src={props.item.src} />
        <div>
          <p className="item-description">
            {props.item.description}
          </p>

          <div className="buttons-details justify-content-between d-flex">
            <ItemCount stock={props.item.stock} initial={props.item.initial} />
            <button className="btn btn-danger">Add to cart</button>
          </div>

          <hr />

          <p className="text-center item-stock">Quedan {props.item.stock} items disponibles</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ItemDetail;
