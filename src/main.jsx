import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Routes from "./routes/root";
import "./index.css";
import GuestSignUp from "./routes/guestSignUp.jsx";
import AdminSignUp from "./routes/adminSignUp.jsx";
import GuestLogIn from "./routes/guestLogin.jsx";
import GuestPage from "./routes/GuestPage.jsx";
import AdminPage from "./routes/adminPage.jsx";
import AdminLogIn from "./routes/adminLogin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
  },
  {
    path: "signup-guest",
    element: <GuestSignUp />,
  },
  {
    path: "signup-admin",
    element: <AdminSignUp />,
  },
  {
    path: "login-guest",
    element: <GuestLogIn />,
  },
  {
    path: "guest",
    element: <GuestPage />,
  },
  {
    path: "login-admin",
    element: <AdminLogIn />,
  },
  {
    path: "admin",
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
