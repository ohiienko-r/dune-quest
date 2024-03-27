import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SubmitButton } from "@/Components";
import { RiddlePropTypes } from "./types";
import "./styles.scss";

const Riddle: FC<RiddlePropTypes> = ({
  image,
  text,
  answerFormat,
  hints,
  nextRoute,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(nextRoute);
  };

  return (
    <div className="riddle">
      <div className="riddle__container">
        <h2>{image}</h2>
        <div className="riddle__text-container">
          <p>{text}</p>
          <p>{answerFormat}</p>
        </div>
        <div>
          <input type="text" />
          <SubmitButton caption={t("sendBtn")} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Riddle;
