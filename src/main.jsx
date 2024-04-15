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
import AuthProviders from './Providers/AuthProviders.jsx';
import LogIn from './pages/LogIn/LogIn.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('../API_Data/BookDataApi.json'),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/list-books",
        element: <PrivateRoute><ListedBooks></ListedBooks></PrivateRoute>,
        loader: () => fetch('../API_Data/BookDataApi.json'),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/read-books-chart",
        element: <PrivateRoute><PagesToRead></PagesToRead></PrivateRoute>,
        loader: () => fetch('../API_Data/BookDataApi.json'),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/booksId/:bookId",
        element: <PrivateRoute><SingleBookDetails></SingleBookDetails></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/best-sellers",
        element: <PrivateRoute><BestSeller></BestSeller></PrivateRoute>,
        loader: () => fetch('../API_Data/BookDataApi.json'),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/book-carts",
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('../API_Data/BookDataApi.json'),
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/signin",
        element: <LogIn></LogIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
