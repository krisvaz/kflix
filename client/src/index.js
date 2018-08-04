import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import { Provider } from 'react-redux';


const root = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}></Route>
        </Router>
    </Provider>
    , root);
registerServiceWorker();