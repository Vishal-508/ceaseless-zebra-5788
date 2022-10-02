import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  theme  from "./Components/theme";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './Redux/store';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(Provider)
root.render(
    <ChakraProvider>

    <BrowserRouter>
<Provider store={store}>
<ColorModeScript initialColorMode={theme.config.initialColorMode} />
     <App />

</Provider>
</BrowserRouter>
    </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
