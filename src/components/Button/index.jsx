import { useEffect } from "react";
import { useState } from "react";

export function Button(props) {
  const { children } = props;
  const { disabled } = props;
  const [className, setClassName] = useState("standard-button");

  useEffect(() => {
    if (disabled) {
      setClassName((className) => className + " disabled");
    } else {
      setClassName("standard-button");
    }
  }, [disabled]);
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
