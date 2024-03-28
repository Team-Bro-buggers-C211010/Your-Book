import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import ListedBooks from './pages/ListedBooks/ListedBooks.jsx';
import PagesToRead from './pages/PagesToRead/PagesToRead.jsx';
import SingleBookDetails from './components/singleBookDetails/SingleBookDetails.jsx';
import OnlineBook from './pages/BestSeller/BestSeller.jsx';
import Cart from './pages/Cart/Cart';
import BestSeller from './pages/BestSeller/BestSeller.jsx';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('../API_Data/BookDataApi.json'),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/list-books",
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('../API_Data/BookDataApi.json'),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/read-books-chart",
        element: <PagesToRead></PagesToRead>,
        loader: ()=> fetch('../API_Data/BookDataApi.json'),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/booksId/:bookId",
        element: <SingleBookDetails></SingleBookDetails>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/best-sellers",
        element: <BestSeller></BestSeller>,
        loader: ()=> fetch('../API_Data/BookDataApi.json'),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/book-carts",
        element: <Cart></Cart>,
        loader: ()=> fetch('../API_Data/BookDataApi.json'),
        errorElement: <ErrorPage></ErrorPage>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
