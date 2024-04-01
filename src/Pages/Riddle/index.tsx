import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SubmitButton, Modal, Hint } from "@/Components";
import { getAnswer } from "@/Firebase";
import { RiddlePropTypes } from "./types";
import closeButton from "@/assets/close_button.svg";
import expandButton from "@/assets/expand-button.svg";
import "./styles.scss";
import { ROUTES_NAMES } from "@/Router/routes-names";

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
  const location = useLocation();
  const [errorModalVisible, setErrorModalVisible] = useState<boolean>(false);
  const [successModalvisible, setSuccessModalvisible] =
    useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [solved, setSolved] = useState<boolean>(false);
  const [imgExpanded, setImgExpanded] = useState<boolean>(false);

  useEffect(() => {
    const handleEnterPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        handleSubmit();
      }
    };

    document.addEventListener("keydown", handleEnterPress);

    return () => {
      document.removeEventListener("keydown", handleEnterPress);
    };
  });

  const handleSubmit = async () => {
    if (inputValue) {
      const correctAnswer = await getAnswer(id);
      if (inputValue.toUpperCase() === correctAnswer?.answer.toUpperCase()) {
        setSuccessModalvisible(true);
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
    setSuccessModalvisible(false);
    navigate(nextRoute);
    setSolved(true);
  };

  const handleImgExpand = () => {
    setImgExpanded(!imgExpanded);
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
            caption={t("nextRiddle")}
            onClick={handleSuccessModalSubmit}
            color="submit"
          />
        </Modal>
      )}
      {imgExpanded && (
        <motion.div
          className="expanded-img__container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <img src={image} alt="Expanded riddle image" />
          <img
            src={expandButton}
            className="riddle__expand-btn"
            onClick={handleImgExpand}
          />
        </motion.div>
      )}
      <AnimatePresence>
        <motion.div
          className="riddle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
        >
          <div className="riddle__container">
            <div className="riddle__img-container">
              <img src={image} alt="Riddle image" className="riddle__image" />
              {location.pathname === ROUTES_NAMES.THIRD_RIDDLE && (
                <img
                  src={expandButton}
                  className="riddle__expand-btn"
                  onClick={handleImgExpand}
                />
              )}
            </div>
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
                <div key={hint.id} className="riddle__hint-container">
                  <Hint
                    id={+hint.id}
                    key={+hint.id + (solved ? id : 0)}
                    hintText={hint.hint}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Riddle;
