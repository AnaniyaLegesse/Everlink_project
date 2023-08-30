import React from "react";
import ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "./App";
import SingleCast from "./Pages/SingleCast";
import Front from "./Pages/Front.js";
import Login from "./Pages/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Front/>,
    },
    {
      path: "App",
      element: <App/>,
    },
    {
        path: "casts/:id",
        element: <SingleCast/>,
      },
      {
        path:"/login",
        element: <Login/>,
      }

  ]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);
