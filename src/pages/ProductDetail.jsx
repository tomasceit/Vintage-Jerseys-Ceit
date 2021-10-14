import ItemDetail from "../components/ItemDetail/ItemDetail";
import LoadingIcon from "../components/LoadingIcon/LoadingIcon";
import * as React from "react";
import { useParams } from "react-router";
import "../containers/ItemsListContainer/ItemsListContainer.css";
import { getFirestore } from "../firebase";
import NotFound from "../pages/NotFound.jsx";

const ProductDetail = () => {
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    setLoading(true);

    const db = getFirestore();
    const productsCollection = db.collection("products");
    const product = productsCollection.doc(id);

    product
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.error("No se pudo encontrar el producto");
          setItem(undefined);
        } else {
          setItem({ id: doc.id, ...doc.data() });
        }
      })
      .catch()
      .finally(() => setLoading(false));
  }, [id]);



  if (loading) {
     return ( 
      <LoadingIcon />
    );
  } else {
    return (
      item !== undefined 
      ? <ItemDetail key={item.id} item={item} />
      : <NotFound />
    );
  };
};

export default ProductDetail;
