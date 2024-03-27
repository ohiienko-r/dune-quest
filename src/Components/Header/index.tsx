import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES_NAMES } from "@/Router/routes-names";
import { LanguageSwitch } from "@/Components";
import "./styles.scss";

const Header: FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(ROUTES_NAMES.HOME);
  };

  return (
    <header className="navigation">
      <div className="navigation__container">
        <h2 className="navigation__logo" onClick={handleLogoClick}>
          Dune Quest
        </h2>
        <LanguageSwitch />
      </div>
    </header>
  );
};

export default Header;
