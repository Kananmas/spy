import { useSelector } from "react-redux";

import { Input } from "../../../../components/Input";
import { Button } from "../../../../components/Button";

import "./index.css";
import { useState } from "react";
import { createRoom } from "./utils/create-room.utils";
import { setSpies } from "../../../../utils/set-spies.utils";

export function RoomCreator(props) {
  const gameSettings = useSelector((store) => store.user.gameSettings);
  const [name, setName] = useState("");
  const [playerCount, setPlayerCount] = useState(gameSettings.playerCount);
  const [spiesCount, setSpiesCount] = useState(gameSettings.spiesCount);
  const [playTime, setPlayTime] = useState(gameSettings.playTime);

  // console.log(
  //   gameSettings.playTime,
  //   gameSettings.spiesCount,
  //   gameSettings.playerCount
  // );

  const OnClickCreateRoom = () => {
    const data = {
      id: Math.floor(Math.random() * 1000) * Math.floor(Math.random() * 1000),
      created_at: new Date(),
      name,
      player_count: playerCount,
      spies_count: spiesCount,
      spies: setSpies(),
      time: playTime,
      started: false,
    };

    createRoom(data, props.setter);
    props.handler();
  };

  const HandleOnChangeName = (e) => {
    setName(e.target.value);
  };

  const HandleOnChangePlayerCount = (e) => {
    setPlayerCount(e.target.value);
  };

  const HandleOnChangeSpiesCount = (e) => {
    setSpiesCount(e.target.value);
  };

  const HandleChangePlayTime = (e) => {
    setPlayTime(e.target.value);
  };

  return (
    <div className="room-creator">
      <h6>Room Name:</h6>
      <Input value={name} onChange={HandleOnChangeName} />
      <h6>Player Count:</h6>
      <Input
        value={playerCount}
        type="number"
        onChange={HandleOnChangePlayerCount}
      />
      <h6>Spies Count:</h6>
      <Input
        value={spiesCount}
        type="number"
        onChange={HandleOnChangeSpiesCount}
      />
      <h6>Play Time:</h6>
      <Input value={playTime} onChange={HandleChangePlayTime} />

      <Button onClick={OnClickCreateRoom}>Create Room</Button>
    </div>
  );
}
