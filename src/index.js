import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import App from './App';
import { productsFetch } from './redux/productSlice';
import { subtotal } from './redux/cartSlice';

store.dispatch(productsFetch());
store.dispatch(subtotal());

const rootElement = document.getElementById('shop');
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
