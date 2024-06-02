import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
                <h3 className="navbar__title">Ecommerce</h3>
            </Link>
            <div className="navbar__menu">
                <NavLink to={`/`}>Inicio</NavLink>
                <NavLink to={`/category/celular`}>Celulares</NavLink>
                <NavLink to={`/category/tablets`}>Tablets</NavLink>
                <NavLink to={`/category/notebook`}>Notebooks</NavLink>
            </div>
            <CartWidget className="navbar__cart-widget" />
        </nav>
    );
}

export default NavBar
