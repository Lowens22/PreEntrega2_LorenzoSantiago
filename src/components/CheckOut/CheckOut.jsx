import React, { useContext } from 'react'
import './CheckOut.css'
import { CartContext } from '../../Context/CartContext'
import { UserContext } from '../../Context/UserContext';
import { useNavigate, NavLink } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../Config/FireBase"

const CheckOut = () => {

    const { cart, calcQuantityPrice, clearCart  } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const { email, uid } = user;

    const dataUser = {
        uid: {uid},
        email:{email}
    }

    const buy = (data) =>{
        const order = {
            customer: dataUser,
            information: data,
            cart: cart,
            total:calcQuantityPrice()
        }
        
        console.log(order)
        const newBuy = collection(db, "orders");

        addDoc(newBuy, order);
        clearCart()
        navigate('/');
    }

    return (
        <div>
            <div className='Vuelve'>
                <NavLink to={`/cart`}>Volver</NavLink>
            </div>

            <div className='Container__checkout'>
                <div className="checkout">
                    <h2 className="checkout__title">checkout</h2>
                    <form className="checkout__form" onSubmit={handleSubmit(buy)}>
                        <div className="checkout__form-group">
                            
                            <div className='checkout__form-item'>
                                <label htmlFor="name" className="checkout__label">name</label>
                                <input type="name" id="name" className="checkout__input" placeholder="Enter your name" {...register("name")}/>
                            </div>

                            <div className='checkout__form-item'>
                                <label htmlFor="last name" className="checkout__label">last name</label>
                                <input type="last name" id="last name" className="checkout__input" placeholder="Enter your last name" {...register("last name")}/>
                            </div>

                            <div className='checkout__form-item'>
                                <label htmlFor="street" className="checkout__label">street</label>
                                <input type="street" id="street" className="checkout__input" placeholder="Ej: Oncativo" {...register("street")}/>
                            </div>

                            <div className='checkout__form-item'>
                                <label htmlFor="heignt" className="checkout__label">height</label>
                                <input type="height" id="height" className="checkout__input" placeholder="Ej: 624" {...register("height")}/>
                                </div>
                            
                            <div className='checkout__form-item'>
                                <label htmlFor="postal code" className="checkout__label">postal code</label>
                                <input type="postal code" id="postal code" className="checkout__input" placeholder="Ej: 3260" {...register("postal code")}/>
                            </div>
                        </div>
                        <button type="submit" className="checkout__button">Comprar</button>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};  


export default CheckOut