import { FC, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES_NAMES } from "@/Router/routes-names";
import { LanguageSwitch, Modal, SubmitButton } from "@/Components";
import "./styles.scss";

const Header: FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleLogoClick = () => {
    if (location.pathname !== ROUTES_NAMES.HOME) setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleNavigate = () => {
    navigate(ROUTES_NAMES.HOME);
    setModalVisible(false);
  };

  return (
    <>
      {modalVisible && (
        <Modal>
          <h2 className="header-modal__caption">{t("leaveModalCaption")}</h2>
          <div className="header-modal__buttons-container">
            <SubmitButton
              caption={t("no")}
              onClick={handleModalClose}
              color="dismiss"
            />
            <SubmitButton
              caption={t("yes")}
              onClick={handleNavigate}
              color="submit"
            />
          </div>
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
