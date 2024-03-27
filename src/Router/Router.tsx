import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./rotues/Root";
import Error from "./rotues/Error";
import { ROUTES_NAMES } from "./routes-names";
import { Hero, FirstRiddle } from "@/Pages";

const router = createBrowserRouter([
  {
    path: ROUTES_NAMES.HOME,
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: ROUTES_NAMES.FIRST_RIDDLE,
        element: <FirstRiddle />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
