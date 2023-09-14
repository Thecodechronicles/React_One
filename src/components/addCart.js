import { useRef } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from '../actions/cartActions.js';

export default (props) => {
    const dispatch = useDispatch();
    const persistObject = useRef();


    if (persistObject.current == null) {
        persistObject.current = 0;
    }

    const additionToCart = () => {
        persistObject.current = persistObject.current + 1;
        fetch(`https://dummyjson.com/products/${props.id}`).then((response) => {
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