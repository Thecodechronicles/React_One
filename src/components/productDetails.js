import { useState, useEffect } from 'react';
import AddToCart from './addCart';
import { useParams } from "react-router-dom";

export const ProductDetails = (props) => {
    const [fullsizeImage, setImage] = useState('');
    const params = useParams();

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`).then((response) => {
            response.json().then((data) => {
                console.log('data.images[0]: ', data.images[0])
                setImage(data.images[0]);
            });
        });
    }, [])

    return (
        <div>
            {fullsizeImage !== '' ? <img src={fullsizeImage} /> : 'Loading Image.....'}
            <br />
            <br />
            <AddToCart id={params.id} />
        </div>
    )
}