import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Router } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './LayOut/MainLayout.jsx';
import Homepage from './Pages/Homepage/Homepage.jsx';
import Books from './Pages/BooksPage/Books.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "/books",
        element: <Books/>
      }
    ]
  },
 
]);

                             
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
