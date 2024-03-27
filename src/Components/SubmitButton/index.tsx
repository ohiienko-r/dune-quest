import { FC } from "react";
import { SubmitButtonProps } from "./types";
import "./styles.scss";

const SubmitButton: FC<SubmitButtonProps> = ({
  caption,
  disabled = false,
  color = "#ffa500",
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="submit-button"
      style={
        color !== "#ffa500"
          ? { backgroundColor: color, color: "white" }
          : { backgroundColor: color }
      }
    >
      {caption}
    </button>
  );
};

export default SubmitButton;
