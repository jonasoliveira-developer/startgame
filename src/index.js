import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ResponseProvider } from './Context/response';
import {CartProvider} from './Context/CartContex';

ReactDOM.render(
  <ResponseProvider>
    <CartProvider>
     <App />
    </CartProvider>
  </ResponseProvider>
  ,
  document.getElementById('root')
);

