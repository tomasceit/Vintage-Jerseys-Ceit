import * as React from 'react';
import "./ItemCount.css";

const ItemCount = ({ stock, initial}) => {

    const [itemNumber, setItemNumber] = React.useState(initial)

    const restaItem = () => {
        if (itemNumber > initial) setItemNumber((prevState) => prevState - 1);
    }
    const sumaItem = () => {
        if (itemNumber < stock) setItemNumber((prevState) => prevState + 1);
    }
    return (
        <div id='itemCounter' className='d-flex'>
            <button type='button' className='operations' onClick={restaItem}>-</button>
            <button type='button'>{itemNumber}</button>
            <button type='button' className='operations' onClick={sumaItem}>+</button>
        </div>
    )
}

export default ItemCount