import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { SubmitButton, Modal } from "@/Components";
import { RiddlePropTypes } from "./types";
import "./styles.scss";

const Riddle: FC<RiddlePropTypes> = ({
  id,
  image,
  text,
  answerFormat,
  hints,
  nextRoute,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleNavigate = () => {
    navigate(nextRoute);
  };

  const handleSubmit = () => {
    setModalVisible(true);
  };
  console.log(`${id} + ${hints} +`);

  return (
    <>
      {modalVisible && (
        <Modal>
          <p>MODAL VISIBLE</p>
          <button
            onClick={() => {
              setModalVisible(false);
              handleNavigate();
            }}
          >
            X
          </button>
        </Modal>
      )}
      <div className="riddle">
        <div className="riddle__container">
          <h2>{image}</h2>
          <div className="riddle__text-container">
            <p>{text}</p>
            <p>{answerFormat}</p>
          </div>
          <div className="riddle__answer-input-container">
            <input type="text" className="riddle__answer-input" />
            <SubmitButton caption={t("sendBtn")} onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Riddle;
