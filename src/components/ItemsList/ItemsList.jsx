import * as React from "react";
import "./ItemsList.css";
import Card from "../Cards/Cards.jsx";

const ItemsList = () => {
  const [items, setItems] = React.useState([]);
  const [cargando, setCargando] = React.useState(false);

  const getProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  React.useEffect(() => {
    setCargando(true);
    getProductos()
      .then((resultado) => setItems(resultado))
      .finally(() => setCargando(false));
  }, []);

  return (
    <div id="itemsList" className="d-flex flex-row flex-wrap">
      {cargando && (<div className="d-flex flex-column loading"><p>Loading...</p> <div className="lds-roller"><div /><div /><div /><div /><div /><div /><div /><div /></div></div>) }

      {items?.map((prod) => {
        return (
          <Card
            key={prod.id}
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

const productos = [
  {
    id: 0,
    name: "1995 Barcelona Home",
    price: "8.500,00",
    src: "https://www.jerseygoal.co/images/Retro-Jersey/1992-1995%20Barcelona%20Home%20Retro%20Jersey%201.jpg",
    stock: 5,
    initial: 1,
  },
  {
    id: 1,
    name: "1994 WC Argentina Away",
    price: "9.500,00",
    src: "https://www.jerseygoal.co/images/Retro-Jersey/1994-1995%20Argentina%20Away%20Retro%20Jersey%20701.jpg",
    stock: 15,
    initial: 1,
  },
  {
    id: 2,
    name: "1999 Inter Milan Home",
    price: "7.000,00",
    src: "https://www.jerseygoal.co/images/Retro-Jersey/1998-1999%20Intel%20Milan%20Home%20Long%20Sleeve%20Retro%20Jersey%20BAGGIO%2010%20Shirt.jpg",
    stock: 7,
    initial: 1,
  },
  {
    id: 3,
    name: "1998 Boca Jrs Home",
    price: "8.900,00",
    src: "https://www.jerseygoal.co/images/Retro-Jersey/1997-1998%20Boca%20Juniors%20Home%20Shirt%20Maradona%2010.jpg",
    stock: 10,
    initial: 1,
  },
  {
    id: 4,
    name: "1998 WC France Home",
    price: "11.500,00",
    src: "https://www.jerseygoal.co/images/France/1998%20World%20Cup%20France%20Home%20Final%20Jersey.jpg",
    stock: 11,
    initial: 1,
  },
  {
    id: 5,
    name: "1997 Arsenal Home",
    price: "10.500,00",
    src: "https://www.jerseygoal.co/images/Retro-Jersey/1998-1999%20Arsenal%20Home%20Retro%20Jersey%201.jpg",
    stock: 6,
    initial: 1,
  },
];
