import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  }
  ,{
    path:'/about',
    element:<h1>About page </h1>
  }
  ,{
    path:'/contact',
    element:<h1 className=''>contact page </h1>
  }
]);

const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);
