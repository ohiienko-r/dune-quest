import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./styles.scss";

const Hero: FC = () => {
  const { t } = useTranslation();

  return (
    <div className="hero">
      <h2 className="hero__title">{t("heroTitle")}</h2>
      <Link className="hero__button" to={"the_beginning"}>
        {t("heroBtn")}
      </Link>
    </div>
  );
};

export default Hero;
