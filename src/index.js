import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import configureStore from './redux/store'
import { Provider } from 'react-redux'


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
//Создает точку запуска проекта react 

root.render(

  <BrowserRouter>
    <Provider store={configureStore}>
      <App />
    </Provider>
  </BrowserRouter>);

