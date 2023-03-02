import { Menu } from "../../components/Menu";
import "./index.css";
import { SpyIcon } from "../../components/SpyIcon";
import { useCommonRoutes } from "../../hooks/commonroutes.hook";

export function AboutApp() {
  const commonRoutes = useCommonRoutes();

  return (
    <div className="about-app">
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

      <div className="explanation">
        <p>
          This app is developed by kanan masajedi,as an project sample,that uses
          technologies as reactjs, redux, supabase
        </p>
      </div>

      <SpyIcon />

      <h3>Thank You</h3>
      <h5>For using this application</h5>
    </div>
  );
}
