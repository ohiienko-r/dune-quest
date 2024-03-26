import { FC } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const LanguageSwitch: FC = () => {
  const { i18n } = useTranslation();

  const handlechange = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ua");
    } else {
      i18n.changeLanguage("en");
    }
  };

  return (
    <div className="switcher">
      <span className="switcher__en">EN</span>
      <input
        type="checkbox"
        className="switcher__toggle"
        onChange={handlechange}
      />
      <span className="switcher__ua">UA</span>
    </div>
  );
};

export default LanguageSwitch;
