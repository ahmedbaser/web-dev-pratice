import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/Users/Users.jsx';
import UserDetails from './components/UsersDetails/UsersDetails.jsx';
import PostDetails from './components/postDetails/postDetails.jsx';
import { getSearchParamsForLocation } from 'react-router-dom/dist/dom.js';
const router = createBrowserRouter([
  {
    path: '/',
    element:<Home></Home>,
    children: [
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
       element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element: <User></User>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`), 
        element: <UserDetails></UserDetails>
      }, {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts> </Posts>
      },
     {
      path:'/path/postId',
      loader: ({paramas}) => fetch(`https://jsonplaceholder.typicode.com/posts/${paramas.postId}`),
      element: <PostDetails></PostDetails>
     }
    ]
  },

  {
    path: 'header',
    element:<Header></Header>
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
