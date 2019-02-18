import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App.jsx';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './bootstrap/bootstrap.scss';
import './index.scss';

library.add(fab);
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
