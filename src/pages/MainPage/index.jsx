import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../components/Menu";
import "./index.css";

export function MainPage() {
  const history = useNavigate();

  const goToHowToPlay = () => {
    history("/howtoplay");
  };

  const playOnline = () => {
    history("/playonline");
  };

  const playOffline = () => {
    history("/playoffline");
  };

  return (
    <div>
      <Menu main={true} />
      <div className="button-group">
        <div>
          <Button onClick={goToHowToPlay}>How To Play</Button>
        </div>

        <div>
          <Button onClick={playOffline}>Play Offline</Button>
        </div>
        <div>
          <Button onClick={playOnline}>Play Online</Button>
        </div>
      </div>
    </div>
  );
}
