import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './app/App';
import * as serviceWorker from './serviceWorker';
import "./assets/css/style.tailwind.compiled.css";
import { store } from "./state-mgt/store";
import { loadFilms } from './state-mgt/actions';

declare global {
    interface Window { store: any; loadFilms: any }
}


window.store = store;
window.loadFilms = loadFilms;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
