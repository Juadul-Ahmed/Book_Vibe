import { createBrowserRouter } from "react-router";
import MainLayout from "../LayOut/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import Books from "../Pages/BooksPage/Books";
import Error from "../Pages/ErrorPage/Error";

export const router = createBrowserRouter([
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
    ],
    errorElement: <Error/>
  },
 
]);