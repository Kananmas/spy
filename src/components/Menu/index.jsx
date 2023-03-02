import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "./index.css";

export function Menu(props) {
  const [display, setDisplay] = useState("none");
  const [menuStatus, setMenuStatus] = useState("close");
  const history = useNavigate();

  const ChangeMenuStatus = () => {
    if (menuStatus === "close") {
      setMenuStatus("open");
      setDisplay("block");
    } else {
      setMenuStatus("close");
      setDisplay("none");
    }
  };

  const goToGameSettings = () => {
    history("/gamesettings");
  };

  const goToAboutApp = () => {
    history("/aboutapp");
  };
  return (
    <>
      <AiOutlineMenu onClick={ChangeMenuStatus} className="icons menu-icon" />
      <div
        className="menu"
        style={{
          display: display,
        }}
      >
        <div className="grid">
          <div className="col-1">
            <AiOutlineCloseCircle
              onClick={ChangeMenuStatus}
              className="icons"
            />
          </div>
        </div>
        {props.children}
        <div onClick={goToAboutApp} className="menu-item">
          About App
        </div>
        <div onClick={goToGameSettings} className="menu-item">
          Game Settings
        </div>
      </div>
    </>
  );
}
