import { useSelector } from 'react-redux';
// import cartLogo from './images/shopping-cart-64.png'

export const CartDisplay = () => {
    const { items } = useSelector((state) => state.cart);
    console.log('items: ', items);

    return (
        <div className="CartDisplay">
            <h3>
                POMOSHO
            </h3>
            <div class="cartLogo">
                <img src='/images/shopping-cart-64.png' /> &nbsp;
                {items.length !== 0 ? <sup>{items.length}</sup> : undefined}
            </div>
        </div>
    )
}