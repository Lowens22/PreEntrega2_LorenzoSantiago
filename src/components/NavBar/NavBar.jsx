import React, { useState, useEffect, useContext } from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext'


export const NavBar = () => {
    const {user} = useContext(UserContext);

    return (
        <nav className="navbar">
            <Link className={"link"} to='/'>
                <h3 className="navbar__title">Ecommerce</h3>
            </Link>
            <div className="navbar__menu">
                <NavLink className={"link"} to={`/`}>Inicio</NavLink>
                <NavLink className={"link"} to={`/category/celular`}>Celulares</NavLink>
                <NavLink className={"link"} to={`/category/tablets`}>Tablets</NavLink>
                <NavLink className={"link"} to={`/category/notebook`}>Notebooks</NavLink>
            </div>
            {user ? (
                <div><Link className={"link"} to={'/profile'}>Tu Cuenta</Link></div>
            ) : (
                <Link className={"link"} to={'/login'}>Iniciar sesión</Link>
            )}
            <CartWidget className="navbar__cart-widget" />
        </nav>
    );
}

export default NavBar;
