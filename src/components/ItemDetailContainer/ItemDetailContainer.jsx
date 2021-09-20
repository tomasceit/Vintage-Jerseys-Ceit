import * as React from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = React.useState([]);

  const getItem = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    });
  };

  React.useEffect(() => {
    getItem()
    .then((resultado) => setItem(resultado));
  }, []);

  return (
    <div id="itemDetails">
      {item?.map((prod) => {
        return (
        <ItemDetail key={prod.id} item={prod} />);
      })}
    </div>
  );
};

export default ItemDetailContainer;

const productos = [
  {
    id: 0,
    name: "1995 Barcelona Titular",
    price: "8.500,00",
    src: "https://www.jerseygoal.co/images/Retro-Jersey/1992-1995%20Barcelona%20Home%20Retro%20Jersey%201.jpg",
    stock: 5,
    initial: 1,
    description:
      "Esto sería la descripción del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et iaculis lectus. Aliquam ac condimentum turpis, nec aliquet odio. Proin sit amet nulla nec tortor bibendum vestibulum nec non metus. Quisque ac neque facilisis, fringilla eros ac, varius tellus. Vivamus sit amet felis ex. Donec ut justo suscipit, suscipit mauris vel, pellentesque metus. Sed sapien mauris, mollis ac enim ac, ornare sagittis augue. Mauris lacinia nisl sed massa maximus, sit amet egestas dui pharetra.",
  },
  {
    id: 1,
    name: "1994 WC Argentina Away",
    price: "9.500,00",
    src: "https://www.jerseygoal.co/images/Retro-Jersey/1994-1995%20Argentina%20Away%20Retro%20Jersey%20701.jpg",
    stock: 15,
    initial: 1,
    description:
      "Esto sería la descripción del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et iaculis lectus. Aliquam ac condimentum turpis, nec aliquet odio. Proin sit amet nulla nec tortor bibendum vestibulum nec non metus. Quisque ac neque facilisis, fringilla eros ac, varius tellus. Vivamus sit amet felis ex. Donec ut justo suscipit, suscipit mauris vel, pellentesque metus. Sed sapien mauris, mollis ac enim ac, ornare sagittis augue. Mauris lacinia nisl sed massa maximus, sit amet egestas dui pharetra.",
  },
  {
    id: 2,
    name: "1999 Inter Milan Home",
    price: "7.000,00",
    src: "https://www.jerseygoal.co/images/Retro-Jersey/1998-1999%20Intel%20Milan%20Home%20Long%20Sleeve%20Retro%20Jersey%20BAGGIO%2010%20Shirt.jpg",
    stock: 7,
    initial: 1,
    description:
      "Esto sería la descripción del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et iaculis lectus. Aliquam ac condimentum turpis, nec aliquet odio. Proin sit amet nulla nec tortor bibendum vestibulum nec non metus. Quisque ac neque facilisis, fringilla eros ac, varius tellus. Vivamus sit amet felis ex. Donec ut justo suscipit, suscipit mauris vel, pellentesque metus. Sed sapien mauris, mollis ac enim ac, ornare sagittis augue. Mauris lacinia nisl sed massa maximus, sit amet egestas dui pharetra.",
  },
  {
    id: 3,
    name: "1998 Boca Jrs Home",
    price: "8.900,00",
    src: "https://www.jerseygoal.co/images/Retro-Jersey/1997-1998%20Boca%20Juniors%20Home%20Shirt%20Maradona%2010.jpg",
    stock: 10,
    initial: 1,
    description:
      "Esto sería la descripción del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et iaculis lectus. Aliquam ac condimentum turpis, nec aliquet odio. Proin sit amet nulla nec tortor bibendum vestibulum nec non metus. Quisque ac neque facilisis, fringilla eros ac, varius tellus. Vivamus sit amet felis ex. Donec ut justo suscipit, suscipit mauris vel, pellentesque metus. Sed sapien mauris, mollis ac enim ac, ornare sagittis augue. Mauris lacinia nisl sed massa maximus, sit amet egestas dui pharetra.",
  },
  {
    id: 4,
    name: "1998 WC France Home",
    price: "11.500,00",
    src: "https://www.jerseygoal.co/images/France/1998%20World%20Cup%20France%20Home%20Final%20Jersey.jpg",
    stock: 11,
    initial: 1,
    description:
      "Esto sería la descripción del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et iaculis lectus. Aliquam ac condimentum turpis, nec aliquet odio. Proin sit amet nulla nec tortor bibendum vestibulum nec non metus. Quisque ac neque facilisis, fringilla eros ac, varius tellus. Vivamus sit amet felis ex. Donec ut justo suscipit, suscipit mauris vel, pellentesque metus. Sed sapien mauris, mollis ac enim ac, ornare sagittis augue. Mauris lacinia nisl sed massa maximus, sit amet egestas dui pharetra.",
  },
  {
    id: 5,
    name: "1997 Arsenal Home",
    price: "10.500,00",
    src: "https://www.jerseygoal.co/images/Retro-Jersey/1998-1999%20Arsenal%20Home%20Retro%20Jersey%201.jpg",
    stock: 6,
    initial: 1,
    description:
      "Esto sería la descripción del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et iaculis lectus. Aliquam ac condimentum turpis, nec aliquet odio. Proin sit amet nulla nec tortor bibendum vestibulum nec non metus. Quisque ac neque facilisis, fringilla eros ac, varius tellus. Vivamus sit amet felis ex. Donec ut justo suscipit, suscipit mauris vel, pellentesque metus. Sed sapien mauris, mollis ac enim ac, ornare sagittis augue. Mauris lacinia nisl sed massa maximus, sit amet egestas dui pharetra.",
  }
];
