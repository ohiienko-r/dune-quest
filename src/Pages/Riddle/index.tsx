import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SubmitButton, Modal } from "@/Components";
import { getAnswer } from "@/Firebase";
import { RiddlePropTypes } from "./types";
import closeButton from "../../assets/close_button.svg";
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
  const [errorModalVisible, setErrorModalVisible] = useState<boolean>(false);
  const [successModalvisible, setSuccessModalVisible] =
    useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = async () => {
    if (inputValue) {
      const correctAnswer = await getAnswer(id);
      if (inputValue.toUpperCase() === correctAnswer?.answer.toUpperCase()) {
        setSuccessModalVisible(true);
      } else {
        setErrorModalVisible(true);
      }
      setInputValue("");
    }
  };

  const handleErorModalClose = () => {
    setErrorModalVisible(false);
  };

  const handleSuccessModalSubmit = () => {
    setSuccessModalVisible(false);
    navigate(nextRoute);
  };

  return (
    <>
      {errorModalVisible && (
        <Modal borderColor="error">
          <div className="error-modal">
            <h2 className="modal__text">{t("wrongAnswer")}</h2>
            <img
              src={closeButton}
              alt="Close Button"
              className="error-modal__close-button"
              onClick={handleErorModalClose}
            />
          </div>
        </Modal>
      )}
      {successModalvisible && (
        <Modal borderColor="success">
          <h2 className="modal__text">{t("correctAnswer")}</h2>
          <SubmitButton
            caption="Next riddle"
            onClick={handleSuccessModalSubmit}
            color="submit"
          />
        </Modal>
      )}
      <AnimatePresence>
        <motion.div
          className="riddle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="riddle__container">
            <h2>{image}</h2>
            <div className="riddle__text-container">
              <p>{text}</p>
              <p>{answerFormat}</p>
            </div>
            <div className="riddle__answer-input-container">
              <input
                type="text"
                className="riddle__answer-input"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <SubmitButton
                caption={t("sendBtn")}
                onClick={handleSubmit}
                color="submit"
                disabled={!inputValue}
              />
            </div>
            <div className="riddle__hints-container">
              {hints.map((hint) => (
                <p key={hint.id} className="riddle__hint-button">{`${t(
                  "hint"
                )} ${hint.id}`}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Riddle;
