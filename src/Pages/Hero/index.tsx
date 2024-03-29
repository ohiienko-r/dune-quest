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

  const howToStartList = [
    { id: 1, text: t("howTo1") },
    { id: 2, text: t("howTo2") },
    { id: 3, text: t("howTo3") },
    { id: 4, text: t("howTo4") },
    { id: 5, text: t("howTo5") },
    { id: 6, text: t("howTo6") },
    { id: 7, text: t("howTo7") },
    { id: 8, text: t("howTo8") },
  ];

  const handleSubmit = () => {
    navigate(ROUTES_NAMES.FIRST_RIDDLE);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="hero__container">
          <div className="hero__text-container">
            <h2 className="hero__greeting-tile">{t("heroTitle")}</h2>
            <p>
              {t("heroSubTitle1")}
              <b>{t("heroSubTitle2")}</b>
              <span>?</span>
            </p>
            <p>{t("heroDescription")}</p>
          </div>
          <div className="hero__instructions-container">
            <h2 className="hero__instructions-title">{t("howToStart")}</h2>
            <ul className="hero__instructions-list">
              {howToStartList.map((line) => (
                <li key={line.id}>
                  <span className="hero__instructions-list__line-number">{`${line.id}.`}</span>
                  {line.text}
                </li>
              ))}
            </ul>
            <h2>{t("goodLuck")}</h2>
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
