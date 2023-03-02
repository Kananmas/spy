import { useEffect } from "react";
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
  const [value, dispatch] = useReducer(counterReducer, props.minvalue);

  const handleOnClickPlus = () => {
    if (value < props.maxvalue) dispatch({ type: "INCREASE" });
  };

  const handleOnClickMinus = () => {
    if (value > props.minvalue) dispatch({ type: "DECREASE" });
  };

  useEffect(() => {
    props.setter(value);
  }, [value]);

  return (
    <>
      <div className="counter">
        <h5>{props.title}</h5>
        <input className="standard-input" value={value} readOnly />
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
