import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App'; //exercise 1.1
//import App from './exercises/exercise1.2';
//import App from './exercises/exercise1.3';
//import App from './exercises/exercise2.1';
//import App from './exercises/exercise2.2.js';
//import App from './exercises/exercise2.3.js';
//import App from './exercises/exercise4.1.js';
//import App from './exercises/exercise4.2.js';
//import App from './exercises/exercise4.3.js';
//import App from './exercises/exercise5.1.js';
//import App from './exercises/exercise5.2.js';
//import App from './exercises/exercise5.3.js';
//import App from './exercises/exercise6.1.js';
//import App from './exercises/exercise6.2.js';
//import App from './exercises/exercise6.3.js';
//import App from './exercises/exercise7.1.js';
import App from './exercises/exercise7.2.js';
//import App from './exercises/exercise7.3.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
