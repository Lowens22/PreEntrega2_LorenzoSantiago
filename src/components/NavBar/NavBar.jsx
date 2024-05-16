import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

export const NavBar = () => {
    return (
            <nav>
                <h3>Ecommerce</h3>
                <div>
                    <button>Celulares</button>
                    <button>tablets</button>
                    <button>Notebooks</button>
                </div>
                <CartWidget />
            </nav>
        )
}

export default NavBar
