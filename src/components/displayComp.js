
import { useSelector } from 'react-redux';

export const CartDisplay = () => {
    const { items } = useSelector((state) => state.cart);
    console.log('items: ', items);

    return (
        <div className="CartDisplay">
            Shopping Cart &nbsp;
            {items !== 0 ? <sup>{items}</sup> : undefined}
        </div>
    )
}