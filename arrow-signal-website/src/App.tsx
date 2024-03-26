
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./pages/notfound.tsx";
import LoginPage from "./pages/login.tsx";
import Home from "./pages/home.tsx";
import SignupPage from "./pages/signup.tsx";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      children: [],
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/signup",
      element: <SignupPage />
    },
  
  ]);

  return <RouterProvider router={router} />;
}

export default App;
