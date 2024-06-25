import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';

export const Cart = () => {
    const { cart, calcQuantityTotal, calcQuantityPrice, clearCart, removeItem } = useContext(CartContext);
    const { user } = useContext(UserContext);

    return (
        <section className="cart-section">
            <h1>Carrito de Compras</h1>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                cart.map((prod) => (
                    <article key={prod.id} className="cart-item">
                        <header className="cart-item-header">
                            <h2>{prod.name}</h2>
                        </header>
                        <div className="cart-item-details">
                            <p>Precio: ${prod.price}</p>
                            <p>Cantidad: {prod.quantity}</p>
                            <p>Total: ${prod.price * prod.quantity}</p>
                            <button onClick={() => removeItem(prod.id)}>x</button>
                        </div>
                    </article>
                ))
            )}

            <footer className="cart-footer">
                <h3>Cantidad Total de Artículos: {calcQuantityTotal()}</h3>
                <h3>Total a Pagar: ${calcQuantityPrice()}</h3>
                {cart.length === 0 ? (
                    <div></div>
                ) : (
                    <div>
                        <button className="clear-cart-button" onClick={() => clearCart()}>Vaciar carrito</button>
                        {user ? (
                            <Link to='/checkout' className='option'>Realizar Compra</Link>
                        ) : (
                            <div>Debes iniciar sesión para continuar</div>
                        )}
                    </div>
                )}
            </footer>
        </section>
    );
};

export default Cart;
