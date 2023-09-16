import { useState, useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { OwnContext } from './context/ownContext';
import { CartDisplay } from './displayComp';
import AddToCart from './addCart';

export const ProductDetails = (props) => {
    const [fullsizeImage, setImage] = useState('');
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
                setImage(data.images[0]);
            });
        });
    }, [])

    return (
        <div>
            {/* <CartDisplay /> */}
            {fullsizeImage !== '' ? <img src={fullsizeImage} /> : 'Loading Image.....'}
            <br />
            <br />
            {/* <OwnContext.Provider value={{ ...persistData }}>
                <AddToCart />
            </OwnContext.Provider> */}
            <AddToCart {...persistData} />
        </div>
    )
}