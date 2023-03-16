import { useEffect, useState } from "react";

import { getRooms } from "./utils/get-rooms.utils";
import { randomString } from "../../utils/random-string.util";

import { If } from "../../components/If";
import { Room } from "./components/Room";
import { Menu } from "../../components/Menu";
import { Button } from "../../components/Button";
import { RoomCreator } from "./components/RoomCreator";
import { Else } from "../../components/Else";

import "./index.css";
import { createChannel } from "./utils/create-channel.utils";
import { useNavigate } from "react-router-dom";

export function PlayOnline() {
  const [rooms, setRooms] = useState([]);
  const [addingRoom, setAddingRoom] = useState(false);
  const [roomAdded, setRoomAdded] = useState(true);
  const history = useNavigate();

  useEffect(() => {
    getRooms(setRooms);
  }, []);

  const HandleOnClickCreateRoom = () => {
    setAddingRoom(!addingRoom);
  };

  const JoinChannel = (name) => {
    createChannel(name);
    history("/playonline/playroom");
  };

  return (
    <>
      <Menu />
      <If condition={addingRoom}>
        <RoomCreator
          handler={HandleOnClickCreateRoom}
          roomAdded={roomAdded}
          setter={setRoomAdded}
        />
      </If>
      <If condition={!addingRoom}>
        <h2>Rooms</h2>
        <div>
          <If condition={rooms.length}>
            {rooms.map((room) => {
              return (
                <Room key={randomString()} {...room} onClick={JoinChannel} />
              );
            })}
          </If>
          <Else condition={rooms.length}>
            <h4 className="message">No Active Rooms Found</h4>
          </Else>
        </div>
        <Button onClick={HandleOnClickCreateRoom}>Create Room</Button>
      </If>
    </>
  );
}
