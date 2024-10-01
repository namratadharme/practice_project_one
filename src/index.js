import React from "react";
import ReactDOM from "react-dom/client";
import Loginpage from "./M_pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./M_pages/Registration";
import Homepage from "./M_pages/Home";
import ProtectedRouter from "./ProtectedRouter";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRouter>
        <Homepage />
      </ProtectedRouter>
    ),
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
