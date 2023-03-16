import { useState, useEffect } from "react";

export function PlayRoom() {
  const [players, setPlayers] = useState([]);
  const [mangaerPlayer, setManagerPlayer] = useState();
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [channel, setChannel] = useState();

  useEffect(() => {}, []);

  // create a channel that listens to subscribtions to channel then
  // if the count of users is bigger than player count in the room
  // else player is added to the play room we will show players by their name

  return null;
}
