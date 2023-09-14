import AddToCart from './addCart';
import { CartDisplay } from './displayComp';
import { Images } from './imagesComp';
import { useEffect, useRef } from 'react';
import { addToCart, addImages } from '../actions/cartActions';
import { useDispatch } from 'react-redux';

export const Upfront = () => {
    const dispatch = useDispatch();
    // const persistArr = useRef();
    const arr = [];

    // if (persistArr.current == null) {
    //     persistArr.current = [];
    // }

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((response) => {
            response.json().then((data) => {
                data.products.forEach((product) => {
                    // persistArr.current.push({ id: product.id, img: product.thumbnail });
                    arr.push({ id: product.id, img: product.thumbnail });

                });
                // dispatch(addImages(persistArr.current));
                dispatch(addImages(arr));
                // dispatch(addToCart(data.products[0].brand));
            })
        });
    }, [])

    return (
        <div className="container">
            {/* <CartDisplay /> */}
            <Images />
            <br />
            <br />
            {/* <AddToCart /> */}
        </div>
    )
}