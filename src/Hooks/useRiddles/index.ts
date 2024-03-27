import { useTranslation } from "react-i18next";
import { ROUTES_NAMES } from "@/Router/routes-names";

const useRiddles = () => {
  const { t } = useTranslation();

  const riddles = {
    first: {
      id: 0,
      image: "Here must be an image",
      text: t("firstRiddleText"),
      answerFormat: t("firstRiddleAnswerFormat"),
      hints: ["", "", ""],
      nextStep: ROUTES_NAMES.SECOND_RIDDLE,
    },
    second: {
      id: 1,
      image: "Here must be an image",
      text: t("secondRiddleText"),
      answerFormat: t("secondRiddleAsnwerFormat"),
      hints: ["", "", ""],
      nextStep: ROUTES_NAMES.THIRD_RIDDLE,
    },
    third: {
      id: 2,
      image: "Here must be an image",
      text: t("thirdRiddleText"),
      answerFormat: t("thirdRiddleAnswerformat"),
      hints: ["", "", ""],
      nextStep: ROUTES_NAMES.END,
    },
  };

  return { riddles };
};

export default useRiddles;
