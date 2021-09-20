import * as React from 'react'
import "./ItemDetailContainer.css"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [item, setItem] = React.useState({})

    const getItem = (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const resultado = productos.find(item => item.id === id);
                resolve(resultado);
            }, 2000);
        })
    }
    
    React.useEffect(() => {
        getItem(0)
        .then((resultado) => setItem(resultado))
    }, []);

    return (
        <div id="itemDetails">
            {(item.name !== undefined) && <ItemDetail item={item} />}            
        </div>
    )
}

export default ItemDetailContainer

const productos = [
    {
      id: 0,
      name: "1995 Barcelona Home",
      price: "8.500,00",
      src: "https://www.jerseygoal.co/images/Retro-Jersey/1992-1995%20Barcelona%20Home%20Retro%20Jersey%201.jpg",
      stock: 5,
      initial: 1,
      description: 'Esto sería la descripción del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et iaculis lectus. Aliquam ac condimentum turpis, nec aliquet odio. Proin sit amet nulla nec tortor bibendum vestibulum nec non metus. Quisque ac neque facilisis, fringilla eros ac, varius tellus. Vivamus sit amet felis ex. Donec ut justo suscipit, suscipit mauris vel, pellentesque metus. Sed sapien mauris, mollis ac enim ac, ornare sagittis augue. Mauris lacinia nisl sed massa maximus, sit amet egestas dui pharetra.'
    },
    {
      id: 1,
      name: "1994 WC Argentina Away",
      price: "9.500,00",
      src: "https://www.jerseygoal.co/images/Retro-Jersey/1994-1995%20Argentina%20Away%20Retro%20Jersey%20701.jpg",
      stock: 15,
      initial: 1,
      description: 'Esto sería la descripción del producto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et iaculis lectus. Aliquam ac condimentum turpis, nec aliquet odio. Proin sit amet nulla nec tortor bibendum vestibulum nec non metus. Quisque ac neque facilisis, fringilla eros ac, varius tellus. Vivamus sit amet felis ex. Donec ut justo suscipit, suscipit mauris vel, pellentesque metus. Sed sapien mauris, mollis ac enim ac, ornare sagittis augue. Mauris lacinia nisl sed massa maximus, sit amet egestas dui pharetra.'
    }]