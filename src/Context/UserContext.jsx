// UserContext.js
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../Config/FireBase';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
            setUser(userFirebase);
        });

        // Limpieza para evitar memory leaks
        return () => unsubscribe();
    }, [auth]);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate('/');
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
