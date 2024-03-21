import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import Home from "./pages/home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <SignupPage />,
      children: [],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/",
      element: <Home/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;