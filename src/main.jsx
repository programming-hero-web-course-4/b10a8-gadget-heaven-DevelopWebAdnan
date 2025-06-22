import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import GadgetDetail from './components/GadgetDetail/GadgetDetail';
import AddedGadgets from './components/AddedGadgets/AddedGadgets';
import Gadgets from './components/Gadgets/Gadgets';
import Categories from './components/Categories/Categories';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/gadgetsData.json'),
        children: [
          {
            path: '/',
            element: <Gadgets></Gadgets>,
            loader: () => fetch('/gadgetsData.json'),
          },
          {
            path: '/category/:category',
            element: <Gadgets></Gadgets>,
            loader: () => fetch('/gadgetsData.json'),
          },
        ],
      },
      {
        path: '/',
        element: <Categories></Categories>,
      },
      {
        path: 'gadgets/:product_id',
        element: <GadgetDetail></GadgetDetail>,
        loader: () => fetch('/gadgetsData.json'),
      },
      {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('../gadgetsData.json'),
        // children: [
        //   {
        //     path: 'addedGadgets',
        //     element: <AddedGadgets></AddedGadgets>,
        //     loader: () => fetch('gadgetsData.json'),
        //   },
        // ],
      },
      {
        path: 'addedGadgets',
        element: <AddedGadgets></AddedGadgets>,
        // loader: () => fetch('gadgetsData.json'),
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
