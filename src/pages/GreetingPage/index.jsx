import "./index.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { SpyIcon } from "../../components/SpyIcon";

export function GreetingPage() {
  const history = useNavigate();

  const HandleOnClick = () => {
    history("/home");
  };
  return (
    <div className="greeting-page">
      <h1>SPY</h1>
      <SpyIcon />
      <h3>Welcome To Spy</h3>
      <Button onClick={HandleOnClick}>Start</Button>
    </div>
  );
}
