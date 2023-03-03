import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTimer } from "../../../../hooks/timer.hook";

import { secondsToTimeString } from "./utils/seconds-to-string.utils";
import "./index.css";

export const TimerScreen = () => {
  const gameSettings = useSelector((store) => store.user.gameSettings);
  const timer = useTimer(calculateTime(gameSettings.playTime));
  const playTimeIndex = useMemo(() => {
    return secondsToTimeString(calculateTime(gameSettings.playTime));
  }, []);
  const [playTimeString, setPlayTimeString] = useState("");
  const history = useNavigate();

  useEffect(() => {
    if (!timer.isDone) {
      timer.start();
    } else {
      history("/home");
    }
  }, []);

  useEffect(() => {
    let timestr = playTimeIndex(timer.value);

    setPlayTimeString(timestr);
  }, [timer.value]);

  return (
    <div className="time-screen">
      <h1>{playTimeString}</h1>
      <h3>Remaining Time</h3>
    </div>
  );
};

const calculateTime = (time) => {
  let number = time.slice(0, time.indexOf("h"));

  return Number(number) * 3600;
};
