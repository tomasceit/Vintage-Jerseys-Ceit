import * as React from 'react';
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
                (filtro !== undefined || null)
                    ? setProducts(result.filter(result => result.category === filtro))
                    : setProducts(result);
            })
            .catch(() => console.log('Salio todo mal.'))
            .finally(() => setCargando(false))
    }, [filtro]);

    return (
        <section id="itemsContainer" className="myContainer">
            {cargando && (<div className="d-flex flex-column loading"><p>Loading...</p> <div className="lds-roller"><div /><div /><div /><div /><div /><div /><div /><div /></div></div>)}
            {!cargando && <ItemsList prods={products} />}
        </section>);
}

export default ItemsListContainer;