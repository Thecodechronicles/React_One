import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { OwnContext } from './context/ownContext';
import { CartDisplay } from './displayComp';
import AddToCart from './addCart';

export const ProductDetails = (props) => {
    const [{ title, fullsizeImage }, setProd] = useState({ title: '', fullsizeImage: '' });
    const params = useParams();
    const persistData = useRef();


    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`).then((response) => {
            response.json().then((data) => {
                // console.log('data.images[0]: ', data.images[0])
                persistData.image = data.images[0];
                persistData.id = data.id;
                persistData.title = data.title;
                persistData.price = data.price;
                persistData.description = data.description;
                setProd({ title: data.title, fullsizeImage: data.images[0] });
            });
        });
    }, [])

    return (
        <div>
            {/* <CartDisplay /> */}
            {title !== '' ? <h3>{title}</h3> : undefined}
            {fullsizeImage !== '' ? <img className="itemImage" src={fullsizeImage} /> : 'Loading Image.....'}
            <br />
            <br />
            {/* <OwnContext.Provider value={{ ...persistData }}>
                <AddToCart />
            </OwnContext.Provider> */}
            <AddToCart {...persistData} />
        </div>
    )
}