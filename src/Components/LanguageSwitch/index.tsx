import { FC, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const LanguageSwitch: FC = () => {
  const { i18n } = useTranslation();
  const toggleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    toggleRef.current?.checked
      ? i18n.changeLanguage("ua")
      : i18n.changeLanguage("en");
  }, [toggleRef.current?.checked, i18n]);

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
        ref={toggleRef}
      />
      <span className="switcher__ua">UA</span>
    </div>
  );
};

export default LanguageSwitch;
