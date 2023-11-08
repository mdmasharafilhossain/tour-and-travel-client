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
import AuthProviders from './Components/AuthProviders/AuthProviders';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

import AddService from './Components/AddService/AddService';
import MySchedule from './Components/MySchedule/MySchedule';
import SerV from './Components/SerV/SerV';
import ServiceD from './Components/ServiceD/ServiceD';

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
       },
       {
        path:"/serviceDetails/:_id",
        element:<ServiceDetails></ServiceDetails>,
        loader:()=> fetch('http://localhost:5000/service')
       },
       {
             path:"service/serviceDetails/service/:_id",
             element:<ServiceD></ServiceD>,
             loader:()=> fetch('http://localhost:5000/service')
       },
      //  {
      //   path:"/MyService",
      //   element:<Myservice></Myservice>,
      //   loader:()=> fetch('http://localhost:5000/service')
      //  },
       {
        path:"/AddService",
        element:<AddService></AddService>
       },
       {
        path:"/MySchedules",
        element:<MySchedule></MySchedule>
       }



    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders><RouterProvider router={router} /></AuthProviders>
  </React.StrictMode>,
)
