import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../Components/Error/Errorpage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Root from "../Components/Root/Root";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <Errorpage></Errorpage>,
  },
]);

export default router;
