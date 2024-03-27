import { FC } from "react";
import { SubmitButtonProps } from "./types";
import "./styles.scss";

const SubmitButton: FC<SubmitButtonProps> = ({
  caption,
  disabled = false,
  color = "submit",
  onClick,
}) => {
  const getColorStyles = () => {
    if (color === "dismiss") {
      return { backgroundColor: "#7f1d1d", color: "white" };
    } else if (color === "submit") {
      return { backgroundColor: "orange" };
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className="submit-button"
      style={getColorStyles()}
    >
      {caption}
    </button>
  );
};

export default SubmitButton;
