import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
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
    <div className="hero">
      <h2 className="hero__title">{t("heroTitle")}</h2>
      <SubmitButton caption={t("heroBtn")} onClick={handleSubmit} />
    </div>
  );
};

export default Hero;
