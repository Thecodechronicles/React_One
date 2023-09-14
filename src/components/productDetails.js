import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
// import { addFullsizeImage } from "../actions/cartActions";
import AddToCart from './addCart';
import { useEffect } from "react";

export const ProductDetails = (props) => {
    // const { fullsizeImage } = useSelector((state) => state.cart);
    // const dispatch = useDispatch();
    const [fullsizeImage, setImage] = useState('');

    console.log('props.match.params.id: ', props.match.params.id);
    console.log('fullsizeImage: ', fullsizeImage);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${props.match.params.id}`).then((response) => {
            response.json().then((data) => {
                console.log('data.images[0]: ', data.images[0])
                // dispatch(addFullsizeImage(data.images[0]));
                setImage(data.images[0]);
            });
        });
    }, [])

    return (
        <div>
            {fullsizeImage !== '' ? <img src={fullsizeImage} /> : 'Loading Image.....'}
            <br />
            <br />
            <AddToCart id={props.match.params.id} />
        </div>
    )
}