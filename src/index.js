import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home'
import Header from './Header'
import Checkout from './Checkout'
import { StateProvider } from './StateProvider';
import reducer, {initialState} from './reducer'

// import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Home />
      </div>
    ),
  },
  {
    path: "checkout",
    element: 
      <div>
        <Header />
        <Checkout />
      </div>,
  },
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
