// components

import { Counter } from "./components/Counter";
import { Menu } from "../../components/Menu";
import { Button } from "../../components/Button";

// actions

import {
  setUsernameAction,
  setUserSettingsAction,
} from "../../store/user/user.actions";

// hooks

import { useRef, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// css
import "./index.css";
import { Input } from "../../components/Input";

export function GameSettings() {
  // hooks
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  // game settings

  const [playerCount, setPlayerCount] = useState(0);
  const [playTime, setPlayTime] = useState(0);
  const [spiesCount, setSpiesCount] = useState(0);

  // user name

  const userName = useRef("");

  // handle username change

  const handleOnUsernameChange = (e) => {
    userName.current = e.target.value;
  };

  const gameSettings = useMemo(() => {
    return { playerCount, spiesCount, playTime: playTime + "hour" };
  }, [playTime, playerCount, spiesCount]);

  useEffect(() => {
    if (user.username) {
      userName.current = user.username;
    }
  }, []);

  const updateSettings = () => {
    if (userName.current) {
      if (userName.current.length) {
        localStorage.setItem("username", userName.current);
        dispatch(setUsernameAction(userName.current));
      }
    }
    dispatch(setUserSettingsAction(gameSettings));
  };
  return (
    <>
      <Menu></Menu>
      <h2 className="title">Settings</h2>
      <Counter
        title="Player Count"
        setter={setPlayerCount}
        minvalue={5}
        maxvalue={10}
      />
      <Counter
        title="Play Time"
        setter={setPlayTime}
        minvalue={1}
        maxvalue={3}
      />
      <Counter
        title="Maximum Number Of Spies"
        setter={setSpiesCount}
        minvalue={1}
        maxvalue={4}
      />
      <div>
        <h5>Username</h5>
        <Input
          placeholder={userName.current}
          onChange={handleOnUsernameChange}
          ref={userName}
        />
      </div>

      <Button onClick={updateSettings}>Update Settings</Button>
    </>
  );
}
