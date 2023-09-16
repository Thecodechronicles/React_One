import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Images } from './imagesComp';
import { addImages } from '../actions/cartActions';
import { CartDisplay } from './displayComp';

export const Upfront = () => {
    const dispatch = useDispatch();
    const arr = [];

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((response) => {
            response.json().then((data) => {
                data.products.forEach((product) => {
                    arr.push({ id: product.id, img: product.thumbnail });

                });
                dispatch(addImages(arr));
            })
        });
    }, [])

    return (
        <div className="container">
            {/* <CartDisplay /> */}
            <Images />
            <br />
            <br />
        </div>
    )
}