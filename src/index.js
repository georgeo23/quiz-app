import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import Reducer from './Reducer/Reducer';


// const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            {/* <Provider store={store}> */}
                <App />    
            {/* </Provider> */}
        </BrowserRouter>
    </React.StrictMode>,
 document.getElementById("root"));
