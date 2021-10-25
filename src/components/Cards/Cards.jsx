import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = ({
  id,
  item,
  name = "nombre del producto",
  price = 0,
  src = "https://tienda.ganon.com/sca-dev-kilimanjaro/img/no_image_available.jpeg?resizeid=3\u0026resizeh=250\u0026resizew=300",
}) => {

  return (
    <div className="productContainer">
      {/* Imagen del Producto */}
      <Link className="productImage" to={`/product/${id}`}>
        <div className="productImage">
          <img src={src} alt="Imagen del producto" />
        </div>
      </Link>
      {/* Contenido del producto */}
      <div className="productContent">
        {/*Nombre y precio*/}
        <div className="productInfo">
          <h3 className="productName">
            <Link to={`/product/${id}`}>{name}</Link>
          </h3>
          <span className="productPrice">${price.toFixed(2)}</span>
        </div>
        {/* Botones */}
        <div className="productButtons">
          <Link to={`/product/${id}`}>
            <button className="addToCart">Ver detalles</button>
          </Link>
          {item.stock !== 0 ? (
            <Link to={`/product/${id}`}>
              <button className="btn btn-danger">
                ADD TO CART
              </button>
            </Link>
          ) : (
            <button className="btn btn-danger disabled">SIN STOCK</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
