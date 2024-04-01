import { FC } from "react";
import expandIco from "@/assets/expand-button.svg";
import { ExpandButtonPropTypes } from "./types";
import "./styles.scss";

const ExpandButton: FC<ExpandButtonPropTypes> = ({ onClick }) => {
  return (
    <button className="expand-button" onClick={onClick}>
      <img src={expandIco} alt="Expand" />
    </button>
  );
};

export default ExpandButton;
