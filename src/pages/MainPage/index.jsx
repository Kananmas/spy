import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../components/Menu";
import "./index.css";

export function MainPage() {
  const history = useNavigate();

  const goToHowToPlay = () => {
    history("/howtoplay");
  };

  return (
    <div>
      <Menu />
      <div className="button-group">
        <div>
          <Button onClick={goToHowToPlay}>How To Play</Button>
        </div>

        <div>
          <Button>Play Offline</Button>
        </div>
        <div>
          <Button>Play Online</Button>
        </div>
      </div>
    </div>
  );
}
