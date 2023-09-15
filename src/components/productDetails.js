import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
// import { addFullsizeImage } from "../actions/cartActions";
import AddToCart from './addCart';
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = (props) => {
    // const { fullsizeImage } = useSelector((state) => state.cart);
    // const dispatch = useDispatch();
    const [fullsizeImage, setImage] = useState('');
    const params = useParams();

    // console.log('props.match.params.id: ', props.match.params.id);
    console.log('props.match.params.id: ', params.id);
    console.log('fullsizeImage: ', fullsizeImage);
    console.log('ProductDetails_Props: ', props);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`).then((response) => {
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
            <AddToCart id={params.id} />
        </div>
    )
}