import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSpies } from "./utils/set-spies.utils";

export function PlayOffline() {
  const game = useSelector((store) => store.game);
  const dispatch = useDispatch();

  useEffect(() => {
    const spies = setSpies();

    console.log(spies);
  }, []);

  return (
    <div>
      <h2>{}</h2>
    </div>
  );
}
