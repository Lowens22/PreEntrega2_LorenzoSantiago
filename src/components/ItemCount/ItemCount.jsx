import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) =>{

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="quantity-control">
            <div className="quantity-control__buttons">
                <button className="quantity-control__button" onClick={decrement}>-</button>
                <h4 className="quantity-control__quantity">{quantity}</h4>
                <button className="quantity-control__button" onClick={increment}>+</button>
            </div>
            <div className="quantity-control__add">
                <button 
                    className="quantity-control__add-button" 
                    onClick={() => onAdd(quantity)} 
                    disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default ItemCount