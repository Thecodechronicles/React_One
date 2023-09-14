import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

export const Images = () => {
    const { imgArr } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const updateCart = (event) => {

        fetch(`https://dummyjson.com/products/${event.target.getAttribute('value')}`).then((response) => {
            response.json().then((data) => {
                dispatch(addToCart(data.title));
            })
        });
    }

    return (
        imgArr.map((image) => <img src={image.img} key={image.id} value={image.id} onClick={updateCart} />)
    )
}