import * as React from "react";
import "./ItemsList.css";
import Card from "../Cards/Cards.jsx";

const ItemsList = ({prods}) => {
  const [items, setItems] = React.useState([]);
  
  // const getProductos = () => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(prods);
  //     }, 2000);
  //   });
  // };

  React.useEffect(() => {
      setItems(prods)
  }, [prods]);

  return (
    <div id="itemsList" className="d-flex flex-row flex-wrap">
      {items?.map((prod) => {
        return (
          <Card
            key={prod.id}
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
