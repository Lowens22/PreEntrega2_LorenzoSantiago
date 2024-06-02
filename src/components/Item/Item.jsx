import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const Product = ({ id, name, price, category, img, stock, description }) => {
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
                <p className="item-description">
                    {description}
                </p>
            </section>
            <footer className="item-footer">
                <Link to={`/item/${id}`} className="item-link">Ver detalles</Link>
            </footer>
        </article>
    )
}

export default Product
