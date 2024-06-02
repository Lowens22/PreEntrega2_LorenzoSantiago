import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, name,  price, category , img ,stock, description }) => {
    return (
        <article className="item">
            <picture className="item-picture">
                <img className="item-image" src={img} alt={name} />
            </picture>
            <header className="item-header">
                <h2 className="item-title">{name}</h2>
            </header>
            <section className="item-details">
                <p className="item-price">
                    Precio: {price} <b>USD</b>
                </p>
                <p className="item-stock">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="item-footer">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail
