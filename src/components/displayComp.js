import { useSelector } from 'react-redux';

export const CartDisplay = () => {
    const { items, count } = useSelector((state) => state.cart);
    console.log('items: ', items);

    return (
        <div className="CartDisplay">
            Shopping Cart &nbsp;
            {items.length !== 0 ? <sup>{count}</sup> : undefined}
        </div>
    )
}