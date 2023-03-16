import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { If } from "../../../../components/If";
import { useTimer } from "../../../../hooks/timer.hook";
import { setSpiesAction } from "../../../../store/game/game.actions";
import { calculateTime } from "../../../../utils/calculate-time.utils";
import { randomString } from "../../../../utils/random-string.util";
import { secondsToTimeString } from "../../../../utils/seconds-to-string.utils";
import { setSpies } from "../../../../utils/set-spies.utils";
import { createChannel } from "./utils/create-channel.utils";

export function PlayRoom() {
  // state management with redux
  const onlinegame = useSelector((store) => store.online);
  const gameSettings = useSelector((store) => store.user.gameSettings);
  const dispatch = useDispatch();
  // navigation
  const history = useNavigate();

  const playTime = calculateTime(gameSettings.playTime);

  const secondsToString = useMemo(() => {
    return secondsToTimeString(playTime);
  }, []);

  const timer = useTimer(playTime);
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    createChannel(onlinegame.room);
    const spies = setSpies();
    dispatch(setSpiesAction(spies));
  }, []);

  useEffect(() => {
    if (!timer.isDone) {
      timer.start();
    } else {
      history("/home");
    }
  }, []);

  useEffect(() => {
    const timeStr = secondsToString(timer.value);

    setTimeString(timeStr);
  }, [timer.value]);

  // create a channel that listens to subscribtions to channel then
  // if the count of users is bigger than player count in the room
  // else player is added to the play room we will show players by their name

  return (
    <div>
      <h1>{timeString}</h1>

      <If condition={onlinegame.players.length}>
        {onlinegame.players.map((player) => (
          <div key={randomString()}>{player.user}</div>
        ))}
      </If>
    </div>
  );
}
