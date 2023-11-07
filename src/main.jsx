import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ErrorPage from './Components/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
       {
        path:"/",
        element:<Home></Home>
       },
       {
        path:"/service",
        element:<Service></Service>
        
       },
       {
        path:"/dashboard",
        
       },
       {
        path:"/login",
        element:<Login></Login>
       },
       {
        path:"/register",
        element:<Register></Register>
       }



    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
