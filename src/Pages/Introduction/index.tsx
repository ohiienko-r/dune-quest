import { FC } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTES_NAMES } from "@/Router/routes-names";
import { SubmitButton } from "@/Components";
import arakisImg from "@/assets/arakis.avif";
import "./styles.scss";

const Introduction: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(ROUTES_NAMES.FIRST_RIDDLE);
  };

  return (
    <motion.div
      className="introduction"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
    >
      <motion.div
        className="introduction__text-container"
        initial={{ y: -50 }}
        animate={{ y: 0, transition: { duration: 1 } }}
      >
        <div className="introduction__text-block">
          <p>{t("introduction1")}</p>
          <p>{t("introduction2")}</p>
          <p>{t("introduction3")}</p>
          <p>{t("introduction4")}</p>
        </div>
        <SubmitButton
          caption={t("toAdventures")}
          color="submit"
          onClick={handleSubmit}
        />
      </motion.div>
      <motion.img
        src={arakisImg}
        alt="Arakis"
        className="introduction__arakis-img"
        initial={{ y: 50 }}
        animate={{ y: 0, transition: { duration: 1 } }}
      />
    </motion.div>
  );
};

export default Introduction;
