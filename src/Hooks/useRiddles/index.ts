import { useTranslation } from "react-i18next";
import { ROUTES_NAMES } from "@/Router/routes-names";
import firstRiddleImg from "@/assets/first_riddle.png";

const useRiddles = () => {
  const { t } = useTranslation();

  const riddles = {
    first: {
      id: 0,
      image: firstRiddleImg,
      text: t("firstRiddleText"),
      answerFormat: t("firstRiddleAnswerFormat"),
      hints: [
        { id: "1", hint: t("hint11") },
        {
          id: "2",
          hint: t("hint12"),
        },
        { id: "3", hint: t("hint13") },
      ],
      nextStep: ROUTES_NAMES.SECOND_RIDDLE,
    },
    second: {
      id: 1,
      image: "Here must be an image",
      text: t("secondRiddleText"),
      answerFormat: t("secondRiddleAsnwerFormat"),
      hints: [
        { id: "1", hint: t("hint21") },
        {
          id: "2",
          hint: t("hint22"),
        },
        { id: "3", hint: t("hint23") },
      ],
      nextStep: ROUTES_NAMES.THIRD_RIDDLE,
    },
    third: {
      id: 2,
      image: "Here must be an image",
      text: t("thirdRiddleText"),
      answerFormat: t("thirdRiddleAnswerformat"),
      hints: [
        { id: "1", hint: t("hint31") },
        {
          id: "2",
          hint: t("hint32"),
        },
        { id: "3", hint: t("hint33") },
      ],
      nextStep: ROUTES_NAMES.END,
    },
  };

  return { riddles };
};

export default useRiddles;
