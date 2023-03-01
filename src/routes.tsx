import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Project } from "./Pages/Project";
import { About } from "./Pages/About";
import App from "./App";
import { Skills } from "./Pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Skills /> },
      {
        path: "/projetos",
        element: <Project />,
      },
      {
        path: "/sobre-mim",
        element: <About />,
      },
    ],
  },
]);

export default router;
