import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import endspielImg from "@/assets/endspielImg.png";
import "./styles.scss";

const DemoEnd: FC = () => {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <motion.div
        className="riddle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="endspiel__container">
          <img src={endspielImg} alt="Riddle image" className="riddle__image" />
          <div className="riddle__text-container">
            <p>{t("endOfDemo1")}</p>
            <p>{t("endOfDemo2")}</p>
            <p>{t("endOfDemo3")}</p>
          </div>
          <Link
            to="https://ko-fi.com/virtualescaperooms"
            className="link-button"
          >
            {t("toPayment")}
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DemoEnd;
