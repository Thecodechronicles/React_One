import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Upfront } from '../upFront';
import { ProductDetails } from '../productDetails';
import { CartDisplay } from '../displayComp';

import { createContext } from 'react';
import { FileOne } from './fileOne';
import { FileTwo } from './fileTwo';

export const OwnContext = createContext();

export const App = () => {
    return (

        // <div>
        //     <OwnContext.Provider value={'Hello !'}>
        //         <FileOne />
        //     </OwnContext.Provider>

        //     <OwnContext.Provider value={'Hi'}>
        //         <FileTwo />
        //     </OwnContext.Provider>
        // </div>


        // for react-router with hooks like 'useParams()', 'useNavigate()'
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

            {/* <CartDisplay />
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Upfront} exact={true} />
                    <Route path="/product/:id" component={ProductDetails} exact={true} />
                </Switch>
            </BrowserRouter> */}
        </div >
    )
}