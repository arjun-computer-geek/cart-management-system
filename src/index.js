import react from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CartProvider } from './Cart-Context';


ReactDom.render(
    <BrowserRouter>
    <CartProvider>
        <App />
    </CartProvider>
    </BrowserRouter>
    , 
    document.getElementById("root"))