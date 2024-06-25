import React, { useContext } from 'react'
import cartSvg from '../../assets/cart.svg'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export const CartWidget = () => {
    
    const { cart, calcQuantity } = useContext(CartContext);

    return (
    <Link className='cart' to="/cart">
        {cart.length === 0 ?(
            <div></div>
        ) : (<div>
            <img src={cartSvg} alt='cart_widget'/>
            { calcQuantity() }
        </div>) }
    </Link>
    );
}

export default CartWidget