import { BrowserRouter, Route } from 'react-router-dom';
import { Upfront } from '../upFront';
import { ProductDetails } from '../productDetails';
import { CartDisplay } from '../displayComp';

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
            </BrowserRouter>
        </div >
    )
}