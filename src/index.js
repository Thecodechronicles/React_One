import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from './store/configureStore';
import { App } from './components/app';

const store = configureStore();

const Umbrella = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
}

ReactDOM.render(<Umbrella />, document.getElementById('reactApp'));