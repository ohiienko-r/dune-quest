import { FC, PropsWithChildren } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.scss";

const Modal: FC<PropsWithChildren> = ({ children }) => {
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
