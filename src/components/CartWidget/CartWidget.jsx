import React from 'react'
import cart from '../../assets/cart.svg'

export const CartWidget = () => {
    return (
    <div>
        <img src={cart} alt='cart_widget'/>
        0
    </div>
    )
}

export default CartWidget