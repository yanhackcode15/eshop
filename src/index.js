import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home.js'
import Header from './Header.js'
import Login from './Login.js'
import Checkout from './Checkout.js'
import { StateProvider } from './StateProvider.js';
import reducer, {initialState} from './reducer.js'

// import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Header />
        <Home />
      </div>
    ),
  },
  {
    path: 'checkout',
    element: 
      <div>
        <Header />
        <Checkout />
      </div>,
  },
  {
    path: 'login',
    element: 
    <div>
      <Header />
      <Login />
    </div>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <StateProvider reducer={reducer} initialState={initialState}>
    <RouterProvider router={router} />
  </StateProvider>
  // </React.StrictMode>
);

//strictmode will render component twice in dev **** a little hard so i'm removing it

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
