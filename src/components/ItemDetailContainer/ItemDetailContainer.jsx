import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import { db } from '../../Config/FireBase'

const ItemDetailContainer = () => {    

    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {    

        const docRef = doc(db, "items", itemId);

        getDoc(docRef)
        .then(res => {
            setProduct(
                {...res.data(), id: res.id}
            );
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });

    },[itemId])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer