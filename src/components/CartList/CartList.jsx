import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartList.css";

const CartList = () => {
  const { cart, removeItem, getTotal } = useCart();

  const remove = (id) => {
    removeItem(id);
  };
  const total = getTotal();

  if (cart.length === 0) {
    return (
      <div className="d-flex flex-column">
        <h3>No hay productos en el carrito</h3>
        <Link to="/">
          <button className="btn btn-danger mt-3">Volvé a la tienda</button>
        </Link>
      </div>
    );
  } else {
    return (
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
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {cart.map((prod) => {
            return (
              <tr key={prod.itemId}>
                <th scope="row">{prod.item.name}</th>
                <td className="text-center">$ {prod.item.price.toFixed(2)}</td>
                <td className="text-center">{prod.quantity}</td>
                <td className="text-center">
                  ${" "}
                  {(Number(prod.item.price) * Number(prod.quantity)).toFixed(2)}
                </td>
                <td className="text-center remove-item">
                  <span onClick={() => remove(prod.itemId)}>x</span>
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
            <td />
            <td className="text-center">TOTAL: $ {total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
};

export default CartList;
