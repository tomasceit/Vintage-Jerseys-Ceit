import ItemDetail from "../components/ItemDetail/ItemDetail";
import * as React from "react";
import { useParams } from "react-router";
import '../containers/ItemsListContainer/ItemsListContainer.css'

const ProductDetail = () => {
  const [cargando, setCargando] = React.useState(false);
  const [item, setItem] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    setCargando(true);
    const url = `http://localhost:3001/products/${id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((producto) => setItem(producto))
      .finally(() => setCargando(false))
  }, [id]);

  return (
    <div className="myContainer">
      {cargando && (<div className="d-flex flex-column loading"><p>Loading...</p> <div className="lds-roller"><div /><div /><div /><div /><div /><div /><div /><div /></div></div>)}
      {!cargando && (item !== undefined ? (
        <ItemDetail key={item.id} item={item} />
      ) : (
        <h3 className="text-center">'Ese producto no existe :('</h3>
      ))}
    </div>
  );
};

export default ProductDetail;