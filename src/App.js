import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Breakout from "./pages/breakout/Breakout";
import Flappy from "./pages/flappy_bird/Flappy";
import Homepage from "./pages/home/Homepage";
import BoxGame from "./pages/3D-Box-Game/BoxGame";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./utils/theme";

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
  {
    path: "/box-game",
    element: <BoxGame />,
  },
]);

function App() {
  return (<ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>)
}

export default App;
