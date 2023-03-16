import { useEffect } from "react";
import { useSelector } from "react-redux";
import { createChannel } from "./utils/create-channel.utils";

export function PlayRoom() {
  const onlinegame = useSelector((store) => store.online);

  createChannel(onlinegame.room);

  // create a channel that listens to subscribtions to channel then
  // if the count of users is bigger than player count in the room
  // else player is added to the play room we will show players by their name

  return null;
}
