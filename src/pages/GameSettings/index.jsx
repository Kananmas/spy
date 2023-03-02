import { Counter } from "./components/Counter";
import { Menu } from "../../components/Menu";
import { useCommonRoutes } from "../../hooks/commonroutes.hook";

export function GameSettings() {
  const commonRoutes = useCommonRoutes();

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
      <Counter title="Player Count" />
      <Counter title="Play Time" />
      <Counter title="Maximum Number Of Spies" />
    </>
  );
}
