import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { HintButtonWithTimerPropTypes } from "./types";
import "./styles.scss";

const HintButtonWithTimer: FC<HintButtonWithTimerPropTypes> = ({ id }) => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState<number>(id * 60);
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(timer);
          setDisabled(false);
          return 0;
        } else {
          return prevTimeLeft - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [id]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const getStringcolor = () => {
    if (timeLeft === 0) {
      return { color: "gray" };
    } else {
      return { color: "#ffb800" };
    }
  };

  return (
    <div className="hint">
      <button disabled={disabled} className="hint__button">{`${t(
        "hint"
      )} ${id}`}</button>
      <div className="hint__timer" style={getStringcolor()}>
        {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default HintButtonWithTimer;
