import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store';

ReactDOM.render(
    // <React.StrictMode> 
    // StrictMode is nice to catch bad practices!
        <BrowserRouter>
            <Provider store={store}>
                <App />    
            </Provider>
        </BrowserRouter>,
    // </React.StrictMode>,
 document.getElementById("root"));
