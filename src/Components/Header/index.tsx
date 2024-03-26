import { FC } from "react";
import { LanguageSwitch } from "@/Components";
import "./styles.scss";

const Header: FC = () => {
  return (
    <header className="navigation">
      <div className="navigation__container">
        <h2 className="navigation__logo">Dune Quest</h2>
        <LanguageSwitch />
      </div>
    </header>
  );
};

export default Header;
