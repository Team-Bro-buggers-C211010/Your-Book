import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootPages from './pages/RootPages/RootPages.jsx';
import Home from './pages/Home/Home.jsx';
import ListedBooks from './pages/ListedBooks/ListedBooks.jsx';
import PagesToRead from './pages/PagesToRead/PagesToRead.jsx';
import SingleBookDetails from './components/singleBookDetails/singleBookDetails'; // Correct component import name

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        loader: ()=> fetch('./API Data/BookDataApi.json'),
        element: <Home></Home>,
      },
      {
        path: "/list-books",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/read-posts",
        element: <PagesToRead></PagesToRead>
      },
      {
        path: "/booksId/:bookId",
        element: <SingleBookDetails></SingleBookDetails>,
        loader: ()=> fetch('./API Data/BookDataApi.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
