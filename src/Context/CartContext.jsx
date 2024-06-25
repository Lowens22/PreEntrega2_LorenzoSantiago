import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children })=> {
    const [cart, setCart] = useState([])

    console.log(cart)

    const addItem = ( item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev,{...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        setCart(prevCart => prevCart.filter(prod => prod.id !== itemId));
    };

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const calcQuantity = () => {
        return cart.length;
    };

    const calcQuantityTotal = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const calcQuantityPrice = () => {
        return cart.reduce((acc, prod) => acc + (prod.price * prod.quantity), 0);
    };

    return(
        <CartContext.Provider value={{ cart, addItem, removeItem ,clearCart, calcQuantityTotal, calcQuantity, calcQuantityPrice}}>
            { children }
        </CartContext.Provider>
    )
}