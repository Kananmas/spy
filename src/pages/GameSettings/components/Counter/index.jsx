import { useReducer } from "react";
import "./index.css";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

export function Counter(props) {
  const [value, dispatch] = useReducer(counterReducer, 0);

  const handleOnClickPlus = () => {
    dispatch({ type: "INCREASE" });
  };

  const handleOnClickMinus = () => {
    dispatch({ type: "DECREASE" });
  };

  return (
    <>
      <div className="counter">
        <h5>{props.title}</h5>
        <input className="counter-input" value={value} readOnly />
        <div className="counter-buttons">
          <button className="counter-button" onClick={handleOnClickPlus}>
            +
          </button>
          <button className="counter-button" onClick={handleOnClickMinus}>
            -
          </button>
        </div>
      </div>
    </>
  );
}
