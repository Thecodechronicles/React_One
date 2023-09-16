import { BrowserRouter, Route } from 'react-router-dom';
import { Upfront } from '../upFront';
import { ProductDetails } from '../productDetails';
import { CartDisplay } from '../displayComp';
import { ItemsList } from '../itemsList';

export const App = () => {
    return (
        <div>
            <CartDisplay />
            <BrowserRouter>
                <Route path="/" exact={true}>
                    <Upfront />
                </Route>
                <Route path="/product/:id">
                    <ProductDetails />
                </Route>
                <Route path="/items">
                    <ItemsList />
                </Route>
            </BrowserRouter>
        </div >
    )
}