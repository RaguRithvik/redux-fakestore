import React from 'react';
import ReactDom from 'react-dom';
// import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'
import store from './redux/store';
import App from './App'
 
ReactDom.render(
    <Provider store={store}>
      <React.StrictMode>
       <App />
     </React.StrictMode>
   </Provider> ,document.getElementById('root'));