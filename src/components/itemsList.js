import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../actions/cartActions";
import { itemCount } from "../actions/cartActions";

export const ItemsList = () => {
    const { items } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    console.log('itemsArr: ', items)

    return (
        <div>
            {
                items.length > 0 ? items.map((item) => (
                    <div>
                        {/* {item.id} */}
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <img style={{ padding: '0px' }} src={item.image} />
                        <p>INR {item.price}</p>
                        <button onClick={() => {
                            dispatch(removeItem(items, item.id));
                            // dispatch(itemCount(items.length - 1));
                        }}>
                            Remove
                        </button>
                    </div>
                )) : <div style={{ padding: '0px 155px', lineHeight: '25px', fontSize: '21px' }}><br /><br />Congrats ! Mr. Harry Potter, Your <span style={{ fontWeight: 'bold' }}>cart</span> has worn an invisibility cloak..... coz no one can see anything :) </div>
            }
            <br />
        </div >
    )
}