import { FC, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTES_NAMES } from "@/Router/routes-names";
import { LanguageSwitch, Modal, SubmitButton } from "@/Components";
import "./styles.scss";

const Header: FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname !== ROUTES_NAMES.HOME) setModalVisible(true);
  };

  const handleNavigate = () => {
    navigate(ROUTES_NAMES.HOME);
    setModalVisible(false);
  };

  return (
    <>
      {modalVisible && (
        <Modal>
          <h2>Are you sure you want to leave?</h2>
          <SubmitButton caption="Yes" onClick={handleNavigate} />
        </Modal>
      )}
      <header className="navigation">
        <div className="navigation__container">
          <h2 className="navigation__logo" onClick={handleLogoClick}>
            Dune Quest
          </h2>
          <LanguageSwitch />
        </div>
      </header>
    </>
  );
};

export default Header;
