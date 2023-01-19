import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App";
import AppRedux from "./AppRedux";
import {Provider} from "react-redux";
import {store} from "./store";


ReactDOM.render(
    <Provider store={store}><AppRedux /></Provider>
    , document.getElementById('root')
);

