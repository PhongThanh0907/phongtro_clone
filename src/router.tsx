import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainTemplate from "./components/MainTemplate/MainTemplate";
import Home from "./pages/Public/Home/Home";
import Login from "./pages/Public/Login/Login";
import RoomForRent from "./pages/Public/RoomForRent/RoomForRent";

export const router = createBrowserRouter([
  {
    element: <MainTemplate />,
    path: "/",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/room-for-rent",
        element: <RoomForRent />,
      },
    ],
  },
]);
