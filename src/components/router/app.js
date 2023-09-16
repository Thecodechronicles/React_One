import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Upfront } from '../upFront';
import { ProductDetails } from '../productDetails';
import { CartDisplay } from '../displayComp';

import { createContext } from 'react';
import { FileOne } from '../../playground/fileOne';
import { FileTwo } from '../../playground/fileTwo';

export const OwnContext = createContext();

export const App = () => {
    return (

        // <div>
        //     <OwnContext.Provider value={'Hello !'}>
        //         {/* <FileOne>
        //             <FileTwo />
        //         </FileOne> */}
        //         <FileOne />
        //     </OwnContext.Provider>

        //     <OwnContext.Provider value={'Hi !'}>
        //         <FileTwo />
        //     </OwnContext.Provider>
        // </div>


        // for react-router with hooks like 'useParams()', 'useNavigate() ie react-router-dom v5.2.0'
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

            {/* // for react-router without hooks i.e react-router-dom v4.2.2*/}
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