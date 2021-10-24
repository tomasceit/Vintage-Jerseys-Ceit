import * as React from "react";
import './SearchOrder.css'
import { getFirestore } from "../../firebase";

const SearchOrder = () => {
    const [searchId, setSearchId] = React.useState('something')
    const [itemsOrdered, setItemsOrdered] = React.useState([])
    const [priceTotal, setPriceTotal] = React.useState(0)

    const searchOrder = () => {
        setItemsOrdered([])
        const db = getFirestore();
        const ordersCollection = db.collection("orders");
        const order = ordersCollection.doc(searchId);

        order
            .get()
            .then((doc) => {
                if (!doc.exists) {
                    setItemsOrdered([])
                    console.error("Couldn't find the order")
                } else {
                    setItemsOrdered(doc.data().items)
                    setPriceTotal(doc.data().priceTotal)
                }
            })
            .catch((err) => { console.error(err) })
            .finally(() => { });
    }

    return (<>
        <h3>Mis pedidos</h3>
        <hr />
        <p>Busca tu orden ingresando el id de tu orden.</p>
        <div className="d-flex row">
            <input type="text" placeholder="Ingresa el ID de tu orden" onChange={(evt) => setSearchId(evt.target.value)} />
            <button type="button" className="btn btn-danger btn-search mt-3" onClick={() => searchOrder()}>BUSCAR</button>
        </div>
        {itemsOrdered.length > 0 ? <div className="mt-5">
            <h3 className="mt-5">Esta es tu compra:</h3>
            <table id="cartList" className="table">
            <thead>
                <tr>
                    <th scope="col">PRODUCTO</th>
                    <th scope="col" className="text-center">
                        PRECIO
                    </th>
                    <th scope="col" className="text-center">
                        CANTIDAD
                    </th>
                    <th scope="col" className="text-center">
                        SUBTOTAL
                    </th>
                </tr>
            </thead>
            <tbody>
                {itemsOrdered.map((prod) => {
                    return (
                        <tr key={prod.itemId}>
                            <th scope="row">{prod.item.name}</th>
                            <td className="text-center">$ {prod.item.price.toFixed(2)}</td>
                            <td className="text-center">{prod.quantity}</td>
                            <td className="text-center">
                                ${" "}
                                {(Number(prod.item.price) * Number(prod.quantity)).toFixed(2)}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td />
                    <td />
                    <td />
                    <td className="text-center">TOTAL: $ {priceTotal.toFixed(2)}</td>
                </tr>
            </tfoot>
        </table></div> 
        : <h4 className="mt-5  ">El ID ingresado es incorrecto</h4>}</>
    )
}

export default SearchOrder
