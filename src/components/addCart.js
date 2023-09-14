import { useRef } from 'react'
import { useDispatch } from "react-redux"
import { addToCart } from '../actions/cartActions.js';

export default () => {
    const dispatch = useDispatch();
    const persistObject = useRef();

    if (persistObject.current == null) {
        persistObject.current = 0;
    }

    const additionToCart = () => {
        persistObject.current = persistObject.current + 1;
        fetch(`https://dummyjson.com/products/${persistObject.current}`).then((response) => {
            response.json().then((data) => {
                dispatch(addToCart(data.title));
            })
        });
    }

    return (
        <button
            onClick={additionToCart}
        >
            Add to cart
        </button>
    )
} 