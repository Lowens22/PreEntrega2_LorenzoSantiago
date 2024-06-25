import './ItemListContainer.css';
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../Config/FireBase';

export const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [nameCategory, setNameCategory] = useState('');
    const { categoryId } = useParams();

    useEffect(() => {
        const itemsRef = collection(db, "items");
        let q;

        if (categoryId != null) {
            q = query(itemsRef, where("category", "==", categoryId));
        } else {
            q = itemsRef;
        }

        getDocs(q)
            .then((res) => {
                const productsData = res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id };
                });
                setProducts(productsData);

                if (categoryId != null && productsData.length > 0) {
                    setNameCategory(productsData[0].category);
                }
            })
            .catch((error) => {
                console.error("Error getting documents: ", error);
            });

    }, [categoryId]);

    return (
        <div className='item__list--container'>
            <h2>{categoryId != null ? nameCategory : 'Bienvenido'}</h2>
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
