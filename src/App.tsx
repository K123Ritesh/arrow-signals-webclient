
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./pages/notfound.tsx";
import LoginPage from "./pages/login.tsx";
import Home from "./pages/home.tsx";


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
  
  ]);

  return <RouterProvider router={router} />;
}

export default App;
