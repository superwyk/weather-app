import React from 'react';
import ReactDOM from 'react-dom/client';
import fastclick from 'fastclick';
import App from './modules/index';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import './index.css';

if ('addEventListener' in document) {
    document.addEventListener(
        'DOMContentLoaded',
        function () {
            // eslint-disable-next-line
            // @ts-ignore
            fastclick?.attach(document.body);
        },
        false
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorker.unregister();
