import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SubmitButton, Modal } from "@/Components";
import { getAnswer } from "@/Firebase";
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
    getAnswer(id);
  };

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
              <input type="text" className="riddle__answer-input" />
              <SubmitButton
                caption={t("sendBtn")}
                onClick={handleSubmit}
                color="submit"
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
