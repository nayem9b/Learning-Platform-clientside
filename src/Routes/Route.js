import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import Checkout from "../Components/CheckOut/Checkout";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Courses from "../Components/Courses/Courses";
import Errorpage from "../Components/Error/Errorpage";
import Faq from "../Components/FAQ/Faq";
import Features from "../Components/Features/Features";
import Login from "../Components/Login/Login";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Register from "../Components/Register/Register";
import Root from "../Components/Root/Root";
import Home from "../Home/home/Home";
import AboutUs from "../Components/AboutUs/AboutUs";

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
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/features",
        element: <Features></Features>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses/:id/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          return fetch(
            `https://web-smasher-server.vercel.app/courses/${params.id}`
          );
        },
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://web-smasher-server.vercel.app/"),
      },
      {
        path: "courses/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://web-smasher-server.vercel.app/courses/${params.id}`
          );
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
