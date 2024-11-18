import React from "react";
import ReactDOM from "react-dom/client";
import Loginpage from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registration from "./pages/Registration";
import Homepage from "./pages/Home";
import Header from "./component/Header";
import ProtectedRouter from "./ProtectedRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  {
    path: "/header",
    element: <Header />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
