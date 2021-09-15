import "./ItemsListContainer.css";
import ItemsList from "../ItemsList/ItemsList.js";

const ItemsListContainer = ({ nombre }) => {
    return (
        <section id="itemsContainer">
            <h2>Bienvenid@ <span>{nombre}</span></h2>
            <ItemsList />
        </section>);
}

export default ItemsListContainer;