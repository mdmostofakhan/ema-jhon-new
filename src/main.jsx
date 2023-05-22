import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/shop/Shop.jsx';
import Home from './component/home/Home.jsx';
import Order from './component/order/Order.jsx';
import Inventory from './component/inventory/Inventory.jsx';
import Login from './component/login/Login.jsx';
import cartProductsLoader from './cartProductsLoader/cartProductsLoader.js';

const router = createBrowserRouter([
 {
  path: '/',
  element: <Home></Home>,
  children: [
    {
      path: '/',
      element: <Shop></Shop>
    },
    {
      path: 'orders',
      element: <Order></Order>,
      loader: cartProductsLoader
    },
    {
      path: 'inventory',
      element: <Inventory></Inventory>
    },
    {
      path: 'login',
      element: <Login></Login>
    }
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
