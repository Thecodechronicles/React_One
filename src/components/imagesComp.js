import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";
import { Link } from "react-router-dom";

export const Images = () => {
    const { imgArrProps } = useSelector((state) => state.cart);
    // const dispatch = useDispatch();

    // const updateCart = (event) => {

    //     // fetch(`https://dummyjson.com/products/${event.target.getAttribute('value')}`).then((response) => {
    //     //     response.json().then((data) => {
    //     //         dispatch(addToCart(data.title));
    //     //     })
    //     // });
    //     dispatch(addToCart(data.title));
    // }

    return (
        <div>
            {imgArrProps.length > 1 ? imgArrProps.map((image) => <Link key={image.id} to={`/product/${image.id}`}><img src={image.img} key={image.id} value={image.id} /></Link>) : 'Loading.....'}
        </div>
    )
}