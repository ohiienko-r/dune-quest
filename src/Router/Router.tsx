import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useRiddles } from "@/Hooks";
import Root from "./rotues/Root";
import Error from "./rotues/Error";
import { ROUTES_NAMES } from "./routes-names";
import { Hero, Introduction, Riddle } from "@/Pages";

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
          path: ROUTES_NAMES.INTRODUCTION,
          element: <Introduction />,
        },
        {
          path: ROUTES_NAMES.FIRST_RIDDLE,
          element: (
            <Riddle
              id={riddles.first.id}
              image={riddles.first.image}
              text={riddles.first.text}
              answerFormat={riddles.first.answerFormat}
              hints={riddles.first.hints}
              nextRoute={riddles.first.nextStep}
            />
          ),
        },
        {
          path: ROUTES_NAMES.SECOND_RIDDLE,
          element: (
            <Riddle
              id={riddles.second.id}
              image={riddles.second.image}
              text={riddles.second.text}
              answerFormat={riddles.second.answerFormat}
              hints={riddles.second.hints}
              nextRoute={riddles.second.nextStep}
            />
          ),
        },
        {
          path: ROUTES_NAMES.THIRD_RIDDLE,
          element: (
            <Riddle
              id={riddles.third.id}
              image={riddles.third.image}
              text={riddles.third.text}
              answerFormat={riddles.third.answerFormat}
              hints={riddles.third.hints}
              nextRoute={riddles.third.nextStep}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
