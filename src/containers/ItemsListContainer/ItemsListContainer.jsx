import * as React from "react";
import "./ItemsListContainer.css";
import ItemsList from "../../components/ItemsList/ItemsList.jsx";

const ItemsListContainer = ({ filtro }) => {
  const [cargando, setCargando] = React.useState(false);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setCargando(true);
    fetch(`http://localhost:3001/products`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((result) => {
        filtro !== undefined || null
          ? setProducts(result.filter((result) => result.category === filtro))
          : setProducts(result);
      })
      .catch(() => console.log("Salio todo mal."))
      .finally(() => setCargando(false));
  }, [filtro]);

  if (cargando) {
    return (
      <div className="d-flex flex-column loading">
        <p>Loading...</p>{" "}
        <div className="lds-roller"><div /><div /><div /><div /><div /><div /><div /><div /></div>
      </div>
    );
  } else {
    return (
      <section id="itemsContainer" className="myContainer">
        {products.length === 0 && filtro !== undefined 
          ? <h3 className="m-2 text-center">En este momento no tenemos productos de esta categoría</h3>
          : !cargando && <ItemsList prods={products} />
        }
      </section>
    );
  }
};

export default ItemsListContainer;
