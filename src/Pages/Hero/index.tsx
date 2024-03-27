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
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
      >
        <h2 className="hero__title">{t("heroTitle")}</h2>
        <SubmitButton
          caption={t("heroBtn")}
          onClick={handleSubmit}
          color="submit"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default Hero;
