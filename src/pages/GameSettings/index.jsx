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

import { useRef, useState } from "react";
import { useCommonRoutes } from "../../hooks/commonroutes.hook";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { useEffect } from "react";

// css
import "./index.css";

export function GameSettings() {
  // hooks
  const commonRoutes = useCommonRoutes();
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
      <Menu>
        <div onClick={commonRoutes.home} className="menu-item">
          Home
        </div>
        <div onClick={commonRoutes.playOnline} className="menu-item">
          Play Online
        </div>
        <div onClick={commonRoutes.playOffline} className="menu-item">
          Play Offline
        </div>
      </Menu>
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
        <input
          placeholder={userName.current}
          className="standard-input"
          onChange={handleOnUsernameChange}
          ref={userName}
        />
      </div>

      <Button onClick={updateSettings}>Update Settings</Button>
    </>
  );
}
