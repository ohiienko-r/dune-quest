import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ModalPropTypes } from "./types";
import "./styles.scss";

const Modal: FC<ModalPropTypes> = ({ children, borderColor = "default" }) => {
  const getBorderColor = () => {
    switch (borderColor) {
      case "default":
        return "#ffb800";
      case "error":
        return "#7f1d1d";
      case "success":
        return "green";
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        className="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.4 } }}
      >
        <motion.div
          className="modal__content-container"
          style={{ borderColor: getBorderColor() }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
