// hooks
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// components
import { If } from "../../components/If";
import { Else } from "../../components/Else";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";
import { CitizenScreen } from "./components/CitizenScreen";
import { SpyScreen } from "./components/SpyScreen";
import { MidScreen } from "./components/MidScreen";
// actions
import {
  setKeywordAction,
  setSpiesAction,
} from "../../store/game/game.actions";
// utils
import { selectKeyword } from "../../utils/select-key-word.utils";
import { setSpies } from "../../utils/set-spies.utils";
import { TimerScreen } from "./components/TimerScreen";

export function PlayOffline() {
  const game = useSelector((store) => store.game);
  const gameSettings = useSelector((store) => store.user.gameSettings);
  const dispatch = useDispatch();
  const [midScreen, setMidScreen] = useState(true);
  const [playerScreen, setPlayerScreen] = useState(0);
  const [isSpy, setIsSpy] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const spies = setSpies();
    dispatch(setSpiesAction(spies));
    const keyword = selectKeyword();
    dispatch(setKeywordAction(keyword));
  }, []);

  useEffect(() => {
    if (game.spies.includes(playerScreen)) {
      setIsSpy(true);
    } else {
      setIsSpy(false);
    }

    if (playerScreen === gameSettings.playerCount) {
      setIsFinished(true);
    }
  }, [playerScreen, game]);

  const handleOnClickNext = () => {
    changeMidScreenStatus();
    if (!midScreen) {
      if (playerScreen < gameSettings.playerCount) {
        setPlayerScreen((playerScreen) => playerScreen + 1);
      }
    }
  };
  console.log(playerScreen);
  const changeMidScreenStatus = () => {
    if (!midScreen) {
      setMidScreen(true);
    } else {
      setMidScreen(false);
    }
  };

  return (
    <>
      <Menu />
      <If condition={!isFinished}>
        <If condition={!midScreen}>
          <If condition={!isSpy}>
            <CitizenScreen keyWord={game.keyWord.toUpperCase()} />
          </If>
          <Else condition={!isSpy}>
            <SpyScreen />
          </Else>
        </If>
        <Else condition={!midScreen}>
          <MidScreen index={playerScreen} />
        </Else>
        <Button onClick={handleOnClickNext}>Next</Button>
      </If>
      <Else condition={!isFinished}>
        <TimerScreen />
      </Else>
    </>
  );
}
