import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { SubmitButton } from "@/Components";
import { ROUTES_NAMES } from "@/Router/routes-names";
import "./styles.scss";

const Hero: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(ROUTES_NAMES.FIRST_RIDDLE);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="hero__container">
          <div className="hero__text-container">
            <h2>{t("heroTitle")}</h2>
            <p>{t("heroSubTitle1")}</p>
            <b>{t("heroSubTitle2")}</b>
            <span>?</span>
            <p>{t("heroDescription")}</p>
          </div>
          <SubmitButton
            caption={t("heroBtn")}
            onClick={handleSubmit}
            color="submit"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Hero;
