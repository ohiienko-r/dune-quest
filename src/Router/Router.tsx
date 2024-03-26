import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./rotues/Root";
import Error from "./rotues/Error";

import { Hero, FirstRiddle } from "@/Pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/the_beginning",
        element: <FirstRiddle />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
