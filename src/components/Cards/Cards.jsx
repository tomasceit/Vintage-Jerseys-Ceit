import "./Cards.css";
import ItemCount from "../ItemCount/ItemCount.jsx";

const Cards = ({ id, name = 'nombre del producto', price = '80.00', src = 'https://tienda.ganon.com/sca-dev-kilimanjaro/img/no_image_available.jpeg?resizeid=3\u0026resizeh=250\u0026resizew=300', stock = 10, initial = 1 }) => {
  return (
    <div className="productContainer">

      <a className="productImage" href={`#itemDetail${id}`}>
        <div className="productImage">
          <img src={src} alt="Imagen del producto" />
        </div>
      </a>

      <div className="productContent">

        <div className="productInfo d-flex flex-column">
          <h3 className="productName">
            <a href={`#itemDetail${id}`}>{name}</a>
          </h3>
          <span className="productPrice">${price}</span>
        </div>

        <div className="productButtons d-flex">
          <ItemCount stock={stock} initial={initial} />
          <button className="addToCart d-flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-shopping-cart-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#262528" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="17" cy="19" r="2" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l6.005 .429m7.138 6.573l-.143 .998h-13" />
              <path d="M15 6h6m-3 -3v6" />
            </svg>
            Add to cart</button>
        </div>

      </div>
    
    </div>
  );
};

export default Cards;