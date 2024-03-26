import { FC } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const FirstRiddle: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="riddle">
      <div className="riddle__container">
        <h2>Here must be an Image</h2>
        <div className="riddle__text-container">
          <p>{t("firstRiddleText")}</p>
          <p>{t("firstRiddleAnswerFormat")}</p>
        </div>
        <div>
          <input type="text" />
          <button>{t("sendBtn")}</button>
        </div>
      </div>
    </div>
  );
};

export default FirstRiddle;
