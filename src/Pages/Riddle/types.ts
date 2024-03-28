import { ROUTES_NAMES } from "@/Router/routes-names";

export type RiddlePropTypes = {
  id: number;
  image: string;
  text: string;
  answerFormat: string;
  hints: {
    id: string;
    hint: string;
  }[];
  nextRoute: (typeof ROUTES_NAMES)[keyof typeof ROUTES_NAMES];
};
