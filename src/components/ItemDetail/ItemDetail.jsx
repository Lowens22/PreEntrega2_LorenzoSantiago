import React, { useContext } from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({ id, name,  price, category , img ,stock, description }) => {
    
    const [quantityAdded, setquantityAdded] = useState(0)
    
    const { addItem } = useContext(CartContext)

    const hadleOnAdd = (quantity) => {
        setquantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    
    return (
        <article className="item__detail">
            <picture className="item__detail-picture">
                <img className="item__detail-image" src={img} alt={name} />
            </picture>
            <div className="item__detail-content">
                <header className="item__detail-header">
                    <h2 className="item__detail-title">{name}</h2>
                </header>
                <section className="item__detail-details">
                    <p className="item__detail-price">
                        Precio: {price} <b>USD</b>
                    </p>
                    <p className="item__detail-stock">
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer className="item__detail-footer">
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className='Option'> Terminar compra</Link>
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd= {hadleOnAdd} />
                        )
                    }
                </footer>
            </div>
        </article>
    );
}

export default ItemDetail
