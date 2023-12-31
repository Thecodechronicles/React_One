import { useDispatch } from "react-redux"
import { addToCart } from '../actions/cartActions.js';

export default (props) => {
    const dispatch = useDispatch();

    const additionToCart = () => {
        fetch(`https://dummyjson.com/products/${props.id}`).then((response) => {
            response.json().then((data) => {
                dispatch(addToCart(data.title));
            })
        });
    }

    return (
        <button onClick={additionToCart}>
            Add to cart
        </button>
    )
} 