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

export function PlayOnline() {
  const [rooms, setRooms] = useState([]);
  const [addingRoom, setAddingRoom] = useState(false);

  useEffect(() => {
    getRooms(setRooms);
  }, []);

  return (
    <>
      <Menu />
      <h2>Rooms</h2>
      <div>
        <If condition={rooms.length}>
          {rooms.map((room) => {
            return <Room key={randomString} {...room} />;
          })}
        </If>
        <Else condition={rooms.length}>
          <h4 className="message">No Active Rooms Found</h4>
        </Else>
      </div>
      <If condition={addingRoom}>
        <RoomCreator />
      </If>
      <Button>Create Room</Button>
    </>
  );
}
