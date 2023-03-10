import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Breakout from "./pages/breakout/Breakout";
import Flappy from "./pages/flappy_bird/Flappy";
import Homepage from "./pages/home/Homepage";

//routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/breakout",
    element: <Breakout />,
  },
  {
    path: "/flappy-bird",
    element: <Flappy />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
