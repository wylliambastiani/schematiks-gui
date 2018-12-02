import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Store } from './store'
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>
  ,document.getElementById('root')
);

registerServiceWorker();
