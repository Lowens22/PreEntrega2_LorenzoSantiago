import React from 'react';
import './Login.css';
import { useNavigate , NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Config/FireBase';

const Login = () => {
    // Inicializa react-hook-form
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    
    // Función onSubmit para manejar el envío del formulario
    const onSubmit = async (data) => {
        try {
            // Autenticación de Firebase para iniciar sesión con email y contraseña
            const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
            
            // Si la autenticación es exitosa, se registra la información del usuario
            console.log("User signed in: ", userCredential.user);
            navigate('/'); // Redirigir a la página principal después de iniciar sesión
        } catch (error) {
            // Si hay un error durante la autenticación, se registra el mensaje de error
            console.error("Error signing in: ", error);
        }
    };

    return (
        <div className='Container'>
            <div className="login">
                <h2 className="login__title">Login</h2>
                <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="login__form-group">
                        <label htmlFor="email" className="login__label">Email</label>
                        <input type="email" id="email" className="login__input" placeholder="example@mail.com" {...register("email")} />
                    </div>
                    <div className="login__form-group">
                        <label htmlFor="password" className="login__label">Password</label>
                        <input type="password" id="password" className="login__input" placeholder="Enter your password" {...register("password")} />
                    </div>
                    <button type="submit" className="login__button">Login</button>
                    <p className="login__text">Don't have an account? <NavLink to={`/register`}>Registrarse</NavLink></p>
                </form>
            </div>
        </div>
    );
};  

export default Login;
