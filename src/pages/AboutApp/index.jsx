import { Menu } from "../../components/Menu";
import "./index.css";
import { SpyIcon } from "../../components/SpyIcon";

export function AboutApp() {
  return (
    <div className="about-app">
      <Menu />
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
