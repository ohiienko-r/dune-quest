import { FC } from "react";
import { SubmitButtonProps } from "./types";
import "./styles.scss";

const SubmitButton: FC<SubmitButtonProps> = ({
  caption,
  disabled = false,
  onClick,
}) => {
  return (
    <button disabled={disabled} onClick={onClick} className="submit-button">
      {caption}
    </button>
  );
};

export default SubmitButton;
