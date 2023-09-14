import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Upfront } from '../upFront';
import { ProductDetails } from '../productDetails';
import { CartDisplay } from '../displayComp';

export const App = () => {
    return (
        <div>
            <CartDisplay />
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Upfront} exact={true} />
                    <Route path="/product/:id" component={ProductDetails} exact={true} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}