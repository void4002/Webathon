import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Browse from './Pages/Browse';
import Articles from './Pages/Articles';
import Mealplanner from './Pages/Mealplanner';
import Foodtracker from './Pages/Foodtracker';
import Doctortips from './Pages/Doctortips';
import Lowcarb from './Pages/Lowcarb';
import Support from './Pages/Support';
import Login from './Login';
import User from './components/User';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "user",
    element: <User/>,
  },
  {
    path: "login",
    element: <Login/>,
  },
  {
    path: "browse",
    element: <Browse/>,
  },
  {
    path: "articles",
    element: <Articles/>,
  },
  {
    path: "mealplanner",
    element: <Mealplanner/>,
  },
  {
    path: "foodtracker",
    element: <Foodtracker/>,
  },
  {
    path: "doctortips",
    element: <Doctortips/>,
  },
  {
    path: "lowcarb",
    element: <Lowcarb/>,
  },
  {
    path: "support",
    element: <Support/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
