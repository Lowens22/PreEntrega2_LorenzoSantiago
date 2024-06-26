import React from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, NavLink } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit } = useForm();
    const auth = getAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
            console.log('User registered: ', userCredential.user);
            navigate('/'); // Redirigir a la página principal después de registrar
        } catch (error) {
            console.error('Error registering: ', error.message);
        }
    };


    return (
        <div className='container'>
            <div className="register">
                <h2 className="register__title">Register</h2>
                <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="register__form-group">
                        <label htmlFor="email" className="register__label">Email</label>
                        <input type="email" id="email" className="register__input" placeholder="example@mail.com" {...register("email", { required: true })} />
                    </div>
                    <div className="register__form-group">
                        <label htmlFor="password" className="register__label">Password</label>
                        <input type="password" id="password" className="register__input" minLength={6} placeholder="Enter your password" {...register("password", { required: true })}/>
                    </div>
                    <button type="submit" className="register__button">Register</button>
                    <p className="register__text">Already have an account? <NavLink to={`/login`}>Log In</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Register;
