import { FC } from "react";
import { HintButtonPropTypes } from "./types";
import { useTranslation } from "react-i18next";
import "./styles.scss";

const HintButton: FC<HintButtonPropTypes> = ({ id, disabled }) => {
  const { t } = useTranslation();
  return (
    <button disabled={disabled} className="hint-button">{`${t(
      "hint"
    )} ${id}`}</button>
  );
};

export default HintButton;
