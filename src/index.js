import ReactDOM from "react-dom";
import { useState, useRef } from 'react';
import AddToCart from './addCart';

const App = () => {
    const [items, setState] = useState(0)
    const persistValue = useRef();

    if (items == 0) {
        persistValue.current = 0;
    }

    const additionToCart = () => {
        persistValue.current = persistValue.current + 1;
        setState(persistValue.current)
    }

    return (
        <div className="container">
            Hello ! This is a test output &nbsp;
            {items > 0 ? <sup>{items}</sup> : undefined}
            <br />
            <br />
            <AddToCart
                additionToCart={additionToCart}
            />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('reactApp'));