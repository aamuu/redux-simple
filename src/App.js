import React from 'react';
import {Provider} from 'react-redux';
import Counter from "./components/Counter";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <Counter/>
            </div>
        </Provider>
    );
}

export default App;
