import "./Cards.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Cards = ({
  id,
  item,
  name = "nombre del producto",
  price = 0,
  src = "https://tienda.ganon.com/sca-dev-kilimanjaro/img/no_image_available.jpeg?resizeid=3\u0026resizeh=250\u0026resizew=300",
}) => {
  const { addItem } = useCart();

  const addToCart = (item, qty) => {
    addItem(item, qty);
  };

  return (
    <div className="productContainer">
      <Link className="productImage" to={`/product/${id}`}>
        <div className="productImage">
          <img src={src} alt="Imagen del producto" />
        </div>
      </Link>

      <div className="productContent">
        <div className="productInfo d-flex flex-column">
          <h3 className="productName">
            <Link to={`/product/${id}`}>{name}</Link>
          </h3>
          <span className="productPrice">${price.toFixed(2)}</span>
        </div>

        <div className="productButtons d-flex">
          <Link to={`/product/${id}`}>
            <button className="addToCart">Ver detalles</button>
          </Link>
          <Link to={`/cart`}>
          <button className="addToCart d-flex" onClick={()=>addToCart(item,1)}>
            <p className="mb-0 me-1">Add to cart</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-shopping-cart-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#262528"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
              <path d="M15 6h6m-3 -3v6" />
            </svg>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
