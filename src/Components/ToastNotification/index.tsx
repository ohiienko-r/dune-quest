import { FC } from "react";
import { ToastNotificationPropTypes } from "./types";
import { AnimatePresence, motion } from "framer-motion";
import closeButton from "@/assets/close_button.svg";
import "./styles.scss";

const ToastNotification: FC<ToastNotificationPropTypes> = ({
  text,
  onClick,
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className="toast"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
      >
        <div className="toast__inner-container">
          <p className="toast__text">{text}</p>
          <button className="toast__close-button" onClick={onClick}>
            <img
              src={closeButton}
              alt="Close button"
              className="toast__close-button--image"
            />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ToastNotification;
