// Profile.jsx
import React from 'react';
import './Profile.css';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../Context/UserContext';


const Profile = () => {
    const { user, logout } = useContext(UserContext);

    if (!user) {
        return <p>No estás autenticado</p>;
    }

    return (
        <div className="profile">
            <h2>Perfil de Usuario</h2>
            <p><strong>Email:</strong> {user.email}</p>
            {/* Puedes agregar más información del usuario aquí */}
            <button onClick={logout} className="navbar__logout-button">Logout</button>
        </div>
    );
};

export default Profile;
