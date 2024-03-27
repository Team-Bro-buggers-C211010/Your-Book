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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('../API_Data/BookDataApi.json'),
      },
      {
        path: "/list-books",
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('../API_Data/BookDataApi.json'),
      },
      {
        path: "/read-posts",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/booksId/:bookId",
        element: <SingleBookDetails></SingleBookDetails>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
