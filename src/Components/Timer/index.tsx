import { FC, useState, useEffect } from "react";
import { TimerPropTypes } from "./types";

const Timer: FC<TimerPropTypes> = ({ id, onCountdownOver }) => {
  const [timeLeft, setTimeLeft] = useState<number>(id * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(timer);
          onCountdownOver();
          return 0;
        } else {
          return prevTimeLeft - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [id, onCountdownOver]);

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
      return { color: "orange" };
    }
  };

  return (
    <div className="timer" style={getStringcolor()}>
      {formatTime(timeLeft)}
    </div>
  );
};

export default Timer;
