import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Checkout from "../Components/CheckOut/Checkout";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import Errorpage from "../Components/Error/Errorpage";
import Login from "../Components/Login/Login";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
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
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("http://localhost:5000"),
      },
      {
        path: "courses/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/courses/${params.id}`);
        },
        element: <CourseDetails></CourseDetails>,
      },
    ],
  },
  {
    path: "*",
    element: <Errorpage></Errorpage>,
  },
]);

export default router;
