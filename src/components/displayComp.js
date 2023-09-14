
import { useSelector } from 'react-redux';

export const CartDisplay = () => {
    const { items } = useSelector((state) => state.cart);
    console.log('items: ', items);

    return (
        <div>
            Hello ! This is a test output &nbsp;
            {items !== '' ? <sup>{items}</sup> : undefined}
        </div>
    )
}