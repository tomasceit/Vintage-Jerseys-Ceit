import * as React from "react";
import "./ItemsListContainer.css";
import ItemsList from "../../components/ItemsList/ItemsList.jsx";
import LoadingIcon from "../../components/LoadingIcon/LoadingIcon";
import { getFirestore } from "../../firebase";

const ItemsListContainer = ({ filtro }) => {
  const [loading, setLoading] = React.useState(true);
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const productsCollection =
      filtro !== undefined
        ? db.collection("products").where("category", "==", filtro)
        : db.collection("products");

    productsCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.error("No hay productos");
        } else {
          setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        }
      })
      .catch()
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtro]);

  if (loading) {
    return (
      <LoadingIcon />
    );
  } else {
    return (
      <section id="itemsContainer" className="myContainer">
        {products.length === 0 && filtro !== undefined ? (
          <h3 className="m-4 text-center">
            En este momento no tenemos productos de esta categoría
          </h3>
        ) : (
          !loading && <ItemsList prods={products} />
        )}
      </section>
    );
  }
};

export default ItemsListContainer;
