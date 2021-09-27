import * as React from "react";
import "./ItemsList.css";
import Card from "../Cards/Cards.jsx";

const ItemsList = ({prods}) => {
  return (
    <div id="itemsList" className="d-flex flex-row flex-wrap">
      {prods?.map((prod) => {
        return (
          <Card
            key={prod.id}
            item={prod}
            id={prod.id}
            name={prod.name}
            price={prod.price}
            src={prod.src}
            stock={prod.stock}
            initial={prod.initial}
          />
        );
      })}
    </div>
  );
};

export default ItemsList;
