import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRiddles } from "@/Hooks";
import Root from "./rotues/Root";
import Error from "./rotues/Error";
import { ROUTES_NAMES } from "./routes-names";
import { Hero, Riddle } from "@/Pages";

const Router = () => {
  const { riddles } = useRiddles();

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
          element: (
            <Riddle
              image={riddles.first.image}
              text={riddles.first.text}
              answerFormat={riddles.first.answerFormat}
              nextRoute={riddles.first.nextStep}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
