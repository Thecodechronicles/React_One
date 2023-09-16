import { useDispatch, useSelector } from "react-redux"
import { useContext } from "react";
import { addToCart, itemCount } from '../actions/cartActions.js';
import { OwnContext } from "./context/ownContext.js";
import { useHistory } from "react-router-dom"

export default (props) => {
    const dispatch = useDispatch();
    // const prodInfo = useContext(OwnContext);
    const prodInfo = props;
    const { items, count } = useSelector((state) => state.cart);
    const history = useHistory();

    console.log('prodInfo: ', prodInfo);

    const additionToCart = () => {
        // fetch(`https://dummyjson.com/products/${id}`).then((response) => {
        //     response.json().then((data) => {
        //         dispatch(addToCart(data.title));
        //     })
        // });
        dispatch(addToCart(prodInfo));
        dispatch(itemCount(items.length + 1))
    }

    return (
        <div>
            <button onClick={additionToCart}>
                Add to cart
            </button>
            <br />
            <br />
            <button onClick={() => {
                if (count > 0) {
                    history.push('/items');
                }
            }}>
                Go to Cart
            </button>
        </div>
    )
} 