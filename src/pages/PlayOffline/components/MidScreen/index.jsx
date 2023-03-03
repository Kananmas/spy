import { Else } from "../../../../components/Else";
import { If } from "../../../../components/If";
import "./index.css";

export const MidScreen = (props) => {
  return (
    <div className="mid-screen">
      <If condition={props.index === 0}>
        <h1>Press Next To Start The Game</h1>
      </If>
      <Else condition={props.index === 0}>
        <h1>Please Give Phone To Next Player</h1>
      </Else>
    </div>
  );
};
