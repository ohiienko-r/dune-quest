import { FC, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const LanguageSwitch: FC = () => {
  const { i18n } = useTranslation();
  const toggleRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!localStorage.getItem("preferedLanguage")) {
      localStorage.setItem("preferedLanguage", "en");
    }

    if (
      toggleRef.current &&
      localStorage.getItem("preferedLanguage") === "en"
    ) {
      toggleRef.current.checked = false;
    } else if (toggleRef.current) {
      toggleRef.current.checked = true;
    }
  }, []);

  useEffect(() => {
    toggleRef.current?.checked
      ? i18n.changeLanguage("ua")
      : i18n.changeLanguage("en");
  }, [toggleRef.current?.checked, i18n]);

  const handlechange = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("ua");
      localStorage.setItem("preferedLanguage", "ua");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("preferedLanguage", "en");
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
